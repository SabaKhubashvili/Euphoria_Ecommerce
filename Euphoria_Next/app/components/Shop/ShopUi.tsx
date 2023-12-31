import React, { SyntheticEvent, useState } from "react";
import { Roboto } from "../assets/Fonts";
import { Slider } from "@mui/material";
import Box from "@mui/material/Box";
import { MinusIcon, PlusIcon } from "@/public/Svg/Icons";
import { FilterConstant } from "@/app/constants";

interface Props {
  onChange: (e: string) => void;
  values: string[];
  data?:any
  title?:string
}
interface PriceProps {
  onChange: (e: number[]) => void;
  values: string[];
}

export const FilterWithCheckboxs = ({ title,onChange, values , data}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-[31px]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h1 className="2xl:text-[24px] xl:text-[22px]   text-[20px] font-medium">{title}</h1>
        {isOpen ? (
          <div className="w-5 cursor-pointer">
            <MinusIcon />
          </div>
        ) : (
          <div className="w-5 cursor-pointer">
            <PlusIcon />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col gap-[15px]">
          {data.map((filter:string) => (
            <div className="flex items-center gap-[9px] cursor-pointer" key={filter} onClick={()=>onChange(filter)}>
              <input
                type="checkbox"
                name=""
                id=""
                checked={values.includes(filter)}
                onChange={() => {
                  onChange(filter);
                }}
              />
              <p
                className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
              >
                {filter}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export const BrandFilter = ({ onChange, values }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-[31px]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h1 className="2xl:text-[24px] xl:text-[22px]   text-[20px] font-medium">Brand</h1>
        {isOpen ? (
          <div className="w-5 cursor-pointer">
            <MinusIcon />
          </div>
        ) : (
          <div className="w-5 cursor-pointer">
            <PlusIcon />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col gap-[15px]">
          {FilterConstant["brand"].map((filter) => (
            <div className="flex items-center gap-[9px] cursor-pointer" key={filter} onClick={()=>onChange(filter)}>
              <input
                type="checkbox"
                name=""
                id=""
                checked={values.includes(filter)}
                onChange={() => {
                  onChange(filter);
                }}
              />
              <p
                className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
              >
                {filter}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const SizeFilter = ({ onChange, values }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-[31px]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h1 className="2xl:text-[24px] xl:text-[22px] text-[20px]  font-medium">Size</h1>
        {isOpen ? (
          <div className="w-5 cursor-pointer">
            <MinusIcon />
          </div>
        ) : (
          <div className="w-5 cursor-pointer">
            <PlusIcon />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="flex gap-[10px] flex-wrap xl:w-4/6">
          {FilterConstant["size"].map((size) => (
            <div
              key={size}
              className={`cursor-pointer uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[6px]
                 ${values.includes(size) && "!text-black !border-black"}
                 `}
              onClick={() => onChange(size)}
            >
              {size}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const LengthFilter = ({ values, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-[31px]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h1 className="2xl:text-[24px] xl:text-[22px] text-[20px]  font-medium">Dress length</h1>
        {isOpen ? (
          <div className="w-5 cursor-pointer">
            <MinusIcon />
          </div>
        ) : (
          <div className="w-5 cursor-pointer">
            <PlusIcon />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col gap-[15px]">
          {FilterConstant["length"].map((length) => (
            <div className="flex items-center gap-[9px] cursor-pointer" key={length} onClick={()=>onChange(length)}>
              <input
                type="checkbox"
                checked={values.includes(length)}
                onChange={() => {
                  onChange(length);
                }}
              />
              <p
                className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
              >
                {length}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const ColorFilter = ({values,onChange}:Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-[31px]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h1 className="2xl:text-[24px] xl:text-[22px] text-[20px]  font-medium">Color</h1>
        {isOpen ? (
          <div className="w-5 cursor-pointer">
            <MinusIcon />
          </div>
        ) : (
          <div className="w-5 cursor-pointer">
            <PlusIcon />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="flex gap-[10px] flex-wrap xl:w-4/6">
        {
        FilterConstant['color'].map((color) => (
          <div className={`p-[2px]  cursor-pointer ${values.includes(color.name) && 'border-[1px] border-black'}`} key={color.name} onClick={()=>onChange(color.name)}>
            <div className={`w-[15px] h-[15px] ${color.class}`} />
          </div>
        ))
      }
        </div>
      )}
    </div>
  );
};

export const PriceSlider = ({values,onChange}:PriceProps) => {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleChangeCommitted = (event: Event | SyntheticEvent<Element | Event> , newValue: number | number[]) => {
    const [leftValue, rightValue] = newValue as number[];
    onChange([leftValue,rightValue])
  };

  return (
    <div className="flex flex-col gap-[31px] overflow-hidden ">
      <h1 className="2xl:text-[24px] xl:text-[22px] text-[20px]  font-medium">Price</h1>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        valueLabelDisplay="auto"
        style={{
          margin:'auto',
          width:'90%'
        }}
        max={1500}
        sx={{
          color: "black",
          "& .MuiSlider-thumb": {
            borderRadius: "1px",
            width: "5px",
          },
        }}
      />
    </div>
  );
};

export const AboutDresses = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-[31px]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h1 className="2xl:text-[24px] xl:text-[22px] text-[20px]  font-medium">About Dresses</h1>
        {isOpen ? (
          <div className="w-5 cursor-pointer">
            <MinusIcon />
          </div>
        ) : (
          <div className="w-5 cursor-pointer">
            <PlusIcon />
          </div>
        )}
      </div>
      {isOpen && (
        <p className="text-[18px] leading-[28px] font-light">
          Every day we&rsquo;re gonna be dropping the latest trends to hel p you nail
          every Summer sitch. Whether it&rsquo;s a graduation, you r mate&rsquo;s wedding,
          or just a cute day at the races with the ga ls, our occasion dresses
          have got you covered. Not looking for something fancy? No stress .
          We&rsquo;ve got day dresses for days (aka bodycon dresses, t-shirt dresses,
          oversized shirt dresses).
        </p>
      )}
    </div>
  );
};
