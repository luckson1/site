import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">


<div className="card w-full glass shadow-accent shadow-md ">
    
  <div className="card-body">
    <h2 className="card-title"> Why You Need keys for Collections in React </h2>
    <p>By using a unique identifier like an id as the key prop, we can ensure that React can efficiently update the rendered list when the data changes. React will not have to re-render the whole list, but only re-render the part of the list that has changed. It needs a unique identifier to pinpoint the exact changes. </p>
   
    <div className="card-actions justify-end">
      <Link href={'/blog/lists-and-keys'}>
      <button className="btn btn-primary">Read More</button>
      </Link>
  
    </div>
  </div>
</div>
<div className="card w-full glass shadow-accent shadow-md ">
     
  <div className="card-body">
    <h2 className="card-title"> Memoization: Like a Fine Wine, It Should Be Enjoyed in Moderation. </h2>
    <p>Memoization can be a lifesaver for app performance, however, it might be counter-productive if misused.</p>
   
    <div className="card-actions justify-end">
      <Link href={'/blog/memoization'}>
      <button className="btn btn-primary">Read More</button>
      </Link>
  
    </div>
  </div>
</div>
    </div>
  )
}

export default page