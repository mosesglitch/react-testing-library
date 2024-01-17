import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

beforeEach(() => {
  render(<App />);
});
const typeIntoForm = ({ email, password, confirmPassword }) => {
  const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmPasswordInputElement =
    screen.getByLabelText(/confirm password/i);
  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (password) {
    userEvent.type(passwordInputElement, password);
  }
  if (confirmPassword) {
    userEvent.type(confirmPasswordInputElement, confirmPassword);
  }
  return {
    emailInputElement,
    passwordInputElement,
    confirmPasswordInputElement,
  };
};
//Always testhow the software is meant to be used, not how it is implemented
// test block- You can have manya ssertions and if one test fails all the tests fails.
// test("renders learn react link", () => {
//   // render component and children we want to test to the virtual dom
//
//   // finding the elements
//   const linkElement = screen.getByText(/learn react/i); //gets anchor tag

//   // an assertion
//   expect(linkElement).toBeInTheDocument();
// });
test("inputs should be iitially empty", () => {
  //pass in jsx form
  const emailInputElement = screen.getByRole("textbox");
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmPasswordInputElement =
    screen.getByLabelText(/confirm password/i);

  expect(emailInputElement.value).toBe("");
  expect(passwordInputElement.value).toBe("");
  expect(confirmPasswordInputElement.value).toBe("");
});

test("should be able to type an email", () => {
  //pass in jsx form
  // const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  // userEvent.type(emailInputElement, "selena@gmail.com");
  const { emailInputElement } = typeIntoForm({
    email: "selena@gmail.com",
  });
  expect(emailInputElement.value).toBe("selena@gmail.com");
});

test("should be able to type a password", () => {
  //pass in jsx form
  // const passwordInputElement = screen.getByLabelText("Password");
  // userEvent.type(passwordInputElement, "password!");
  const { passwordInputElement } = typeIntoForm({
    password: "password!",
  });
  expect(passwordInputElement.value).toBe("password!");
});

test("should be able to type a password for confirmation", () => {
  //pass in jsx form
  // const confirmPasswordInputElement =
  //   screen.getByLabelText(/confirm password/i);
  // userEvent.type(confirmPasswordInputElement, "password!");
  const { confirmPasswordInputElement } = typeIntoForm({
    confirmPassword: "password!",
  });
  expect(confirmPasswordInputElement.value).toBe("password!");
});

test("should show email error message on invalid email", () => {
  const emailErrorElement = screen.queryByText(
    /the email you input is invalid/i
  ); //initially null
  const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  const submitBtnElement = screen.getByRole("button", { name: /submit/i });

  expect(emailErrorElement).not.toBeInTheDocument();

  // userEvent.type(emailInputElement, "selenagmacom");
  // userEvent.click(submitBtnElement);
  // const emailErrorElementAgain = screen.queryByText(/the email you/i);
  // expect(emailErrorElementAgain).toBeInTheDocument();
});
