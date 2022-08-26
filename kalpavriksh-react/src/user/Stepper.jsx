import React, { useState, useEffect, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    console.log(newSteps);
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "stepper"
            : "stepper__success"
        }
      >
        <div className="stepper__steps">
          <div
            className={` stepper__steps--inner ${
              step.selected
                ? "bg-green-600 text-white font-bold border border-green-600 "
                : "stepper__steps-inner"
            }`}
          >
            {step.completed ? (
              <span className="stepper__steps--index">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={` stepper__steps--highlighted ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`stepper__steps--completed  ${
            step.completed ? "border-green-600" : "border-gray-300 "
          }  `}
        ></div>
      </div>
    );
  });

  return (
    <div className="stepsdisplay">
      {stepsDisplay}
    </div>
  );
};
export default Stepper;
