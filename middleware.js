import {NextResponse} from "next/server";

export default async function middleware(req) {
    const profileResponse = NextResponse.redirect(new URL("/panel", req.url))
    const loginResponse = NextResponse.redirect(new URL("/login", req.url))
    const nextResponse = NextResponse.next()
    nextResponse.cookies.delete("panel")

    if (req.cookies.has("Authorization")) {
        let state = false
        await fetch(`${process.env.BASE_API}/check-authorization`, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + (req.cookies.get("Authorization") === undefined ? "" : req.cookies.get("Authorization").value),
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(res => {
            return res.json()
        }).then(resp => {
            if (resp.status !== "success") {
                nextResponse.cookies.delete("Authorization")
                state = true
            }
        })
        if (state) {
            return nextResponse
        }
    }

    if (
        req.nextUrl.pathname.startsWith("/login")
    ) {
        let state = false
        await fetch(`${process.env.BASE_API}/check-authorization`, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + (req.cookies.get("Authorization") === undefined ? "" : req.cookies.get("Authorization").value),
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(res => {
            return res.json()
        }).then(resp => {
            if (resp.status === "success") {
                state = true
            }
        })
        if (state) {
            return profileResponse
        }
    } else if (
        req.nextUrl.pathname.startsWith("/panel")
    ) {
        if (!req.cookies.has("Authorization")) {
            return loginResponse
        }
        let state = false
        await fetch(`${process.env.BASE_API}/check-authorization`, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + (req.cookies.get("Authorization") === undefined ? "" : req.cookies.get("Authorization").value),
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(res => {
            return res.json()
        }).then(resp => {
            if (resp.status === "success") {
                nextResponse.cookies.set({
                    name: "panel",
                    value: "true"
                })
                state = true
            }
        })
        if (state) {
            return nextResponse
        } else {
            return loginResponse

        }
    }
    return nextResponse
}

export const config = {
    matcher: ["/((?!assets/images|assets/icons|_next/static|_next/image|favicon.ico).*)"],
};



