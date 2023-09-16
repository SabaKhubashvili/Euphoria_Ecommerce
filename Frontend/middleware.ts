import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { getCookie } from "cookies-next";
import {SignJWT, jwtVerify, type JWTPayload} from 'jose';
import { UseUser } from "./app/hooks/UseUser";

async function verifyToken(token: string | null) {
  try {
    if (!token) {
      return false;
    }
  
    const {payload} = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return payload  !== undefined;
    
  } catch (error) {
    return false;
  }
}

export async function middleware(
  request: NextRequest,
) {

  const accessToken = request.cookies.get('accessToken')?.value
  const test = await verifyToken(accessToken || '')

  if (test) { 
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
    matcher: ['/login', '/register'],
  }