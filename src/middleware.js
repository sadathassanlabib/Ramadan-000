import { NextResponse } from "next/server";

export function middleware(request) {

  const dummyUserData={
    role:'user',
    email:'test@admin.com'
  }  
  let isAboutPage = request.nextUrl.pathname.startsWith("/about");
  
  let isAdmin = dummyUserData.role === "admin";

  if (isAboutPage && !isAdmin) return NextResponse.redirect(new URL("/login", request.url))

  return NextResponse.next();
//   redirect(new URL("/resource", request.url));
}

// export const config = {
//   matcher: ["/about/:path*"],
// };

