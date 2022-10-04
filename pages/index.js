import React from "react";
import { Fragment } from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import NavigationBar from "./Navigation/navigation-bar.js";

const HomePage = function () {
  return (
    <Fragment>
      <NavigationBar page="Home"></NavigationBar>

      <div className="grid grid-cols-2 gap-4 items-center py-24">
        <img src="./code.png" className="h-96 justify-self-end" />
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
