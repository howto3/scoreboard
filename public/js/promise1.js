let promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('async setTimeout');
    resolve("success");
  }, 1000);
}).then(value => {
  console.log(value);

  return new Promise (resolve => {
    setTimeout(() => {
      console.log("async2 setTimeout");
      resolve("success2");
    }, 1000);
  });
}).then(value => {
  console.log(value);
});