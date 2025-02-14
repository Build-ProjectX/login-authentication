let signinbtn = document.querySelector(".signinbtn");
let signupbtn = document.querySelector(".signupbtn");
let inputfld = document.querySelector(".inputfld");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let text = document.querySelector('.text');

signinbtn.addEventListener("click", () => {
  inputfld.style.maxHeight = "0";
  title.innerHTML = 'Sign In';
  text.innerHTML = 'Lost password';
  signupbtn.classList.add("disable");
  signinbtn.classList.remove("disable");
  underline.style.transform = "translateX(35px)"; 
});

signupbtn.addEventListener("click", () => {
  inputfld.style.maxHeight = "60px"; 
  title.innerHTML = 'Sign Up';
  text.innerHTML = 'Password suggestions';
  signupbtn.classList.remove("disable");
  signinbtn.classList.add("disable");
  underline.style.transform = "translateX(0)"; 
});
