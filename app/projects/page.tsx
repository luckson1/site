import Image from "next/image";
import Link from "next/link";
import React from "react";
import {AiFillGithub} from "react-icons/ai"
const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="card w-full glass ">
        <figure className="relative w-full h-[200px] md:h-[300px]">
          <Image
            src="https://res.cloudinary.com/dhciks96e/image/upload/v1678480548/dashboard_cwkx7m.png"
            fill
            alt="web-screenshot"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Ecommerce Dashboard</h2>
          <p>A responsive e-commerce and finance dashboard</p>
          <div className="card-actions justify-between">
            <Link href="https://dashboarding.netlify.app/" target="_blank">
              {" "}
              <button className="btn btn-primary">Visit Site</button>
            </Link>
            <Link href="https://github.com/luckson1/dashboard" target="_blank">
              {" "}
              <button className="btn btn-secondary gap-2 btn-outline"> <AiFillGithub className="w-6 h-6"/> Repository</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-full glass  ">
        <figure className="relative w-full h-[200px] md:h-[300px]">
          <Image
            src="https://res.cloudinary.com/dhciks96e/image/upload/v1678480552/task_whbfpx.png"
            fill
            alt="web-screenshot"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Techivity</h2>
          <p>
            Techivity is a project management software. It enables teams to
            track tasks and bugs on a visual board with drag and drop
            functionality.{" "}
          </p>
          <div className="card-actions justify-between">
            <Link href="https://techivity.netlify.app" target="_blank">
              {" "}
              <button className="btn btn-primary">Visit Site</button>
            </Link>
            <Link href="https://github.com/luckson1/Productivity" target="_blank">
              {" "}
              <button className="btn btn-secondary gap-2 btn-outline"> <AiFillGithub className="w-6 h-6"/> Repository</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-full glass  ">
        <figure className="relative w-full h-[200px] md:h-[300px]">
          <Image
            src="https://res.cloudinary.com/dhciks96e/image/upload/v1684097970/Screen_Shot_2023-05-14_at_11.58.01_PM_art6p5.png"
            fill
            alt="web-screenshot"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Jenga</h2>
          <p>
            Jenga is a search and comparison website dedicated to home furniture
            and furnishings. It provides access to over 110 furniture retailers
            and their complete product inventory in a single location, making it
            easy for consumers to find what they are looking for.
          </p>
          <div className="card-actions justify-between">
          <Link href="https://jenga.vercel.app/" target="_blank">
              {" "}
              <button className="btn btn-primary">Visit Site</button>
            </Link>
          <Link href="https://github.com/luckson1/Jenga" target="_blank">
              {" "}
              <button className="btn btn-secondary gap-2 btn-outline"> <AiFillGithub className="w-6 h-6"/> Repository</button>
            </Link>
          
          </div>
        </div>
      </div>
      <div className="card w-full glass  ">
        <figure className="relative w-full h-[200px] md:h-[300px]">
          <Image
            src="https://res.cloudinary.com/dhciks96e/image/upload/v1684099439/Screen_Shot_2023-05-15_at_12.23.40_AM_nq8zlm.png"
            fill
            alt="web-screenshot"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">PawfectAfrica</h2>
          <p>
          This app can be used by pet rescue NGOs to manage the adoption process. It features a Tinder-style dashboard with swipeable cards that make adoption easy and fun.
          </p>
          <div className="card-actions justify-between">
            <Link href={"https://www.pawfectafrica.com/"} target="_blank">
              {" "}
              <button className="btn btn-primary">Visit Site</button>
            </Link>
            <Link href="https://github.com/luckson1/pawfectafrica" target="_blank">
              {" "}
              <button className="btn btn-secondary gap-2 btn-outline"> <AiFillGithub className="w-6 h-6"/> Repository</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
