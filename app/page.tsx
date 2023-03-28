export default function Home() {
  return (
    <main className="bg-base-100 p-6 flex flex-col gap-16">
      <p className=" text-[20px]  font-bold  text-base-content md:text-[28px] lg:text-[63px]">
        Hi 👋,{" "}
      </p>

      <div className="wrapper   flex h-fit min-h-[48px]  w-fit items-center bg-base-100">
        <div className=" inline text-[20px]  font-bold  text-base-content md:text-[28px] lg:text-[63px] ">
          I am
        </div>
        <ul className=" dynamic  mt-1 ml-5 text-base-content lg:mt-4 lg:ml-10 ">
          <li>
            <span>Jack Gathondu </span>
          </li>
          <li>
            <span> a product developer </span>
          </li>
          <li>
            <span> an autodidact</span>
          </li>
          <li>
            <span>an AI enthusiast </span>
          </li>
        </ul>
      </div>
      <div className="leading-loose flex flex-col gap-3">
        <p>
          I am <strong>Jack Gathondu</strong>, I made this site for{" "}
          <strong>you </strong>😊!
        </p>
        <p>I am a product developer and a web performance enthusiast.</p>
        <p>
          Check my projects and experiments on{" "}
          <a
            href="https://github.com/luckson1"
            target="_blank"
            rel="noreferrer nofollow"
            className="text-primary underline"
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
            className="text-primary underline"
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
            className="text-primary underline"
          >
            <strong>jackgathondu@gmail.com</strong>
          </a>
        </p>
      </div>
    </main>
  );
}
