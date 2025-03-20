const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Divide normally with two numbers above zero
  result.innerText = Math.floor(dividend / divider);

  //Divide by zero
  if (dividend / divider === Infinity) {
    result.innerText = `Division not performed. Invalid number provided. Try again.`;
    throw new Error(`Dividend cannot be divided by zero.`);
  } else if (dividend === "" || divider === "") {
    //Dividend and divider input fields are empty
    result.innerText = `Division not performed. Both values are required in input fields. Try again`;
  }
});
