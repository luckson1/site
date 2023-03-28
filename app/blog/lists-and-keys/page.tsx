import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-y-7 w-[90%] h-full min-h-[90vh]'>
        <h1 className='mt-12 text-3xl font-bold'>
           Why You Need keys for Collections in React 
        </h1>
<p>I bet that, at some point, when writing a react application, you might have come across the error below: </p>
<div className='relative h-96 w-full  max-w-3xl'>
<Image src={'/error.png'} fill alt='react error'/>
</div>
<p>Why must we provide react with a key?</p>
<p>Let&apos;s start with a little analogy, shall we?</p>
<p> Imagine you&apos;re a baker at a cookie bakery. Yum! </p>
<p>Your job is to serve the customers as efficiently as possible. But, there is a catch. You have to remember every customer&apos;s name and order. You also have to make sure you are not serving the wrong type of cookies to the wrong person.</p>
   <p>Now, imagine you are serving a large group of customers who are all wearing identical t-shirts and hats. Without any unique identifiers, you might end up giving the wrong type of cookies to the wrong person.</p> 
    <p>Imagine the confusion and chaos that might ensue.</p>
    <p>But, if each customer had a unique identifier like a name tag or a pager, you could quickly and efficiently serve each person without any mix-ups. The same concept applies to mapping an array in React.</p>
    <p>Consider the code below:</p>
    <div className='relative h-96 w-full  max-w-3xl'>
<Image src={'/withoutkey.png'} fill alt='react list without key'/>
</div>
<p>At first glance, this code looks fine. But it will throw an error, because the ‘li’ element lacks a key prop. </p>
<p>This might not seem like a big deal, but it can cause issues if we try to update the component&apos;s state later on. React relies on the key prop to keep track of which components have changed, and if we do not provide one, React will not know which component to update.</p>
    <p>What happens if you push an item to the list or remove something in the middle? If the key is the same as before, React assumes that the DOM element represents the same component as before. But that is no longer true.</p>
    <p>React might not display the right list after such a mutation to your array. </p>
    <p>This can also cause unnecessary re-rendering of components, which can negatively impact the performance of your app.</p>
    <p>One quick fix is to use the index of the array as the key.</p>
    <div className='relative h-96 w-full  max-w-3xl'>
<Image src={'/withindex.png'} fill alt='react list using index'/>
</div>
<p> Initially, a common solution was to use the index of each item as the key prop, but as you may know, this method can lead to performance issues. The index can change frequently, causing React to re-render more components than necessary.</p>
    
    <p>Using the index as the key prop is like trying to serve a group of people without any unique identifiers. It might work for a small group, but it quickly becomes confusing and inefficient as the group grows. On the other hand, using a unique identifier for each item in the array is like giving each customer a name tag or a pager. It makes it easy for React to efficiently update the components without causing any mix-ups.</p>
    <p>However, you can still use the index as the key prop in the following scenarios:</p>
    <ol>
      <li>1. the list is never reordered or filtered.</li>
      <li>2. the list and items are static–they are not computed and do not change;</li>
    </ol>
    <p>So what is the solution?</p>
    <p>The answer lies in using a unique identifier for each item in the array. If your data already includes a unique identifier, you can use that as the key prop. Otherwise, you can generate a unique identifier on the fly using libraries like uuid, nanoid, or react’s useId hook. Here is an example that uses uuid to generate a unique identifier for each item:</p>
    <div className='relative h-96 w-full  max-w-3xl'>
<Image src={'/solution.png'} fill alt='react list using unique key'/>
</div>
   <p>By using a unique identifier like an id as the key prop, we can ensure that React can efficiently update the rendered list when the data changes. React will not have to re-render the whole list, but only re-render the part of the list that has changed. It needs a unique identifier to pinpoint the exact changes. </p>
    <p>In conclusion, while the key prop may seem like a small detail, it is an essential part of rendering efficient and performant React components. By using a unique identifier for each item in the array, we can ensure that React can efficiently identify which component has changed and update only the necessary components, keeping our app running smoothly.
</p>
    </div>
  )
}

export default page