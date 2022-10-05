import { Fragment } from "react";
// import NavigationBar from "../Navigation/navigation-bar.js";
import $ from "jquery";

let container = [];

const ContactUs = function () {
  const Submit = function (e) {
    e.preventDefault();

    const fnameEl = $("#fname").val();
    const lnameEl = $("#lname").val();
    const emailEl = $("#email").val();
    const phoneEl = $("#phone").val();

    const data = {
      fname: fnameEl,
      lname: lnameEl,
      email: emailEl,
      phone: phoneEl,
    };

    if (!fnameEl && !lnameEl && !emailEl && !phoneEl)
      return console.log("Complete the Form");

    container.push(data);

    $("#contact-form").trigger("reset");

    return localStorage.setItem("Contacts", JSON.stringify(container));
  };

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

        <div className="grid grid-cols-2 mx-14 my-10">
          <form id="contact-form" className="bg-white p-10 text-lg">
            <h2 className="text-blue-800 font-bold text-2xl mb-10">
              Send your request
            </h2>

            <div className="grid grid-cols-2 gap-2">
              <label className="text-blue-600">First Name:</label>
              <label className="text-blue-600">Last Name:</label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Juan"
                className="border-b"
              />

              <input
                type="text"
                name="lname"
                id="lname"
                className="border-b"
                placeholder="Karlos"
              />
              <label className="text-blue-600">Email:</label>
              <label className="text-blue-600">Phone:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-b"
                placeholder="juankarlos@email.com"
              />
              <input
                type="number"
                name="phone"
                id="phone"
                className="border-b"
                placeholder="09510189773"
              />
            </div>
            <button
              onClick={Submit}
              className="mt-10 rounded-full text-lg text-white bg-blue-900 px-5"
            >
              Send
            </button>
          </form>

          <div className="bg-blue-800 p-10 text-white text-lg">
            <h2 className=" text-2xl mb-10">Reach Us</h2>
            <table className="table-fixed">
              <tbody>
                <tr>
                  <td>Email:</td>
                  <td>francodaillanleigh@gmail.com</td>
                </tr>
                <tr>
                  <td className="pt-9">Phone:</td>
                  <td className="pt-9">09510189773</td>
                </tr>
                <tr>
                  <td className="pr-16">Address:</td>
                  <td className="pt-10">
                    0079 @ D, San Vicenter St., Bilibiran, Binangonan, Rizal
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ContactUs;
