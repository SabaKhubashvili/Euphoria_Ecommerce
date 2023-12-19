import { Providers } from "./Providers";
import "./globals.css";
import AppLayout from "./AppLayout";
import { CartInterface } from "./types";
import RestClient from "./RestClient/RequestTypes";
import BaseUrl from "./RestClient/ApiUrls";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode'

interface JwtPayload {
  exp: number;
}

const serverSideIsAuthenticated = () => {
  const token = cookies().get('accessToken')?.value;

  if (!token) {
    return false;
  }

  try {
    const secret = process.env.JWT_SECRET;
    const verify = jwt.verify(token, secret || '') as JwtPayload;
    
    if (verify.exp  < Date.now() / 1000) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let cartData: CartInterface | null;
  
  if (serverSideIsAuthenticated()) {
    const { data }: { data: CartInterface } = await RestClient.GetRequest(
      BaseUrl.getCart,
      cookies().get("accessToken")?.value
    );
    cartData = data;
  } else {
    cartData = null;
  }

  return (
    <html lang="en">
      <body>
        <Providers>
          <AppLayout cartData={cartData}>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
