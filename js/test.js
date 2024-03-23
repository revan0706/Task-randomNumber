function randomNum() {
  let a = document.querySelectorAll("h1");
  for (let i = 0; i < a.length; i++) {
    let random = Math.floor(Math.random() * 10);
    a[i].innerHTML = random;
  }
}
document.querySelector("div").style =
  "display : flex ; justify-content: space-evenly";
document.querySelector("input").style =
  "position : absolute ; top:50% ; left:50% ; padding:16px 29px;font-size:36px;border-radius:8px;background-color:black ; color:white;";
