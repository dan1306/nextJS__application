'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Courses from './components/courses'
import Loader from './loading'
import CourseSearch from './components/courseSearch'

const HomePage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses()
  }, [])

  if (loading) {
    return  <Loader />
  }
  
  return (
    <div>
      <h1>
        Welecme To My Next App
      </h1>
      <CourseSearch getSearchResult={(result) => {
        setCourses(result)
      }} />
     <Courses courses={courses}/>
    </div>
  )
}

export default HomePage