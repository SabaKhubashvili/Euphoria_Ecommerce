"use client";

import React, { useMemo, useState } from "react";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { categoryData, productInterface, products } from "@/app/constants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const Product = ({ name, description, image }: productInterface) => {
  return (
    <div className="px-2 py-1 flex flex-col gap-[10px] 2xl:w-1/6 xl:w-1/5 md:w-1/4 sm:w-1/3 xs:w-1/2 w-full">
      <div className="relative w-full h-full ">
        <Image
          src={"/Images/Product/Black_Placeholder.webp"}
          alt="Image_Of_Product"
          width={200}
          height={400}
          className="w-full h-full"
        />
        <div className="absolute top-2 right-2 flex gap-[5px]">
          <div className="p-1 bg-white rounded-full">
            <Icon
              className="fill-red-400 cursor-pointer"
              svg={WebsiteIcons["redDelete"]}
            />
          </div>
          <div className="p-1 bg-white rounded-full">
            <Icon
              className="fill-red-400 cursor-pointer"
              svg={WebsiteIcons["edit"]}
            />
          </div>
        </div>
      </div>
      <div className="">
        <h3 className="font-semibold text-[16px]">{name}</h3>
        <p className="text-secondaryGray">{description}</p>
      </div>
    </div>
  );
};

export const AdminAllProducts = () => {
  const [choosedCategory, setChoosedCategory] = useState<undefined | number>();
  const [filterByName, setFilterByName] = useState<string>("");

  const displayableProducts = useMemo(() => {
    if (choosedCategory && filterByName.length > 0) {
      return products.filter(
        (product) =>
          product.category === choosedCategory &&
          product.name.includes(filterByName)
      );
    } else if (filterByName.length > 0) {
      return products.filter((product) =>
        product.name.toLowerCase().includes(filterByName.toLowerCase())
      );
    } else if (choosedCategory) {
      return products.filter((product) => product.category === choosedCategory);
    } else {
      return products;
    }
  }, [choosedCategory, filterByName]);

  return (
    <section className="pt-[44px]">
      <div className="flex gap-[10px]">
        <div className="w-[274px]">
          <SecondaryInput
            placeholder="Search by product name"
            type="secondary"
            rightSvg={<Icon svg={WebsiteIcons["Search"]} />}
            onChange={(e) => setFilterByName(e.target.value)}
            value={filterByName}
            // onSubmit={searchForTransactions}
          />
        </div>
        <div
          className="cursor-pointer bg-purple text-white px-[10px] py-[8px] rounded-[6px]"
          // onClick={() => setFilteredCustomers(undefined)}
        >
          Reset
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        className="mt-[15px] w-full"
        spaceBetween={15}
      >
        {categoryData.map((category) => (
          <SwiperSlide
            key={category.id}
            className={`px-2 py-1 border-[1px] w-fit border-solid select-none rounded-sm cursor-pointer
            ${
              choosedCategory === category.id
                ? "border-black text-black"
                : "border-secondaryGray  text-secondaryGray"
            }`}
            onClick={() => {
              choosedCategory === category.id
              ? setChoosedCategory(undefined)
                : setChoosedCategory(category.id);
            }}
          >
            {category.category}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* All prodcuts goes here */}
      <div className="mt-[25.5px] flex flex-wrap items-start justify-start  ">
        {displayableProducts.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
};
