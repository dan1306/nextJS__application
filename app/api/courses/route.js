import courses from './data.json'
import { NextResponse } from 'next/server'

export async function GET(request) {
    return NextResponse.json(courses)
    // return new Response('Hello World')

}

// export async function GET(request) {
//     return new Response('Hello World')
// }