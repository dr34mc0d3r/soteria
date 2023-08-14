import { NextRequest, NextResponse } from "next/server";

export function middleware(req, res) {

    
    return NextResponse.next();

    // const response = NextResponse.next();


    // if(localStorage.getItem('token')) {
    //     response.cookies.set('token');
    // }
    // console.log('request', req.nextUrl.pathname);

    // // const cookie = req.cookies.get('token');
    // console.log('req', req);

    // return response;
}