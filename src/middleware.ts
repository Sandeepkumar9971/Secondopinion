import { NextResponse, NextRequest } from 'next/server';
export { default } from 'next-auth/middleware';
import { getToken } from 'next-auth/jwt';
import crypto from 'crypto';

function verifyCSRFToken(csrfToken, secret) {
    const [token, hash] = csrfToken.split('|');
    const expectedHash = crypto.createHash('sha256').update(`${token}${secret}`).digest('hex');
    return expectedHash === hash;
}
export async function middleware(request: NextRequest) {

    const token = await getToken({req:request,secret:"%^%^&&*&(%^%%^^&**())"});

    const role = token?.role?.toString().toLowerCase();

    const url = request.nextUrl;
 
    let remainingPath = url.pathname.split("/")[3] || "";




  
  if (
    token &&
    (url.pathname.startsWith("/login_signup") ||
      url.pathname.startsWith("/dashboard"))
  ) {
   
    if (!url.pathname.startsWith(`/dashboard/${role}`)) {
      return NextResponse.redirect(
        new URL(`/dashboard/${role}/${remainingPath}`, request.url)
      );
    }
  }


  if (!token && url.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login_signup", request.url));
  }

    

    // Continue with the request if no redirection is needed
    return NextResponse.next();
}

// Specify the paths where the middleware should be applied
export const config = {
    matcher: [
        '/login_signup',
        '/dashboard/:path*',
    ],
};
