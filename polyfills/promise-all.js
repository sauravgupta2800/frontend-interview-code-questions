Promise.myAll = function (values) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    values.forEach((singlePromise, index) => {
      singlePromise
        .then((res) => {
          results[index] = res;
          completed++;
          if (completed === values.length) resolve(results);
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
};

function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(time), time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

Promise.myAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
