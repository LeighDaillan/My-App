import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = function () {
  const router = useRouter();
  const activeDesign = "text-blue-700 font-bold";

  return (
    <nav className="w-full inline-block p-3">
      <div className="grid grid-cols-2 my-4 mx-8">
        <div>
          <span className="h-3 w-3 bg-yellow-500 rounded-full inline-block mb-1"></span>
          <h1 className="font-mont font-bold text-2xl inline-block mx-2">
            Daillan Leigh
          </h1>
        </div>

        <ul className="flex justify-between font-mont text-xl">
          <li className={router.route === "/" ? activeDesign : ""}>
            <Link href="./">Home</Link>
          </li>
          <li className={router.route === "/contact-us" ? activeDesign : ""}>
            <Link href="./contact-us">Contact Us</Link>
          </li>
          <li className={router.route === "/about-us" ? activeDesign : ""}>
            <Link href="./about-us"> About Us</Link>
          </li>
          <li className={router.route === "/FAQ" ? activeDesign : ""}>
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

export default Navbar;
