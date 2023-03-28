setTimeout(function () {
  console.log("3초 뒤 실행됨댜!");
}, 3000);
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {
    console.log("response :", response);
  })
  .catch(function (error) {
    console.log("error: ", error);
  });
console.log("바로 실행");
