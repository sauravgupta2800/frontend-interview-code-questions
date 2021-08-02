const inputId = document.getElementById("input-box");

const betterFunction = debounce(getData, 5000);

function getData(params) {
  console.log("API call.", params);
}

function debounce(callback, delay) {
  let setTimeOutId;
  return function (...args) {
    const context = this;
    if (setTimeOutId) {
      clearTimeout(setTimeOutId);
    }
    setTimeOutId = setTimeout(function () {
      callback.apply(context, args);
    }, delay);
  };
}

function throttle(callback, delay) {
  let setTimeoutId = false;
  return function (...args) {
    const context = this;
    if (!setTimeoutId) {
      callback.apply(context, args);
      setTimeoutId = setTimeout(function () {
        clearTimeout(setTimeoutId);
        setTimeoutId = false;
      }, delay);
    }
  };
}

inputId.addEventListener("keyup", function (event) {
  betterFunction({ page: 1, q: event.target.value });
});
