import Link from "next/link";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const NavigationBar = function (props) {
  const activePage = props.page;
  console.log(activePage);

  const activeDesign = "text-blue-700 font-bold";

  return (
    <nav className="w-full inline-block p-3">
      <div className="grid grid-cols-2 my-4 mx-8">
        <div>
          <span className="h-3 w-3 bg-blue-500 rounded-full inline-block mb-1"></span>
          <h1 className="font-mont font-bold text-2xl inline-block mx-2">
            Daillan Leigh
          </h1>
        </div>

        <ul className="flex justify-between font-mont text-xl">
          <li className={activePage === "Home" ? activeDesign : ""}>
            <Link href="./">Home</Link>
          </li>
          <li className={activePage === "Contact Us" ? activeDesign : ""}>
            <Link href="./ContactUs">Contact Us</Link>
          </li>
          <li className={activePage === "About Us" ? activeDesign : ""}>
            <Link href="./AboutUs"> About Us</Link>
          </li>
          <li className={activePage === "FAQ" ? activeDesign : ""}>
            <Link href="./FAQ">FAQ</Link>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
