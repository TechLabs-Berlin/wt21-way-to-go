// this block of code should be integrated
// in the index.js file, but not sure exactly where

const data = { lat, lon };
const options = {
  method: "Post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};

const response = await fetch("/api", options);
const dataJson = await response.json();
console.log(dataJson);
