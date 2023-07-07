import courses from './data.json'
import { NextResponse } from 'next/server'
import {v4 as uuidv4} from 'uuid'
export async function GET(request) {
    return NextResponse.json(courses)
    // return new Response('Hello World')

}


export async function POST(request) {
    // return NextResponse.json(courses)
    // return new Response('Hello World')
    const { title, description, level, link } = await request.json()
    console.log(title, description, level, link)
    
    const newCourse = {
        id: uuidv4,
        title,
        description,
        level,
        link
    };
    courses.push(newCourse)
    return NextResponse.json(courses)
}

// export async function GET(request) {
//     return new Response('Hello World')
// }