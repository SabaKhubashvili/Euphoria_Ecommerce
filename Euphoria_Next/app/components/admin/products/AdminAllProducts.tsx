import React from "react";
import { SecondaryInput } from "../../Inputs/SecondaryInput";
import { Icon } from "../../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import { productInterface, products } from "@/app/constants";
import Image from "next/image";

const Product = ({name,description,image}:productInterface) => {
    return(
        <div className="px-2 py-1 flex flex-col gap-[10px]">
            <div className="relative">
                <Image
                    src={'/Images/Product/Black_Placeholder.webp'}
                    alt="Image_Of_Product"
                    width={200}
                    height={400}
                    className="w-[300px] h-[400px]"
                />
            </div>
            <div className="">
                <h3 className="font-bold text-[16px]">{name}</h3>
            </div>
        </div>
)}

export const AdminAllProducts = () => {
  return (
    <section className="pt-[44px]">
      <div className="flex gap-[10px]">
        <div className="w-[274px]">
          <SecondaryInput
            placeholder="Search by product name"
            type="secondary"
            rightSvg={<Icon svg={WebsiteIcons["Search"]} />}
            // onChange={(e) => setFindTransaction(e.target.value)}
            // value={findTransaction}
            // onSubmit={searchForTransactions}
          />
        </div>
        <div
          className="cursor-pointer bg-purple text-white px-[10px] py-[8px] rounded-[6px]"
        //   onClick={() => setFilteredCustomers(undefined)}
        >
          Reset
        </div>
      </div>

      {/* All prodcuts goes here */}
      <div className="mt-[25.5px] flex flex-wrap items-start justify-start  ">
        {
            products.map(product=>(
                <Product {...product} />
            ))
        }
      </div>
    </section>
  );
};
