import { Fragment } from "react";
import Contact from "../../components/contact-us";

let container = [];

const ContactUs = function () {
  return (
    <Fragment>
      {/* <NavigationBar page="Contact Us"></NavigationBar> */}

      <div className="bg-slate-300 h-auto w-auto p-10 font-pop">
        <div className="ml-10 mt-5">
          <h1 className="text-3xl font-bold mb-2 ">Connect With Us</h1>
          <p className="text-xl">
            We would love you respond to your queries and help you succeed.{" "}
            <br />
            Feel free to get in touch with us.
          </p>
        </div>
        <Contact></Contact>
      </div>
    </Fragment>
  );
};
export default ContactUs;
