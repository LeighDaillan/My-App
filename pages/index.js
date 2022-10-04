import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Fragment } from "react";
import NavigationBar from "./Navigation/navigation-bar.js";

const HomePage = function () {
  return (
    <Fragment>
      <NavigationBar page="Home"></NavigationBar>
    </Fragment>
  );
};

export default HomePage;
