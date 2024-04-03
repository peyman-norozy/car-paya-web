import {NextResponse} from "next/server";

export default function middleware(req) {
    // console.log("pppppppppppppppp",req,req.nextUrl.pathname.startsWith("/login"),req.nextUrl.pathname.startsWith("/profile"),
    //     !req.cookies.has("Authorization"))
    console.log( req.nextUrl.pathname,req.nextUrl.pathname.startsWith("/profile"),req.cookies.has("Authorization"))
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
    matcher: ["/login/:path*", "/profile/:path*"],
};