import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-16 print:gap-6 lg:gap-6">
        <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
          <div className="print:col-start-2 lg:col-span-3 lg:col-start-2">
            <h2 className="text-2xl font-bold text-blue-600">Experience</h2>
          </div>
        </div>
        <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
          <div className="print:text-right lg:text-right">
            <span className="text-white">Dec 2020 – Present</span>
          </div>
          <div className="print:col-span-3 lg:col-span-3">
            <h2 className="inline font-bold">Full-stack Developer</h2>
            <span className="[&_a]:underline"></span>
          </div>
          <div className="print:text-right lg:text-right">
            <span className="text-sm text-white">Full Time</span>
          </div>
          <div className="print:col-span-3 lg:col-span-3">
            <ul className="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
              <li>
                Developed custom web applications and websites using NextJS,
                ReactJS, PostgreSQL, and ExpressJS for various clients in
                diverse industries.
              </li>
              <li>
                Designed and implemented scalable and performant front-end and
                back-end architectures using NextJS, ensuring optimal user
                experience and maximum data integrity.
              </li>
              <li>
                Worked closely with clients to identify project requirements and
                specifications, ensuring timely and efficient delivery of
                quality solutions.
              </li>
              <li>
                Collaborated with cross-functional teams, including designers
                and project managers, to ensure seamless project execution and
                successful outcomes.
              </li>
              <li>
                Implemented and maintained secure coding practices, including
                encryption, authentication, and authorization, to protect
                sensitive data and ensure compliance with industry standards.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
          <div className="print:text-right lg:text-right">
            <span className="text-white">Feb 2017 – Dec 2021</span>
          </div>
          <div className="print:col-span-3 lg:col-span-3">
            <h2 className="inline font-bold">
              Technical SEO consultant, web developer
            </h2>
          </div>
          <div className="print:text-right lg:text-right">
            <span className="text-sm text-white">Full-time</span>
          </div>
          <div className="print:col-span-3 lg:col-span-3">
            <ul className="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
              <li>
                In collaboration with front-end developers, I Created and
                optimized landing pages using CSS and HTML to get more search
                engine traffic
              </li>
              <li>Created WordPress sites that were SEO optimized.</li>
              <li>
                Maintained my clients&apos; WordPress content management systems
                by regularly updating plugins.
              </li>
              <li>
                Minified websites&apos; code to improve performance, and also
                made them mobile-friendly, reducing bounce rate by an average of
                55%
              </li>
              <li>
                Conducted guest blogging for my clients, which lead to the
                growth of their sites to double digits in domain authority.
              </li>
              <li>
                Conducted keyword research and supported analytics research for
                the content
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-16 print:gap-6 lg:gap-6">
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:col-start-2 lg:col-span-3 lg:col-start-2">
              <h2 className="text-2xl font-bold text-blue-600">Education</h2>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-white">Jan 2016 – June 2019</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">
                Certified Financial Analyst Level 3
              </h2>{" "}
              <span>by CFA Institute</span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-white" />
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <p>Nairobi Kenya</p>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:text-right lg:text-right">
              <span className="text-white">Jan 2009 – Jan 2012</span>
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <h2 className="inline font-bold">
                Bachelor of Commerce (B.Com.), Accounting and Finance
              </h2>{" "}
              <span>at The University of Nairobi</span>
            </div>
            <div className="print:text-right lg:text-right">
              <span className="text-sm text-white" />
            </div>
            <div className="print:col-span-3 lg:col-span-3">
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 print:gap-6 lg:gap-6">
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
              <h2 className="text-2xl font-bold text-blue-600">
                Skills and Tech Stack
              </h2>
            </div>
          </div>
          <div className="grid items-baseline gap-x-10 print:grid-cols-4 lg:grid-cols-4">
            <div className="print:col-span-3 print:col-start-2 lg:col-span-3 lg:col-start-2">
              <ul className="mx-5 my-2 flex list-disc flex-col gap-1 text-sm">
                <li>Databases: MYSQL, PostgreSQL, Redis</li>
                <li>
                  Backend: Express, Node.js, Javascript ES6, Python, Typescript
                </li>
                <li>APIs: REST, tRPC</li>
                <li>
                  Frontend: React, HTML5, Javascript ES6, tailwindCss,
                  bootstrap, Redux, SEO, TypeScript, NextJs
                </li>
                <li>
                  Cloud: Docker, Google Cloud Platform, Heroku, Netlify, Vercel
                </li>
                <li>Git: Git, Github</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
