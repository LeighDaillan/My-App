import { Fragment } from "react";

const AboutUs = function () {
  return (
    <Fragment className="font-pop">
      <div className="grid md:grid-cols-2 mx-20 lg:ml-40 mt-10 lg:mt-20 gap-5 justify-content-center">
        <div className="">
          <p className="text-2xl lg:text-4xl font-bold ">
            <span className="h-3 w-3 bg-gray-500 rounded-full inline-block mb-1 mr-3 lg:mb-2"></span>
            I'm Daillan Leigh Franco, a <br />
            future Front End Developer
          </p>

          <p className="mt-5 text-xl lg:text-2xl indent-8">
            Hi there! I was born and raised in the Philippines (and i know how
            to speak kapampangan dialect) and am currently a college student. My
            dream job is to be a Front End Developer, but being a Full Stack
            Developer also sounds appealing. Please contact me if you like my
            sample blog.
          </p>
        </div>

        <div>
          <h2 className="underline text-2xl lg:text-3xl font-bold mb-2">
            What I like?
          </h2>
          <ul className="leading-8 text-xl lg:text-2xl">
            <li>Watching Movies</li>
            <li>Playing Video Games</li>
            <li>And Eating</li>
          </ul>
          <br />
          <h2 className="underline text-2xl lg:text-3xl font-bold mb-2">
            Where did I learn to program?
          </h2>
          <ul className="leading-8 text-xl lg:text-2xl">
            <li>Udemy</li>
            <li>YouTube</li>
            <li>Reading Documentation</li>
            <li>College Program</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
