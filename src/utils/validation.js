const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName) {
    throw new Error("FirstName cannot be empty.");
  } else if (!lastName) {
    throw new Error("LastName cannot be empty.");
  } else if (firstName.length < 3 || firstName.length > 50) {
    throw new Error(
      "FirstName cannot have lessthan 3 char or more than 50 char."
    );
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Please enter valid email Id.");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong password.");
  }
};

module.exports = { validateSignUpData };
