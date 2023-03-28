
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'



const NavBar = () => {
  const route=usePathname()
  return (

<nav className=" navbar bg-base-100 mb-32">
<Link href={"/"} className={`btn btn-sm  w-16 md:w-28 normal-case text-xs md:text-base mr-2 md:mr-4 ${route==="/"? "": "btn-ghost"}`}>
About
</Link>
<Link href={"/resume"} className={`btn  btn-sm  w-16 md:w-28 normal-case text-xs md:text-base mr-2 md:mr-4 ${route==="/resume"? "": "btn-ghost"}`}>
Resume
</Link>
<Link href={"/projects"} className={`btn  btn-sm  w-16 md:w-28 normal-case text-xs md:text-base mr-2 md:mr-4 ${route==="/projects"? "": "btn-ghost"}`}>
Projects
</Link>
<Link href={"/blog"} className={`btn  btn-sm  w-16 md:w-28 normal-case text-xs md:text-base mr-2 md:mr-4 ${route==="/blog"? "": "btn-ghost"}`}>
Blog
</Link>

</nav>

  )
}

export default NavBar