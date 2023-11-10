import React from "react";
import { Container } from "../components/Container";
import { CartPage } from "../components/Cart/CartPage";
import RestClient from "../RestClient/RequestTypes";
import BaseUrl from "../RestClient/ApiUrls";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Cart",
  description: "Order your favorite products and enjoy them",
};

const Page = async () => {
  try {
    const cartData = await RestClient.GetRequest(
      BaseUrl.getCart,
      cookies().get("accessToken")?.value
    );

    return (
      <main className=" pt-[129px]">
        <Container>
          <CartPage data={cartData.data} />
        </Container>
      </main>
    );
  } catch (err) {
    redirect("/");
  }
};

export default Page;
