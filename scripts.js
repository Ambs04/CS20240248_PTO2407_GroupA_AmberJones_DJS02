const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Divide normally with two numbers above zero
  result.innerText = Math.floor(dividend / divider);

  if (dividend / divider === Infinity) {
    result.innerText = `Division not performed. Invalid number provided. Try again.`;
    throw new Error(`Dividend cannot be divided by zero.`);
  }
});
