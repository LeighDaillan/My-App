import { Fragment } from "react";

const Faq = function () {
  return (
    <Fragment className="font-pop">
      <h1 className="text-center mt-16 text-gray-800 text-4xl font-bold">
        Frequently Asked Questions (FAQ)
      </h1>

      <div className="mt-16 grid grid-cols-2 items-center mr-40">
        <span className="question-number justify-self-end">Q.</span>
        <p className="question justify-self-start">
          What is your favourite Programming Language?
        </p>

        <span className="answer-logo justify-self-end">A.</span>
        <p className="answer justify-self-start">JavaScript.</p>

        <span className="question-number justify-self-end">Q.</span>
        <p className="question justify-self-start">
          Why do you like using JavaScript?
        </p>

        <span className="answer-logo justify-self-end">A.</span>
        <p className="answer justify-self-start">
          Because, its necessarry in Front End Development.
        </p>

        <span className="question-number justify-self-end">Q.</span>
        <p className="question justify-self-start">
          Why did you study Information Technology?
        </p>

        <span className="answer-logo justify-self-end">A.</span>
        <p className="answer justify-self-start">
          Because I always wanted to learn how to code and build something.
        </p>

        <span className="question-number justify-self-end">Q.</span>
        <p className="question justify-self-start">
          Why did you study Information Technology?
        </p>

        <span className="answer-logo justify-self-end">A.</span>
        <p className="answer justify-self-start">
          Because I always wanted to learn how to code and build something.
        </p>

        <span className="question-number justify-self-end">Q.</span>
        <p className="question justify-self-start">
          What Operating System do you use in your machine?
        </p>

        <span className="answer-logo justify-self-end">A.</span>
        <p className="answer justify-self-start">
          Windows is the operating sys that I use.
        </p>
      </div>
    </Fragment>
  );
};
export default Faq;
