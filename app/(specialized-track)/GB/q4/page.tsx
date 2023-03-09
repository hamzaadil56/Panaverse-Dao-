import React from "react";
import Link from "next/link";

const Quarter1 = () => {
  return (
    <div className="bg-slate-800 text-gray-50 p-10">
      <div>
        <h1 className=" text-cyan-green text-3xl font-medium">
          CS-101: Object-Oriented Programming using TypeScript
        </h1>
        <h1 className="text-xl my-5">Course Description</h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          We will start the program by learning the fundamentals of
          Object-Oriented programming using JavaScript and TypeScript. We will
          also understand the latest Web trends i.e. Web 3.0 and Metaverse
          concepts and try to understand their working from the perspective of
          the users.{" "}
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
        <h1>HTML and CSS (Homework)</h1>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
          }
        >
          Learn HTML by Hira Khan (Watch Recorded Videos)
        </Link>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
          }
        >
          Learn CSS Intro by Hira Khan (Watch Recorded Videos)
        </Link>
        <h1 className="text-base">Web 3.0 and Metaverse Theory</h1>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
          }
        >
          Introduction to Panaverse DAO
        </Link>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
          }
        >
          Web 3.0 User Guide
        </Link>
        <h1 className="text-base">
          Fundamentals of JavaScript (ECMAScript 2022 Language Specification)
        </h1>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
          }
        >
          Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
        </Link>
        <Link
          className="underline text-cyan-green text-sm"
          href={
            "https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
          }
        >
          Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn
          JavaScript quickly by building fun, interactive, and dynamic web apps,
          games, and pages
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

export default Quarter1;
