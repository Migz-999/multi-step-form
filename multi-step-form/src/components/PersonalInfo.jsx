import React from "react";

const PersonalInfo = ({ nextStep, handleChange, values }) => {

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
            type="text"
            placeholder="e.g. Stephen King"
            value={values.name}
            onChange={handleChange("name")}
          />
        </label>
        <label>
          Email Address
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={values.email}
            onChange={handleChange("email")}
          />
        </label>
        <label>
          phonenumber
          <input
            type="tel"
            placeholder="e.g. +1 234 567 890"
            value={values.phonenumber}
            onChange={handleChange("phonenumber")}
          />
        </label>
            <button onClick={ Continue }>Next</button>
      </form>
    </div>
  );
};
export default PersonalInfo;
