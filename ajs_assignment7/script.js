let ageButton = document.querySelector(".age");
let emailButton = document.querySelector(".email");
let phoneButton = document.querySelector(".phone");
let input = document.querySelector(".input");
let firstName = document.querySelector(".first-name");
let lastName = document.querySelector(".last-name");
let image = document.querySelector(".photo");
let newUser = document.querySelector("#getUser");

function getRandomUser() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      displayUser(result);
    });
}

function displayUser(user) {
  firstName.innerHTML = user.results[0].name.first;
  lastName.innerHTML= user.results[0].name.last;
  image.src = user.results[0].picture.large;
  ageButton.addEventListener("click", function () {
    input.value = user.results[0].registered.age;
  });
  emailButton.addEventListener("click", function () {
    input.value = user.results[0].email;
  });
  phoneButton.addEventListener("click", function () {
    input.value = user.results[0].phone;
  });
}

newUser.addEventListener("click", function () {
  input.value = "";
  getRandomUser();
});

getRandomUser();
