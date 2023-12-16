"use client";

import React, { useMemo, useState } from "react";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { categoryData } from "@/app/constants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { productInterface } from "@/app/types";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { getCookie } from "cookies-next";

const Product = ({ _id, title, description, images }: productInterface) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleProductDelete = () => {
    setIsLoading(true);
    RestClient.deleteRequest(
      `${BaseUrl.deleteProduct}/${_id}`,
      getCookie("accessToken")
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="relative w-full h-full">
      <Link
        href={{ pathname: "/admin/addProduct", query: { productId: _id } }}
        className="flex flex-col gap-[10px] w-full h-full col-span-1"
      >
        <div className="relative w-full h-full">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              Loading...
            </div>
          ) : (
            <Image
              alt="Product"
              src={`${images[0]}`}
              className="w-full select-none object-cover"
              fill
            />
          )}
        </div>
      </Link>
      <div className="absolute top-2 right-2 flex gap-[5px]">
        <div className="p-1 bg-white rounded-full" onClick={handleProductDelete}>
          <Icon
            className={`fill-${isLoading ? "gray" : "red-400"} cursor-pointer`}
            svg={WebsiteIcons["redDelete"]}
          />
        </div>
        <div className="p-1 bg-white rounded-full">
          <Icon
            className={`fill-${isLoading ? "gray" : "red-400"} cursor-pointer`}
            svg={WebsiteIcons["edit"]}
          />
        </div>
      </div>
      <div className="">
        <h3 className="font-semibold text-[16px]">{title}</h3>
        {/* <p className="text-secondaryGray">{description}</p> */}
      </div>
    </div>
  );
};

export const AdminAllProducts = ({ products }: { products: productInterface[] }) => {
  const [choosedCategory, setChoosedCategory] = useState<undefined | number>();
  const [filterByName, setFilterByName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const displayableProducts = useMemo(() => {
    if (choosedCategory && filterByName.length > 0) {
      return products.filter(
        (product) =>
          product.category._id === JSON.stringify(choosedCategory) &&
          product.title.includes(filterByName)
      );
    } else if (filterByName.length > 0) {
      return products.filter((product) =>
        product.title.toLowerCase().includes(filterByName.toLowerCase())
      );
    } else if (choosedCategory) {
      return products.filter(
        (product) => product.category._id === JSON.stringify(choosedCategory)
      );
    } else {
      return products;
    }
  }, [choosedCategory, filterByName,products]);

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
          />
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
      {/* All products go here */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-[25px]">
        {displayableProducts.map((product) => (
          <div key={product._id} className="h-[140vw] xs:h-[70vw] md:h-[50vw] lg:h-[35vw] 2xl:h-[25vw]">
            <Product {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};
