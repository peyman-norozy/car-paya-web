import {NextResponse,NextRequest} from "next/server";
import axios from "axios";
import {API_PATHS} from "@/configs/routes.config";
import {getCookie} from "cookies-next";

export default function middleware(req) {
    // console.log("pppppppppppppppp",req,req.nextUrl.pathname.startsWith("/login"),req.nextUrl.pathname.startsWith("/profile"),
    //     !req.cookies.has("Authorization"))
    // console.log(NextRequest)
    // axios.get(process.env.BASE_API +
    //     API_PATHS.USERPANEL +
    //     API_PATHS.CARS, {
    //     headers: {
    //         Authorization: "Bearer " + getCookie("Authorization"),
    //         Accept: "application/json"
    //     }
    // }).then(res => console.log(res)).catch(error => console.log("dddddddddddd", error))

    // console.log( req.nextUrl.pathname,req.nextUrl.pathname.startsWith("/profile"),req.cookies.has("Authorization"))
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