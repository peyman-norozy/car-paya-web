import { NextResponse } from "next/server";
import { API_PATHS } from "@/configs/routes.config";

export default async function middleware(req) {
    const profileResponse = NextResponse.redirect(new URL("/profile", req.url))
    const loginResponse = NextResponse.redirect(new URL("/login", req.url))

    if (
        req.nextUrl.pathname.startsWith("/login") &&
        req.cookies.has("Authorization")
    ) {
        let state = ""
        await fetch(process.env.BASE_API + API_PATHS.USERPANEL + API_PATHS.CARS, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + (req.cookies.get("Authorization") === undefined ? "" : req.cookies.get("Authorization").value),
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(res => {
            return res.json()
        }).then(resp => {
            if (resp.status === "success" && req.nextUrl.pathname.startsWith("/login")) {
                console.log("success1")
                state = "success1"
            } else {
                console.log("failed1")
                state = "failed1"
                loginResponse.cookies.delete("Authorization")
                console.log(req.url)
            }
        })
            .catch(error => {
                console.log("eeeeeeeeeeee", error)
            })
        if (state === "failed1") {
            return loginResponse
        } else if (state === "success1") {
            return profileResponse
        }
    } else if (
        req.nextUrl.pathname.startsWith("/profile") &&
        req.cookies.has("Authorization")
    ) {
        let state = ""
        await fetch(process.env.BASE_API + API_PATHS.USERPANEL + API_PATHS.CARS, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + (req.cookies.get("Authorization") === undefined ? "" : req.cookies.get("Authorization").value),
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(res => {
            return res.json()
        }).then(resp => {
            if (resp.status === "success" && req.nextUrl.pathname.startsWith("/login")) {
                console.log("success")
                state = "success"
            } else if (resp.status !== "success") {
                console.log("failed")
                state = "failed"
                loginResponse.cookies.delete("Authorization")
                console.log(req.url)
            }
        })
            .catch(error => {
                console.log("eeeeeeeeeeee", error)
            })
        if (state === "success") {
            return profileResponse
        } else if (state === "failed") {
            return loginResponse
        }

    } else if (
        req.nextUrl.pathname.startsWith("/profile") &&
        !req.cookies.has("Authorization")
    ) {
        console.log("sfsdfdsfsfsff")
        return NextResponse.redirect(new URL("/login", req.url))
    }
}

export const config = {
    matcher: ["/login/:path*", "/profile/:path*", "/profile/my-vehicle/my-car"],
};