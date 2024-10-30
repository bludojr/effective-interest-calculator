import { useState } from "react";
import React from "react";

const Calculator = ({}) => {
  const [nominalRate, setNominalRate] = useState("");
  const [compoundingPeriods, setcompoundingPeriods] = useState("");
  const [submittedNominalRate, setSubmittedNominalRate] = useState("");
  const [submittedCompoundingPeriods, setSubmittedCompoundingPeriods] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedNominalRate(nominalRate);
    setSubmittedCompoundingPeriods(compoundingPeriods);
  };

  const calculateIntrest = (nominalRate, compoundingPeriods) => {
    const i = nominalRate / 100;
    const n = compoundingPeriods;
    const eir = Math.pow(1 + i / n, n) - 1;

    return (eir * 100).toFixed(2);
  };

 

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="" >
        <div className="grid bg-gray-600 justify-center mt-20 py-8 rounded-md ">
          <div className="mx-2  text-lg font-sans"> Nominal Rate</div>
          <input
            value={`${nominalRate}`}
            onChange={(e) => setNominalRate(e.target.value)}
            className="text-wrap py-1 mb-4 mx-2 w-70 px-2 rounded-md"
            type="text"
            placeholder="Enter the Annual Rate"
          />
          <div className="mx-2   text-lg font-sans"> Compounding Periods Per Year</div>
          <input
            value={compoundingPeriods}
            onChange={(e) => setcompoundingPeriods(e.target.value)}
            className="text-wrap py-1 mx-2 w-80 px-2 rounded-md"
            type="text"
            placeholder="Enter the Annual Commpounding Periods"
          />
          <br />
          <button
            type="submit"
            className="bg-red-700 hover:bg-red-600 text-white w-32 mx-auto rounded-md p-1 "
          >
            Calculate
          </button>

          <div className="mt-4 text-white px-2">
          Effective Interest Rate: {`${calculateIntrest(submittedNominalRate,submittedCompoundingPeriods)}%`}
 
          </div>          
        </div>
      </form>
    </div>
  );
};
export default Calculator;
