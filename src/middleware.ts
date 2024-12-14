import { clerkMiddleware } from '@clerk/nextjs/server'
// import { NextResponse } from 'next/server'

export default clerkMiddleware();



// export default clerkMiddleware((req) => {
//   const url = req.nextUrl;
//   const searchParams = url.searchParams.toString()
//   const hostname = req.headers.get('host')
//   const pathWithSearchParams = `${url.pathname}${
//     searchParams.length > 0 ? `?${searchParams}` : ''
//   }`

//   // Handle subdomains
//   const customSubDomain = hostname
//     ?.split(process.env.NEXT_PUBLIC_DOMAIN || '')
//     .filter(Boolean)[0]

//   if (customSubDomain) {
//     return NextResponse.rewrite(
//       new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url)
//     )
//   }

//   // Redirect /sign-in and /sign-up to /agency/sign-in
//   if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
//     return NextResponse.redirect(new URL(`/agency/sign-in`, req.url))
//   }

//   // Rewrite root (/) and /site to /site
//   if (
//     url.pathname === '/' ||
//     (url.pathname === '/site' && url.host === process.env.NEXT_PUBLIC_DOMAIN)
//   ) {
//     return NextResponse.rewrite(new URL('/site', req.url))
//   }

//   // Rewrite specific paths
//   if (
//     url.pathname.startsWith('/agency') ||
//     url.pathname.startsWith('/subaccount')
//   ) {
//     return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url))
//   }

//   // Allow the request to proceed for other routes
//   return NextResponse.next()
// })

