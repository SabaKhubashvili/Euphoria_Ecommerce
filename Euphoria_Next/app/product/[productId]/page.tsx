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
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { productInterface } from "@/app/types";
import { notFound, redirect } from "next/navigation";

interface params {
  productId: string;
}

const page = async ({ params }: { params: params }) => {
  try {
    const { data: product }: { data: productInterface } =
      await RestClient.GetRequest(
        BaseUrl.getProductById + "/" + params.productId
      );
    if (!product) {
      return notFound();
    }
      const { data: similarProducts }: { data: productInterface[] } =
        await RestClient.postRequest(BaseUrl.getRecommendedProducts, {
          category: product.category?._id,
          productId: params.productId,
        });

    return (
      <main className="lg:pt-[200px] pt-[150px]">
        <Container>
          <div className="2xl:mx-[238px] xl:mx-[150px] lg:mx-[100px] md:mx-[50px] sm:mx-[20px] ">
            <div className="grid lg:grid-cols-2 lg:gap-[69px] gap-[20px] ">
              <div className="col-span-1 w-full lg:h-[900px]  h-[400px]">
                <Image
                  src={product.images[0]}
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
              <div className="col-span-1 select-none">
                <SingleProductInformation
                  _id={product._id}
                  brand={product.brand}
                  title={product.title}
                  availableSizes={product.availableSizes}
                  price={product.price}
                  category={product.category || { _id: "ID", name: "Product" }}
                  description={product.description}
                  discount={product.discount}
                />
              </div>
            </div>
            <SingleProductDetails
              advantages={product.advantages}
              aboutProduct={product.aboutProduct}
            />
          </div>
          <div className="pt-[66px] pb-[42px]">
            <ProductsByTagSlider
              title="You might also like"
              sliderName="Recomendations"
              data={similarProducts}
            />
          </div>
        </Container>
      </main>
    );
  } catch (err: any) {
    if (err.response && err.response.status === 400) {
      redirect("/404");
    }
  }
};

export default page;
