import {NextResponse} from "next/server";

export default function middleware(req) {
    console.log("Middleware File", req);
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
// import {NextResponse} from "next/server";

// export default function middleware(req, event) {
//   console.log(req.nextUrl.pathname);
//   event.waitUntil(
//     fetch("http://localhost:3000/api/hello", {
//       method: "GET",
//     }).then(async (res) => {
//       res = await res.json();
//       console.log(res);
//     }),
//   );
//   return NextResponse.next();
// }
// export const config = {
//   matcher: "/api/:path*",
// };
