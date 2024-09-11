import { NextRequest, NextResponse } from "next/server";
import { getAppConfig } from "./config";
import path from "path";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 3. /govuk-assets (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|govuk-assets|[\\w-]+\\.\\w+).*)",
  ],
};

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { searchParams } = new URL(request.url);
  const council = searchParams.get("council");
  const appConfig = getAppConfig();

  // console.log(request);

  // && appConfig.councils.includes(council)

  // without js the select dropdown will send a GET request with the council query param to /?council=selected-council
  // redirect to council page if that happens
  if (pathname === "/" && council) {
    return NextResponse.redirect(new URL(`/${council}`, request.url));
  }

  const isNestedPath = pathname.split("/").length > 2;
  const isValidPath = appConfig.councils.some((council) =>
    pathname.includes(`/${council}/`),
  );
  if (isNestedPath) {
    console.log(pathname);
    if (!isValidPath) {
      console.log("No access");
      return NextResponse.redirect(new URL("/404", request.url));
    }
    // if (isValidPath) {
    //   console.log(`Pathname matches one of the councils: ${pathname}`);
    // } else {
    //   console.log("Pathname does not match any council");
    // }
  }

  // const pathnameCouncil = pathname.replace(/^\/|\/$/g, "");

  // console.log(pathname);
  // // Check if the council is in appConfig.councils
  // if (appConfig.councils.includes(pathnameCouncil)) {
  //   console.log(`Pathname matches one of the councils: ${council}`);
  // } else {
  //   console.log("Pathname does not match any council");
  //   // return NextResponse.redirect(new URL("/404", request.url));
  // }

  return NextResponse.next();
}
