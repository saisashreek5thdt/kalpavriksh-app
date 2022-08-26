export default function StepperControl({ handleClick, currentStep, steps }) {
    return (
      <div className="steppercontrol">
        <button
          onClick={() => handleClick()}
          className={`steppercontrol__buttonback  ${
            currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
          }`}
        >
          Back
        </button>
  
        <button
          onClick={() => handleClick("next")}
          className="steppercontrol__buttonfront"
        >
          {currentStep === steps.length - 1 ? "Confirm" : "Next"}
        </button>
      </div>
    );
  }