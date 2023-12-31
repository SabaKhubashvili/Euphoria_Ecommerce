import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { getCookie } from "cookies-next";
import { SignJWT, jwtVerify, type JWTPayload } from "jose";

async function verifyToken(token: string | null) {
  try {
    if (!token) {
      return false;
    }

      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );
    
    return payload !== undefined;
  } catch (error) {
    return false;
  }
}
async function checkIfIsAdmin(request:NextRequest) {
  try {
    const accessToken = request.cookies.get("accessToken")?.value;
    
    if (!accessToken) {
      return false;
    }

    const { payload } = await jwtVerify(
      accessToken,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
      
    return payload !== undefined && payload.isAdmin;
  } catch (error) {
    return false;
  }
}

async function isAuthorized(request:NextRequest){
  const accessToken = request.cookies.get("accessToken")?.value;
  const test = await verifyToken(accessToken || "");
    
  if(test){
    return true
  }else{
    return false
  }
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (await isAuthorized(request)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if(request.nextUrl.pathname.startsWith('/cart') || request.nextUrl.pathname.startsWith('/favorites')){
    if (!await isAuthorized(request)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if(request.nextUrl.pathname.startsWith('/admin')){
    if(!await checkIfIsAdmin(request)){
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
