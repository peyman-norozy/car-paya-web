import {NextResponse} from "next/server";

export default async function middleware(req) {
    if (
        req.nextUrl.pathname.startsWith("/login") &&
        req.cookies.has("Authorization")
    ) {
        return NextResponse.redirect(new URL("/profile", req.url));
    } else if (
        req.nextUrl.pathname.startsWith("/profile") &&
        !req.cookies.has("Authorization")
    ) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ["/login/:path*", "/profile/:path*","/profile/my-vehicle/my-car"],
};