import React from "react";
import Link from "next/link";

const Quarter5 = () => {
  return (
    <div className="bg-slate-800 text-gray-50 p-10">
      <div>
        <h1 className=" text-cyan-green text-3xl font-medium">
          W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
        </h1>
        <h1 className="text-xl my-5">Course Description</h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          In this course you will learn how to develop Web 3.0 DApps, create a
          project, deploy it in production, write smart contracts, unit test
          them, and create user interfaces for them. We will also learn to
          develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in
          order to develop Web 3 applications you also need to build on top of
          Web 2.0 technologies which we have already covered in the previous
          quarters.{" "}
        </p>
      </div>
      <div className="flex ">
        <div className="text-center">
          <h1>Core Track</h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            (Common in All Specializations)
          </p>
        </div>
        <div className="text-center">
          <h1>Duration</h1>
          <p className="text-sm text-gray-400 leading-relaxed">13 weeks</p>
        </div>
      </div>
      <div>
        <h1 className="text-xl my-5">Course Outline:</h1>
        <h1 className="text-2xl  ">Blockchain and Metaverse Theory</h1>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"
          }
        >
          The Metaverse: And How It Will Revolutionize Everything by Matthew
          Ball
        </Link>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067"
          }
        >
          Mastering Blockchain - Fourth Edition by Imran Bashir
        </Link>
        <h1 className="text-2xl">Smart Contract Development in Solidity</h1>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181"
          }
        >
          Solidity Programming Essentials - Second Edition By Ritesh Modi
        </Link>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://github.com/panaverse/defi-dapps-solidity-smart-contracts"
          }
        >
          Solidity Learning Repo
        </Link>
        <h1 className="text-2xl my-5">
          Dapp Development using Ethers.js and Next.js 13
        </h1>
        <Link
          className="underline text-cyan-green text-sm"
          href={"https://github.com/panaverse/dapps-nextjs"}
        >
          Dapp Learning Repo
        </Link>
        <h1 className="text-2xl my-5">Tokennomics</h1>
        <h1 className="text-2xl my-5">
          Blockchain Project: Create a Token and Launch ICO/IEO/IDO
        </h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          As you probably know, the ICO ("Initial Coin Offering") industry has
          been booming, and it's completely reinventing the way new startups
          kickstart themselves. In fact, have a look at Wikipedia's list of
          highest{" "}
          <Link
            className="underline text-cyan-green text-sm"
            href={
              "https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"
            }
          >
            crowdfunding projects
          </Link>
          , and you'll notice that blockchain projects absolutely dominate the
          list.
        </p>
        <Link
          href={"https://phemex.com/blogs/what-is-a-dex-ido"}
          className="underline text-cyan-green text-sm"
        >
          Understand the difference between IDO vs. IEO vs. ICO{" "}
        </Link>
        <p className="text-sm text-gray-400">
          Also check these links for latest listings:
        </p>

        <Link
          className="underline text-cyan-green text-sm"
          href={"https://icodrops.com/"}
        >
          ICO list at ICO Drops
        </Link>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
          }
        >
          JavaScript Book Code
        </Link>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
          }
        >
          Getting Started Exercises with JavaScript and Node.js
        </Link>
      </div>
      <div>
        <h1 className="my-5">Fundamentals of JavaScript and Node.js Quiz</h1>
        <h1>Topics Covered in the Quiz:</h1>
        <ul className="list-decimal ">
          <li>Background of JavaScript and How to use JavaScript in Browser</li>
          <li>
            Variables, Primitive data types Analyzing and modifying data types,
            and Operators (Chapter 2 of JavaScript from Beginner to
            Professional)
          </li>
          <li>
            <Link
              className="underline text-cyan-green text-sm"
              href={
                "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzsmB6sg5oPIs/edit?usp=sharing"
              }
            >
              Intro to Node.js, .mjs files, Modules, NPM, import, export, and
              using external modules with npm.
            </Link>{" "}
            How to accept user input in your Node.js JavaScript programs, this
            will allow us to create interactive Node.js console programs using
            prompt-sync library. The last example in this presentation shows you
            how to use prompt-sync library in your Node.js programs. Note: After
            this point, we will do all our class work and exercises using
            Node.js in .mjs files. We will also be able to develop interactive
            Node.js console programs which will greatly help the students to
            learn.
          </li>
          <li>
            Using Arrays and Objects in Node.js Programs (chapter 3 of
            JavaScript from Beginner to Professional)
          </li>
          <li>
            Using if and if else statements, else if statements, Conditional
            ternary operators, and switch statements in Node.js programs
            (chapter 4 of JavaScript from Beginner to Professional)
          </li>
          <li>
            Using while loop, do while loop, for loop, for in, and for of loop
            in Node.js (chapter 5 of JavaScript from Beginner to Professional)
          </li>
          <li>
            Using Basic functions, Function arguments, Return, Variable scope in
            functions, Recursive functions, Nested functions, Anonymous
            functions, and Function callbacks in Node.js
          </li>
          <li>
            Using Concurrency, Callbacks, Promises, async / await, and Event
            loop (chapter 13 of JavaScript from Beginner to Professional)
          </li>
          <li>JavaScript promises, mastering the asynchronous</li>
        </ul>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
          }
        >
          Javascript Promises by Codingame.
        </Link>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
          }
        >
          New JavaScript Features in ECMAScript 2022 and 2021.
        </Link>
        <h1 className="my-5">Object-Oriented Programming with TypeScript </h1>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
          }
        >
          Chapters 1-11 of Learning TypeScript: Enhance Your Web Development
          Skills Using Type-Safe JavaScript
        </Link>
        <Link
          className="underline text-cyan-green text-sm"
          href={"https://github.com/panaverse/learn-typescript"}
        >
          Learning Repository
        </Link>
        <Link
          className="underline text-cyan-green text-sm"
          href={"https://www.learningtypescript.com/"}
        >
          In Class Companion projects and articles for Learning TypeScript
        </Link>
        <p className="text-sm text-gray-400 leading-relaxed">
          Home Work Project
        </p>
        <Link
          className="underline text-cyan-green"
          href={"https://github.com/panaverse/typescript-node-projects"}
        >
          typescript-node-projects.
        </Link>
      </div>
    </div>
  );
};

export default Quarter5;
