import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

import { Appointment } from "../src/Appointment";
/**describle func defines a test suite */
describe(Appointment, () => {
  /**it func defines a single test */
  it("renders customers first name", () => {
    // component is the instance of the appointment
    const customer = {
      firstName: "Ashley",
    };
    const component = <Appointment customer={customer.firstName} />;
    const container = document.createElement("div");
    document.body.replaceChildren(container);
    act(() => ReactDOM.createRoot(container).render(component));
    expect(document.body.textContent).toContain("Ashley");
  });

  it("rendors anothet customer name", () =>{
    const customer = {
      firstName: "Jordon",
    };
    const component = ( <Appointment customer={customer.firstName} /> );
    const container = document.createElement("div");
    document.body.replaceChildren(container);
    act(() => ReactDOM.createRoot(container).render(component));

    expect(document.body.textContent).toContain("Jordon");
  })

});
