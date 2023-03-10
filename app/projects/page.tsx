import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="card w-full glass shadow-accent shadow-lg ">
        <figure className="relative w-full h-[300px]">
          <Image src="/dashboard.png " fill alt="web-screenshot" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Ecommerce Dashboard</h2>
          <p>A responsive e-commerce and finance dashboard</p>
          <div className="card-actions justify-end">
            <Link href="https://res.cloudinary.com/dhciks96e/image/upload/v1678480548/dashboard_cwkx7m.png">
              {" "}
              <button className="btn btn-primary">Visit Site</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-full glass shadow-accent shadow-lg ">
        <figure className="relative w-full h-[300px]">
          <Image src="/task.png " fill alt="web-screenshot" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Techivity</h2>
          <p>Techivity is a project management software. It enables teams to track tasks and bugs on a visual board with drag and drop functionality. </p>
          <div className="card-actions justify-end">
          <Link href="https://res.cloudinary.com/dhciks96e/image/upload/v1678480552/task_whbfpx.png">
              {" "}
              <button className="btn btn-primary">Visit Site</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-full glass shadow-accent shadow-lg ">
        <figure className="relative w-full h-[300px]">
          <Image src="/marketplace.png " fill alt="web-screenshot" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Jenga</h2>
          <p>Jenga is a search and comparison website dedicated to home furniture and furnishings. It provides access to over 110 furniture retailers and their complete product inventory in a single location, making it easy for consumers to find what they are looking for.</p>
          <div className="card-actions justify-end">
          <Link href="https://res.cloudinary.com/dhciks96e/image/upload/v1678480549/AI_ddqszo.png">
              {" "}
              <button className="btn btn-primary">Visit Site</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-full glass shadow-accent shadow-lg ">
        <figure className="relative w-full h-[300px]">
          <Image src="https://res.cloudinary.com/dhciks96e/image/upload/v1678480549/AI_ddqszo.png " fill alt="web-screenshot" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sasha</h2>
          <p>Sasha is student writing assistant. It uses AI to help in idea generation as well as speed the research process, saving students time taken to complete their assignments</p>
          <div className="card-actions justify-end">
          <Link href={"https://www.smartsasha.com/"}>
              {" "}
              <button className="btn btn-primary">Visit Site</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
