import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>
        Welecme To My Next App
      </h1>
      <ul>
        <li>
          <Link href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about'>
            about
          </Link>
        </li>
        <li>
          <Link href='about/team'>
            Team
          </Link>
        </li>
        {/* <li>
          <Link href='/about'>
            about
          </Link>
        </li> */}
      </ul>
    </div>
  )
}

export default HomePage