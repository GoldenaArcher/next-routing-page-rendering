import { NextResponse } from "next/server";

export const middleware = (req) => {
  console.log('middleware req', req);

  return NextResponse.next();
};

export const config = {
    // matcher: '/news',
}