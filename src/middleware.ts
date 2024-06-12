import { NextResponse, NextRequest } from 'next/server';
export { default } from 'next-auth/middleware';
import { getToken } from 'next-auth/jwt';


export async function middleware(request: NextRequest) {
    // const token = await getToken({ req: request });
    // console.log("token",token)
    // const role = token?.role?.toString().toLowerCase();
    // console.log("role",role);
    // const url = request.nextUrl;

   
    // if (token && (url.pathname.startsWith('/login_signup') || url.pathname.startsWith('/dashboard'))) {
    //     // If user is already on their role-based dashboard, do not redirect
    //     if (url.pathname !== `/dashboard/${role}`) {
    //         return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url));
    //     }
    // }

    // if (!token && url.pathname.startsWith('/dashboard')) {
    //     return NextResponse.redirect(new URL('/login_signup', request.url));
    // }


    return NextResponse.next();
}


export const config = {
    matcher: [
        '/login_signup',
        '/dashboard/:path*',
    ],
};
