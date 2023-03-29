import Link from "next/link";
import React from "react";



export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-full -mt-20 h-fit overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black rounded-2xl">
			<div className="my-16 animate-fade-in">
			<p> I made this site for{" "}
          <strong className="text-lg">you </strong>, my visitor😊!</p>
			</div>
			<div className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<h1 className="z-10 text-4xl  text-transparent duration-1000 cursor-default text-edge-outline animate-title  font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white ">
				Jack
			</h1>

			<div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-start animate-fade-in leading-loose flex flex-col gap-3">
            <p>
          I am <strong>Jack Gathondu</strong>, 
        </p>
        <p>I am a product developer and a web performance enthusiast.</p>
        <p>
          Check my projects and experiments on{" "}
          <a
            href="https://github.com/luckson1"
            target="_blank"
            rel="noreferrer nofollow"
            className=" underline"
          >
            <strong>GitHub</strong>
          </a>
          .
        </p>
        <p>
          Follow me on{" "}
          <a
            href="https://twitter.com/JackBatian"
            target="_blank"
            rel="noreferrer nofollow"
            className=" underline"
          >
            <strong>Twitter</strong>
          </a>{" "}
          where I share on React, customer development and sometimes, funny memes 🙈.
        </p>
        <p>
          Email me via{" "}
          <a
            href="mailto:jackgathondu@gmail.com"
            target="_blank"
            rel="noreferrer nofollow"
            className=" underline"
          >
            <strong>jackgathondu@gmail.com</strong>
          </a>
        </p>
			</div>
		</div>
	);
}