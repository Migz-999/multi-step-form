import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Addons from "./Addons";
import Plan from "./Plan";
import Summary from "./Summary";

export default class MultiformMain extends Component {
  state = {
    step: 1,
    name: "",
    email: "",
    phonenumber: "",
    plan: "",
    addons: "",
    summary: "",
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value })
    console.log(this.state.name);
  };

  render() {
    const { step } = this.state;
    const { name, email, phonenumber, plan, addons, summary } = this.state;
    const values = { name, email, phonenumber, plan, addons, summary };

    switch (step) {
      case 1:
        return (
          <PersonalInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Plan
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Addons
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <Summary />;
      // never forget the default case, otherwise VS code would be mad!
      default:
      // do nothing
    }
  }
}

