import React from 'react'

const Plan = ({ nextStep, handleChange, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
      }


  return (
    <div>
        <form>
        <label>
          Name
          <input
            type="radio"
            value={values.plan}
            onChange={handleChange("plan")}
          />
        </label>
        <label>
          Email Address
          <input
            type="radio"
            value={values.plan}
            onChange={handleChange("plan")}
          />
        </label>
        <label>
          phonenumber
          <input
            type="radio"
            value={values.plan}
            onChange={handleChange("plan")}
          />
        </label>
            <button onClick={ Continue }>Next</button>
      </form>
    </div>
  )
}

export default Plan