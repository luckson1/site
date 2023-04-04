import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-y-7 w-[90%] h-full min-h-[90vh]'>

<h1 className='mt-12 text-3xl font-bold'>React Server Components: Improving Performance & Simplifying Isomorphic App Development</h1>
    
  <p>Recently, the React team at Meta has been championing a new direction for the front-end library. 
</p>  
<p>They introduced React Server Components (RSC).</p>
<p>React Server Components (RSCs) are a new type of reusable react components that can be rendered on the server, designed to simplify the creation of isomorphic (universal) applications. These components can be rendered on both the server and the client. They make it easier to build high-performance, user-friendly web applications.</p>
<p>How about Ruby on Rails or PHP  but with the power and flexibility of React for templating UI? </p>
<p>That is a significant change from the current React mental model, right?  </p>
<h2 className='mt-4 text-xl font-bold'>So, what problems is RSC solving? </h2>
    <p>When building applications with React, two common problems arise excessive network requests and large bundle sizes. These issues can lead to slow load times, especially for users on slow devices or internet connections.</p>
    <p>To combat excessive network requests, developers can use techniques like data caching or server-side rendering. Additionally, methods like code splitting and dead code elimination can help reduce bundle sizes, making it faster for users to download and use the application. These optimizations can greatly improve the user experience, as Sebastian from React Team opines:</p>
    <div className='relative h-60 rounded-lg w-full  max-w-3xl'>
<Image src={'/sebastian.png'} fill alt='react list without key' className='rounded-lg'/>
</div>
<p>They make React applications more accessible to users with slower devices and internet connections.</p>
    <p>Server Components introduce automatic code-splitting. React treats all normal imports in Client components as possible code-split points. This would improve the performance of an application. </p>
    <h2 className='mt-4 text-xl font-bold'>How do I get started with React Server Components?</h2>
    <p>At the moment, The react team recommends Nextjs.</p>
    <p>The meta-framework has built a bundler and a router that works with RCs out of the box.
</p>
<p>However, if you are a webpack config wizard, you can create your bundler and work with RSC. </p>
<h2 className='mt-4 text-xl font-bold'>How are React Server Components different from implementing Server Side Rendering (SSR)?</h2>
<p>Server-side rendering (SSR) in React involves rendering the initial HTML on the server and then sending it to the client. This helps to improve the perceived performance of the application by allowing the user to see content sooner while the JavaScript loads. However, the user can do nothing with your app until the JavaScript is downloaded, as Lauren from React Core team asserts:
</p>

<div className='relative h-60 w-full  max-w-3xl'>
<Image src={'/lauren.png'} fill alt='react list without key' className='rounded-lg'/>
</div>
<p>Server-side rendering has some limitations that should be considered. First,  HTML is rendered on the server and sent to the client. This might result in fast First Contentful Paint or Largest Contentful Pain.</p>
<p>However, JavaScript still needs to be fetched for interactivity, which typically requires a hydration step. 
</p>

<p>React Server Components (RSCs) take this concept a step further by allowing components to be streamed from the server in a special format that is optimized for streaming.</p>
    
    <p>Unlike SSR, Javascript is executed on the server, and hence a reduced javascript bundle is sent to the client.  Server Components are not rendered as HTML, but as a special format, that resembles JSON, which is then streamed into the client. 
</p>
<p>React Server components have some distinct characteristics:</p>
    <ul>
        <li>
            1. They do not include interactivity features, such as onClick handlers.
        </li>
        <li>
            2. It is not possible to pass down fallbacks or functions as props. Functions can not be serialized. 
        </li>
        <li>
        3. They are non-interactive and do not require access to React state.


        </li>
        <li>
        4. React lifecycle hooks cannot be used. The useEffect and useLayoutEffect hooks can not be used to introduce effects to a server component. 
        </li>

    </ul>
    <h2 className='mt-4 text-xl font-bold'>Client Components</h2>
    <p>A component becomes a Client Component when using the &quot;use client&quot; directive at the top of the file (before any imports).</p>
    <p>The &quot;use client&quot; directive is a new React feature that was introduced as part of Server Components.</p>
    <div className='relative h-[40rem] w-full  max-w-3xl'>
<Image src={'/use-client.png'} fill alt='react list without key'/>
</div>
<p>Characteristics of React Client components:</p>
<ul>
    <li>
    1. They include interactivity such as onClick handlers etc.
    </li>
    <li>
    2. They are rendered on the browser, which is the client. 
    </li>
    <li>
    3. They use ‘use client’ directive to denote they are client-side 
    </li>
    <li>4. If you plan to use React lifecycle hooks such as useState, useEffect, then you need to use client-side components
</li>
</ul>
<div className='relative h-[48rem] w-full  max-w-3xl'>
<Image src={'/next.png'} fill alt='react list without key'/>
</div>
<h2 className='mt-4 text-xl font-bold'>Importing Server Components into Client Components</h2>
<p>React allows for the interleaving of Server and Client Components within the same component tree. It will merge the work of both environments behind the scenes.</p>
<p>However, the only safe way to use server components within client components is by passing them as props. </p>
<p>One should never import server components directly into client components. </p>
<div className='relative  h-[40rem] w-full  max-w-3xl'>
<Image src={'/client-import.png'} fill alt='react list without key'/>
</div>
<div className='relative h-96 w-full  max-w-3xl'>
<Image src={'/right-app.png'} fill alt='react list without key'/>
</div>
<p>If a server component is directly imported into a client one, it silently degenerates into a client component.</p>
<p>In the example below, the environment variable accessed by the server component will leak to the browser, since the server component will degenerate into a client component. 
</p>
<div className='relative h-96 w-full  max-w-3xl'>
<Image src={'/server.png'} fill alt='react list without key'/>
</div>
<div className='relative h- h-[40rem] w-full  max-w-3xl'>
<Image src={'/wrong-client.png'} fill alt='react list without key'/>
</div>
<div className='relative  h-96 w-full  max-w-3xl'>
<Image src={'/wrong-app.png'} fill alt='react list without key'/>
</div>
<h2 className='mt-4 text-xl font-bold'>Passing Props from client to server components</h2>
<p>When passing props from Server Components to Client Components in React, it is important to ensure that the props are serializable.</p>
<p>This means that any non-serializable values, such as functions or Dates, cannot be directly passed to the client components.</p>

<h2 className='mt-4 text-xl font-bold'>Third-party packages and providers</h2>


<p>Many third-party npm packages include Providers that must be rendered near the root of a React application. If these Providers include the &quot;use client&quot; directive, they can be directly rendered within Server Components. However, since Server Components are still a relatively new feature, not all third-party providers have yet been updated to support them. </p>    
    
    <p>One alternative to dealing with such packages is to wrap third-party providers in your Client Component. </p>
    
    
    <div className='relative  h-[40rem] w-full  max-w-3xl'>
<Image src={'/providers.png'} fill alt='react list without key'/>
</div>
    <p>The new client component Providers can then be used at the root level of your application. </p>

    <h2 className='mt-4 text-xl font-bold'>Conclusion</h2>
    <p>While it is true that React is exploring server-side rendering as a way to improve performance and user experience, it is not accurate to say that it is trying to replicate the way web development was done two decades ago.</p>
    <p>In the end, the winner is the end-user. RSC will provide seamless and performant experience for users.</p>
    <p>There may be some challenges and learning curves associated with this paradigm shift.  However, it is also an exciting opportunity for developers to explore new approaches and techniques that can ultimately lead to even better user experiences.</p>
    <h2 className='mt-4 text-xl font-bold'>Sources</h2>
    <p> Dan Abramov, Dan, et al. “Introducing Zero-Bundle-Size React Server Components.” React, https://react.dev/blog/2020/12/21/data-fetching-with-react-server-components. </p>
    <p>Gunawardhana, Piumi Liyana. “Zero-Bundle-Size React Server Components-an Overview.” Syncfusion, 20 Mar. 2023, https://www.syncfusion.com/blogs/post/zero-bundle-size-react-server-components.aspx. </p>
    <p>“Next.js.” Rendering: Server and Client Components, https://beta.nextjs.org/docs/rendering/server-and-client-components. </p>
    <p>“React Server vs Client Components in Next.js 13.” Ankita Kulkarni&apos;s Website, https://kulkarniankita.com/react/react-server-client-components. </p>
    <p>Sebhastian, Nathan. “React Server Components.” Medium, Bits and Pieces, 29 Aug. 2021, https://blog.bitsrc.io/react-server-components-1ca621ac2519. </p>
    <p>Tyson, Matthew. “Hands-on with React Server Components.” InfoWorld, InfoWorld, 27 Jan. 2022, https://www.infoworld.com/article/3648191/hands-on-with-react-server-components.html. </p>
    <p>“What You Need to Know about React Server Component.” Tutorials Point, https://www.tutorialspoint.com/what-you-need-to-know-about-react-server-component. </p>
    <p>ymc9. “Fun with Next.js 13 Server Components.” DEV Community, DEV Community, 29 Dec. 2022, https://dev.to/zenstack/fun-with-nextjs-13-server-components-o37. </p>
    </div>
  )
}

export default page