import {NextResponse} from "next/server";

export default function middleware(req) {
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
    matcher: ["/:path*","/login/:path*", "/profile/:path*"],
};