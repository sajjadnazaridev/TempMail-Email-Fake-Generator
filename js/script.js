// Declare variables and arrays
const fonts = ["cursive", "sans-serif", "serif", "monospace"];
let captchaValue = "";

// Generate random captcha value
function generateCaptcha() {
  let value = btoa(Math.random() * 1000000000);
  value = value.slice(0, 4 + Math.random() * 5);
  captchaValue = value;
}

// Display captcha value on the page
function setCaptcha() {
  let html = captchaValue
    .split("")
    .map((char) => {
      const rotate = -20 + Math.trunc(Math.random() * 30);
      const font = Math.trunc(Math.random() * fonts.length);
      return `<span 
        style="
          transform:rotate(${rotate}deg);
          font-family:${fonts[font]}
        "
      >${char}</span>`;
    })
    .join("");
  document.querySelector(".section-captcha .preview").innerHTML = html;
}

// Initialize captcha and set event listeners
function initCaptcha() {
  document
    .querySelector(".section-captcha .captcha-form .captcha-refresh")
    .addEventListener("click", function () {
      generateCaptcha();
      setCaptcha();
    });
  generateCaptcha();
  setCaptcha();
}

// Call the function to initialize captcha
initCaptcha();

// Validate captcha and display appropriate response
document
  .querySelector(".section-captcha .submit-captcha")
  .addEventListener("click", function () {
    let inputCaptchaValue = document.querySelector(
      ".section-captcha .captcha-form input"
    ).value;
    if (inputCaptchaValue === captchaValue) {
      var sectionCaptcha = document.querySelector(".section-captcha");
      sectionCaptcha.classList.replace("def-show-element", "def-hide-element");
    } else {
      var alertError = document.querySelector(".alert-error");
      alertError.classList.replace("def-hide-element", "def-show-element");
    }
  });

//create email
// get elements from DOM
const inputEmailFake = document.getElementById("input-email-fake");

function generateEmail() {
  // Automatic email generation
  inputEmailFake.value = "";
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newEmail = "";
  const emailProviders = ["yahoo", "gmail"];

  for (let i = 1; i <= 6; i++) {
    newEmail += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  const randomEmailProviders =
    emailProviders[Math.floor(Math.random() * emailProviders.length)];

  const result = `${newEmail}@${randomEmailProviders}.com`;

  inputEmailFake.value = result;
}

generateEmail();

//button copy email
const btnCopyEmail = document.querySelector(".button-copy-email-fake");
btnCopyEmail.addEventListener("click", () => {
  navigator.clipboard.writeText(inputEmailFake.value).then(() => {
    alert(`${inputEmailFake.value} copied to clipboard!`);
  });
});

//date in header
const showDate = document.querySelector(".clockAndDate");
setInterval(() => {
  let date = new moment().format("YYYY/MM/DD HH:mm:ss");
  showDate.textContent = date;
});

//dropdown language
const listLanguage = document.querySelector(".list-lang");
const btnChangeLang = document.querySelector(".selected-lang-btn");

btnChangeLang.addEventListener("click", () => {
  listLanguage.classList.toggle("def-show-element");
  listLanguage.classList.toggle("def-hide-element");
});
