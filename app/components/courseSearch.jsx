'use client'

import React, { useState } from 'react'

const CourseSearch = ({getSearchResult})=> {
    const [query, setQuery] = useState('')
    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(query)
        const res = await fetch(`/api/courses/search?query=${query}`)
        const courses = await res.json()
        getSearchResult(courses)
    }
    return (
      <form onSubmit={handleSubmit} className='search-form'>
            <input type='text' className='search-input'
                placeholder='Search Courses...' value={query} onChange={
                    (e) => {
                        setQuery(e.target.value)
                    }
                }
            />
            <button className='search-button' type='submit'>
                Search
            </button>
      </form> 
  )
}

export default CourseSearch