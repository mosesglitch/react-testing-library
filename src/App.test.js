import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
//Always testhow the software is meant to be used, not how it is implemented
// test block- You can have manya ssertions and if one test fails all the tests fails.
// test("renders learn react link", () => {
//   // render component and children we want to test to the virtual dom
//   render(<App />);
//   // finding the elements
//   const linkElement = screen.getByText(/learn react/i); //gets anchor tag

//   // an assertion
//   expect(linkElement).toBeInTheDocument();
// });
test("iputs should be iitially empty", () => {
  render(<App />); //pass in jsx form
  const emailInputElement = screen.getByRole("textbox");
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmPasswordInputElement =
    screen.getByLabelText(/confirm password/i);

  expect(emailInputElement.value).toBe("");
  expect(passwordInputElement.value).toBe("");
  expect(confirmPasswordInputElement.value).toBe("");
});

test("should be able to type an email", () => {
  render(<App />); //pass in jsx form
  const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  userEvent.type(emailInputElement, "selena@gmail.com");
  expect(emailInputElement.value).toBe("selena@gmail.com");
});

test("should be able to type a password", () => {
  render(<App />); //pass in jsx form
  const passwordInputElement = screen.getByLabelText("Password");
  userEvent.type(passwordInputElement, "password!");
  expect(passwordInputElement.value).toBe("password!");
});

test("should be able to type a password for confirmation", () => {
  render(<App />); //pass in jsx form
  const confirmPasswordInputElement =
    screen.getByLabelText(/confirm password/i);
  userEvent.type(confirmPasswordInputElement, "password!");
  expect(confirmPasswordInputElement.value).toBe("password!");
});

test("should show email error message on invalid email", () => {
  render(<App />);
  const emailErrorElement = screen.queryByText(
    /the email you input is invalid/i
  ); //initially null
  const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  const submitBtnElement = screen.getByRole("button", { name: /submit/i });

  expect(emailErrorElement).not.toBeInTheDocument();

  userEvent.type(emailInputElement, "selenagmacom");
  userEvent.click(submitBtnElement);
  const emailErrorElementAgain = screen.queryByText(/the email you/i);
  expect(emailErrorElementAgain).toBeInTheDocument();
});
