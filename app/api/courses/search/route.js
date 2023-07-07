import { NextResponse } from "next/server";
import courses from '../data.json'

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    // const { name, query} = searchParams.get
    const  query = searchParams.get('query')
    // console.log(request.url, searchParams)
    // console.log( query)
    const filteredCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes(query.toLowerCase())
    })
    return NextResponse.json(filteredCourses)
}