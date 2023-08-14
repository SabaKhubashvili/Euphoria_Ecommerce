import React from "react";
import { Container } from "../../components/Container";
import Image from "next/image";
import {
  FacebookBlackIcon,
  InstagramBlackIcon,
  TwitterBlackIcon,
} from "@/public/Svg/Social";
import {
  SingleProductDetails,
  SingleProductInformation,
} from "@/app/components/Product/SingleProductPageUi";
import { ProductsByTagSlider } from "@/app/components/Product/ProductsByTagSlider";

interface params {
  productId: string;
}

const page = ({ params }: { params: params }) => {
  return (
    <main className=" lg:pt-[200px] pt-[150px]">
      <Container>
        <div className="2xl:mx-[238px] xl:mx-[150px] lg:mx-[100px] md:mx-[50px] sm:mx-[20px] ">
          <div className="grid lg:grid-cols-2 lg:gap-[69px] gap-[20px] ">
            <div className="col-span-1  w-full lg:h-fit h-[400px]">
              <Image
                src={"/Images/Product/Product.webp"}
                alt="Product_Image"
                width={624}
                height={790}
                className="w-full object-cover h-full"
              />
              <div className="flex justify-center items-center gap-[10px] mt-[15px] text-[12px] font-medium">
                SHARE:
                <FacebookBlackIcon />
                <TwitterBlackIcon />
                <InstagramBlackIcon />
              </div>
            </div>
            <div className="col-span-1">
              <SingleProductInformation />
            </div>
          </div>
          <SingleProductDetails />
        </div>
        <div className="pt-[66px] pb-[42px]">
          <ProductsByTagSlider
            title="You might also like"
            sliderName="Recomendations"
          />
        </div>
      </Container>
    </main>
  );
};

export default page;
