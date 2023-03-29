import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-y-7 w-[90%] h-full min-h-[90vh]'>
    <h1 className='mt-12 text-3xl font-bold'>Memoization: Like a Fine Wine, It Should Be Enjoyed in Moderation.</h1>
    <p>Memoization is an old technique in software engineering.</p>
    <p>It is an optimization technique used in computing to speed up the execution of a function by caching its results.</p>
    <p> When a function is memoized, the first time it is called with a particular set of input arguments, its result is computed and stored in memory. </p>
<p>For subsequent calls with the same input arguments, the function simply returns the precomputed result from the cache, rather than recomputing it. </p>
    <p>This can greatly improve the performance of functions that are called repeatedly with the same inputs, as it eliminates the need for unnecessary computations.
</p>
<p>Let see how one can implement a simple memoization. </p>

<div className='relative h-96 w-full  max-w-2xl'>
<Image src={'/memoize.png'} fill alt='memoization'/>
</div>
<p>This memoize function takes a function as an argument and returns a new function that is memoized. The memoized function keeps a cache object to store the results of previous calls. </p>
    <p>When the memoized function is called with a set of arguments, it checks if the cache already contains the result for those arguments. If so, it returns the cached result. If not, it invokes the original function with those arguments, stores the result in the cache, and returns the result.</p>
    <p>Here is an example usage of the memoize  function:</p>
    <div className='relative h-96 w-full  max-w-2xl'>
<Image src={'/add2.png'} fill alt='memoization'/>
</div>
<p>In this example, the addTwo  function is passed as an argument to the memoize function to create a new memoized function, memoizedAddTwo. </p>
    <p>The memoized function is then called with the same input multiple times, but the result is computed only once and cached for subsequent calls with the same input. This avoids redundant computations and speeds up the function&apos;s execution.</p>
    <p>By memoizing our “addTwo”  function, we saved a nanosecond.</p>
    <p>Congrats to us!!  Yaay!</p>
    <p>But the time savings  came at a cost. </p>
    <p>Memoization is more useful for expensive computations that make your computer sound like a jet engine. </p>
    <p>Keep it in your back pocket for those big, bad calculations, and you will be thanking yourself.</p>
    <p>Now that we know what memoization means, lets see how it is used in React. 

</p>
<p>React is known for highly responsive user interfaces. To achieve such responses, quick re-rendering is required. </p>
<p>So, you want to speed up component rendering in React?</p>
<p> Lucky for you, React has three core memoization tools in its arsenal, memo, useCallback and useMemo. These bad boys can help you optimize your app&apos;s performance if well used.</p>
    <p>Lets look at the first one, memo.
</p>
<p>This hook  is used to memoize a pure component in React. It has to be pure component and hence no side effects should be introduced, if memo is to work. Dont memoize a react functional component that uses Effect hooks (useEffect or useLayoutEffect). </p>
    <p> This nifty little tool works by saving the component&apos;s DOM tree to memory, based on its props. That way, if the component is called again with the same props, React can simply return the saved result instead of going through the trouble of re-rendering it from scratch.</p>
    <p>Let us say you have a pure functional component that receives a single prop name, and you want to memoize it to improve performance. Here is how you can do it using the memo function:</p>
    <div className='relative h-96 w-full  max-w-2xl'>
<Image src={'/greeting.png'} fill alt='memoization'/>
</div>
<p>In the above example, we import the memo function from React, and wrap our Greeting component with it. By doing so, we are telling React to memoize the component based on its props, and only re-render it if those props change.</p>
    <p>As you can see, we also added a console.log statement inside the component&apos;s function body. This will help us see when the component is actually re-rendered.</p>
    <p>Now, let us use our Greeting component in another component:</p>
  
    <div className='relative h-96 w-full  max-w-2xl'>
    <Image src={'/memoparent.png'} fill alt='memoization'/>
    </div>
    <p>In this example, we render our Greeting component inside the App component, passing it a prop called name. The name prop is stored in state, and can be updated via an input field.</p>
    <p>The Greeting component will only re-render if the name prop changes.
If we click on the button, the parent might re-render, but the child component(Greeting Component) will not re-render since the props (name) will not have changed. 
</p>
<p>If we did not use memo, a click on the button would also cause the Greetings component to re-render. </p>
<div className='relative h-[48rem] w-full  max-w-2xl'>
    <Image src={'/infograph.jpeg'} fill alt='memoization'/>
    </div>
<p>Source: Pavlutin, D. (2023, January 28).</p>
<p>The other important hook is useCallback. </p>
<p>When a component is rendered, any functions defined within that component are also created afresh on each render. This changes the reference to that function.  This can cause unnecessary re-renders of child components that receive  these functions as props, leading to decreased performance.
</p>
<p>Let modify the App component and its Greetings child component.</p>
<div className='relative h-96 w-full  max-w-2xl'>
    <Image src={'/greetings2.png'} fill alt='memoization'/>
    </div>
    <div className='relative h-[48rem] w-full  max-w-2xl'>
    <Image src={'/parent1.png'} fill alt='memoization'/>
    </div>
  <p>From the above code, we have added a button in the child component (Greeting) that increases the count. </p>
    <p>Since the child component is memoized, it should not re-render unless the props change. It should only re-render if we type  a new name in the input field, since that will change one of the props (name).</p>
    <p>However, if we click on the button, the Greeting component re-renders. The reason it does so is because, when the button is clicked, count changes, and the parent component re-renders. By re-rendering, the handleCountChange function is created a new. Since the reference to the handleCountChange function has changed, the Greeting component interprets that as a change of props and re-renders.</p>
    <p>To avoid such unnecessary re-renders, we can stabilize the handleCountChange function by memoizing it using useCallback. This can be achieved as follows: </p>
    <div className='relative h-[48rem] w-full  max-w-2xl'>
    <Image src={'/parent2.png'} fill alt='memoization'/>
    </div>
    <p>Now, a click on the button in the button in the paper component will not re-render the child component. </p>
    <p>The final hook is useMemo.</p>
    <p>UseMemo is used to handle expensive operations and calculations. Such calculations might slow down an application if they were to run on every re-render. </p>
    <p>Lets use an example.</p>
    <p>We will modify our App component and instead of displaying the count, we will display the factorial of the value of count. </p>
    <div className='relative h-[48rem] w-full  max-w-2xl'>
    <Image src={'/factorise.png'} fill alt='memoization'/>    </div>
    <p>Every time that a user types something on the text input, the component will re-render . On Each re-render, the value of factorisedCount is recalculated. Such an expensive calculation will slow our app down unless we use memoization.</p>
    <p>UseMemo shines in such a case.</p>
    <p>The hook takes two arguments:</p>
    <ul>
        <li> 1. The function that calculates and returns a value</li>
    <li>2. The dependency array required to calculate that value
</li>
    </ul>
   <p> Lets see how useMemo comes to the rescue of our app. </p>
 
    <div className='relative h-[48rem] w-full  max-w-2xl'>
    <Image src={'/usememo.png'} fill alt='memoization'/>    </div>
    <p>From the above code,  factorisedCount is now memoized. It will only be recalculated with the value in the dependency array (count) change.
</p>
<p>If a user types a new name, making the whole component to re-render, the value will not be recalculated. </p>
<p>But before you go wild with memoization, let me warn you:  at times, it might be counter-productive. Do not go memoizing every function call or inexpensive calculation.</p>
<p>Memoization can be a lifesaver for app performance, but don&apos;t forget that it&apos;s not all sunshine and rainbows. There are three major costs that come with memoization:</p>
<p>First, your app&apos;s memory usage goes up as React stores all the memoized components and values to memory. If you overdo it with memoization, your app could end up struggling to manage its memory usage.</p>
<p>Second, memoization adds computation overhead as React compares previous values to current ones. This overhead is usually worth it, but keep in mind that many comparisons for a small component could end up costing more than it saves.</p>
<p>Third, adding memoization to your app also means adding some extra boilerplate, which could make your code harder to read and understand</p>
<p>However, the memory overhead of “memo” hook is usually minimal. This is because it does a shallow comparison of the props. </p>
<p>Just remember that memoization is not a silver bullet, and you should only add these hooks during the optimization phase of your app development. With a solid understanding of memoization and React hooks, you will be well on your way to achieving top-notch performance for your next web app.</p>
<p>Memoization is like a fine wine - it&apos;s best enjoyed in moderation.</p>
<br />
<br />
<br />
<br />
<br />
<h2>References:</h2>
<p>Pavlutin, D. (2023, January 28). Use react.memo() wisely. Dmitri Pavlutin Blog. Retrieved March 29, 2023, from https://dmitripavlutin.com/use-react-memo-wisely/ </p>
<p>Karki, P. (2022, November 14). Heavy computation made lighter: REACT MEMOIZATION: Toptal®. Toptal Engineering Blog. Retrieved March 29, 2023, from https://www.toptal.com/react/react-memoization </p>
<p>Dodds, K. C. (2020, October 29). Memoization and react. Epic React by Kent C. Dodds. Retrieved March 29, 2023, from https://epicreact.dev/memoization-and-react </p>
<p>React Team. (n.d.). USEMEMO. React. Retrieved March 29, 2023, from https://react.dev/reference/react/useMemo </p>


    </div>
  )
}

export default page