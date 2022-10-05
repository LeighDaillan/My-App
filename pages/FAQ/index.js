import { Fragment } from "react";

const Faq = function () {
  return (
    <Fragment className="font-pop">
      <h1 className="text-center mt-16 text-gray-800 text-4xl font-bold">
        Frequently Asked Questions (FAQ)
      </h1>

      <div className="mt-16">
        <table className="table-fixed mx-auto">
          <tbody>
            <tr>
              <td className="text-5xl text-red-600 border-l-2 border-red-600 pl-3 inline-block ">
                Q.
              </td>
              <td className=" text-xl ml-4 inline-block">
                What is your favourite Programming Language?
              </td>
            </tr>
            <tr>
              <td className="text-5xl text-gray-500 border-l-2 border-gray-500 inline-block pl-3 ">
                A.
              </td>
              <td className=" text-xl ml-4 inline-block text-gray-500">
                JavaScript.
              </td>
            </tr>
            <br />
            <tr>
              <td className="text-5xl text-red-600 border-l-2 border-red-600 pl-3 inline-block ">
                Q.
              </td>
              <td className=" text-xl ml-4 inline-block">
                Why do you like using JavaScript?
              </td>
            </tr>
            <tr>
              <td className="text-5xl text-gray-500 border-l-2 border-gray-500 inline-block pl-3 ">
                A.
              </td>
              <td className=" text-xl ml-4 inline-block text-gray-500">
                Because, its necessarry in Front End Development.
              </td>
            </tr>
            <br />
            <tr>
              <td className="text-5xl text-red-600 border-l-2 border-red-600 pl-3 inline-block ">
                Q.
              </td>
              <td className=" text-xl ml-4 inline-block">
                Why did you study Information Technology?
              </td>
            </tr>
            <tr>
              <td className="text-5xl text-gray-500 border-l-2 border-gray-500 inline-block pl-3 ">
                A.
              </td>
              <td className=" text-xl ml-4 inline-block text-gray-500">
                Because I always wanted to learn how to code and build
                something.
              </td>
            </tr>
            <br />
            <tr>
              <td className="text-5xl text-red-600 border-l-2 border-red-600 pl-3 inline-block ">
                Q.
              </td>
              <td className=" text-xl ml-4 inline-block">
                What Operating System do you use in your machine?
              </td>
            </tr>
            <tr>
              <td className="text-5xl text-gray-500 border-l-2 border-gray-500 inline-block pl-3 ">
                A.
              </td>
              <td className=" text-xl ml-4 inline-block text-gray-500">
                Windows
              </td>
            </tr>
            <br />
            <tr>
              <td className="text-5xl text-red-600 border-l-2 border-red-600 pl-3 inline-block ">
                Q.
              </td>
              <td className=" text-xl ml-4 inline-block">
                How many hours do you code in a day?
              </td>
            </tr>
            <tr>
              <td className="text-5xl text-gray-500 border-l-2 border-gray-500 inline-block pl-3 ">
                A.
              </td>
              <td className=" text-xl ml-4 inline-block text-gray-500">
                Minimum of 3 hours.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
export default Faq;
