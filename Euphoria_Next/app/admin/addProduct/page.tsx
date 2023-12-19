import { AddOrEditProduct } from "@/app/components/admin/addOrEditProduct/addOrEditProduct";
import React from "react";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { CategoryInterface } from "@/app/types";

const page = async ({
  searchParams,
}: {
  searchParams: {
    productId?: string;
  };
}) => {
  let product;
  const { data: categories } = (await RestClient.GetRequest(
    BaseUrl.getCategories
  )) as { data: CategoryInterface[] };
  if (searchParams.productId) {
    try {
      const { data } = await RestClient.GetRequest(
        BaseUrl.getProductById + `/${searchParams.productId}`
      );
      product = data;
    } catch (error) {
      return null
    }
  }

  return (
    <main>
      <AddOrEditProduct
        categories={categories}
        product={product ? product : null}
      />
    </main>
  );
};

export default page;
