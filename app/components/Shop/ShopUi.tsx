import React from "react";
import { Roboto } from "../assets/Fonts";
import { Slider } from "@mui/material";
import Box from '@mui/material/Box';

export const BrandFilter = () => {
  return (
    <div className="flex flex-col gap-[31px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] font-medium">Brand</h1>
        <p>-</p>
      </div>
      <div className="flex flex-col gap-[15px]">
        <div className="flex items-center gap-[9px]">
          <input type="checkbox" name="" id="" />
          <p
            className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
          >
            State
          </p>
        </div>
        <div className="flex items-center gap-[9px]">
          <input type="checkbox" name="" id="" />
          <p
            className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
          >
            Cooper
          </p>
        </div>
        <div className="flex items-center gap-[9px]">
          <input type="checkbox" name="" id="" />
          <p
            className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
          >
            bardot
          </p>
        </div>
        <div className="flex items-center gap-[9px]">
          <input type="checkbox" name="" id="" />
          <p
            className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
          >
            alfani
          </p>
        </div>
        <div className="flex items-center gap-[9px]">
          <input type="checkbox" name="" id="" />
          <p
            className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
          >
            cece
          </p>
        </div>
        <div className="flex items-center gap-[9px]">
          <input type="checkbox" name="" id="" />
          <p
            className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
          >
            donna ricco
          </p>
        </div>
      </div>
    </div>
  );
};

export const SizeFilter = () => {
  return (
    <div className="flex flex-col gap-[31px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] font-medium">Size (Inches)</h1>
        <p>-</p>
      </div>
      <div className="flex gap-[10px] flex-wrap xl:w-4/6">
        <div className="uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[6px]">
          osfa
        </div>
        <div className="uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[6px]">
          osfa
        </div>
        <div className="uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[6px]">
          osfa
        </div>
        <div className="uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[6px]">
          osfa
        </div>
        <div className="uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[6px]">
          osfa
        </div>
        <div className="uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[6px]">
          osfa
        </div>
        <div className="uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[6px]">
          osfa
        </div>
        <div className="uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[6px]">
          osfa
        </div>
        <div className="uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[6px]">
          osfa
        </div>
        <div className="uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[6px]">
          osfa
        </div>
        <div className="uppercase text-gray text-center border-[1px] border-solid border-divider py-[10px] px-[6px]">
          osfa
        </div>
      </div>
    </div>
  );
};

export const LengthFilter = () => {
  return (
    <div className="flex flex-col gap-[31px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] font-medium">Dress length</h1>
        <p>-</p>
      </div>
      <div className="flex flex-col gap-[15px]">
        <div className="flex items-center gap-[9px]">
          <input type="checkbox" name="" id="" />
          <p
            className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
          >
            short
          </p>
        </div>
        <div className="flex items-center gap-[9px]">
          <input type="checkbox" name="" id="" />
          <p
            className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
          >
            knee length
          </p>
        </div>
        <div className="flex items-center gap-[9px]">
          <input type="checkbox" name="" id="" />
          <p
            className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
          >
            hight low
          </p>
        </div>
        <div className="flex items-center gap-[9px]">
          <input type="checkbox" name="" id="" />
          <p
            className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
          >
            long
          </p>
        </div>
        <div className="flex items-center gap-[9px]">
          <input type="checkbox" name="" id="" />
          <p
            className={`${Roboto.className} text-secondaryBlack text-[14px] uppercase font-medium`}
          >
            midi
          </p>
        </div>
      </div>
    </div>
  );
};

export const ColorFilter = () => {
  return (
    <div className="flex flex-col gap-[31px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] font-medium">Color</h1>
        <p>-</p>
      </div>
      <div className="flex gap-[10px] flex-wrap xl:w-4/6">
        <div className="p-[2px]">
          <div className="w-[15px] h-[15px] bg-red-500" />
        </div>
        <div className="p-[2px]">
          <div className="w-[15px] h-[15px] bg-blue-500" />
        </div>
        <div className="p-[2px]">
          <div className="w-[15px] h-[15px] bg-green-500" />
        </div>
        <div className="p-[2px]">
          <div className="w-[15px] h-[15px] bg-black" />
        </div>
        <div className="p-[2px] border-[1px] border-black">
          <div className="w-[15px] h-[15px] bg-purple-500 " />
        </div>
        <div className="p-[2px]">
          <div className="w-[15px] h-[15px] bg-yellow-500" />
        </div>
        <div className="p-[2px]">
          <div className="w-[15px] h-[15px] bg-cyan-500" />
        </div>
        <div className="p-[2px]">
          <div className="w-[15px] h-[15px] bg-gray" />
        </div>
        <div className="p-[2px]">
          <div className="w-[15px] h-[15px] bg-divider" />
        </div>
        <div className="p-[2px]">
          <div className="w-[15px] h-[15px] bg-red-900" />
        </div>
        <div className="p-[2px]">
          <div className="w-[15px] h-[15px] bg-blue-900" />
        </div>
      </div>
    </div>
  );
};


export const PriceSlider = () =>{
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };

    
    return(
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={1500}
                sx={{
                    color:'black',
                    '& .MuiSlider-thumb': {
                        borderRadius: '1px',
                        width:'5px'
                      },
                }}
            />
    
    )
}