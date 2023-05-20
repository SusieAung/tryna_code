function buy() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let country = prompt("Where are you from? e.g.,country");

  country = country.toLocaleLowerCase().trim();

  if ((country = "myanmar")) {
    alert(
      "Thank you " +
        name +
        " ! We'll be in touch by email, and hope to meet you in future."
    );
  } else {
    alert(
      "Thank you " +
        name +
        " ! We will be in touch by email, meanwhile have a fun learning!"
    );
  }
}

let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buy);
