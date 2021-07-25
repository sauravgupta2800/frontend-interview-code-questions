function resolveTimeout(value, delay) {
    return new Promise(
      resolve => setTimeout(() => resolve(value), delay)
    );
}
  
function rejectTimeout(reason, delay) {
return new Promise(
    (r, reject) => setTimeout(() => reject(reason), delay)
);
}

const allPromise = Promise.race([
    resolveTimeout(['potatoes', 'tomatoes'], 1000),
    rejectTimeout(new Error("Error is throwing"), 1000)
]);
  
  // wait...
allPromise.then((lists)=>{
    console.log("Resolved: ",lists)
})
.catch((e)=>{
    console.log("Rejected: ",e)
})
