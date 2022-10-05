import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import codeImg from "../public/code.png";

const HomePage = function () {
  return (
    <Fragment>
      <div className="grid grid-cols-2 gap-4 items-center py-24">
        <Image
          src={codeImg}
          className="justify-self-end"
          alt="code image"
          objectFit="contain"
        />
        <div className="justify-center leading-relaxed">
          <h1 className="font-mont text-green-600 font-bold text-8xl">
            Hello!
          </h1>
          <p className="text-4xl font-mont leading-relaxed">
            I'm <span>Daillan Leigh Franco</span>, a <br />
            future Front End Developer
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
