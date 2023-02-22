import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next|images|next/image|examples|[\\w-]+\\.\\w+).*)"],
};

export default async function middleware(req: NextRequest) {
  const vercelDomain = process.env.VERCEL_DOMAIN;
  const url = req.nextUrl;
  const hostname = req.headers.get("host")!;
  const path = url.pathname;
  const currentHost =
    process.env.NODE_ENV === "production"
      ? hostname.replace(vercelDomain!, "")
      : hostname.replace(`.localhost`, "").split(":")[0];

  return NextResponse.rewrite(
    new URL(`/_sites/${currentHost}${path}`, req.url)
  );
}
