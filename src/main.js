// Якщо імейл і пароль користувача збігаються, зберігай дані з форми при сабміті
// у локальне сховище і змінюй кнопку login на Logout і роби поля введення
// недоступними для змін.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.




import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const USER_DATA = {
  email: "user@mail.com",
  password: "secret",
};

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", onFormSubmit);
const buttonRef = document.querySelector(".login-btn");
const inputEmail = document.querySelector("[name='email']");
const inputPassword = document.querySelector("[name='password']");

function onFormSubmit(event) {
    event.preventDefault();
    if(buttonRef.textContent === "Logout") {
        buttonRef.textContent = "Login";
        localStorage.removeItem("userData");
        inputEmail.removeAttribute("readonly");
        inputPassword.removeAttribute("readonly");
        loginForm.reset();
        return;
    }

    const emailValue = event.target.elements.email.value.trim();
    const passwordValue = event.target.elements.password.value.trim();

    if(emailValue === "" || passwordValue === "") {
        iziToast.warning({message: "Треба заповнити усі поля!!!"}) 
        return;
    };
    if(emailValue !== USER_DATA.email || passwordValue !== USER_DATA.password) {
        iziToast.error({message: "Пароль або емейл не співпадає!!"})
        return;
    }

    localStorage.setItem("userData", JSON.stringify({email: emailValue, password: passwordValue}))
    buttonRef.textContent = "Logout";
    inputEmail.setAttribute("readonly", true);
    inputPassword.setAttribute("readonly", true);

    
}
    const saveData = localStorage.getItem("userData");

    if(saveData) {
        const parseSaveData = JSON.parse(saveData);
        inputEmail.value = parseSaveData.email;
        inputPassword.value = parseSaveData.password;
        buttonRef.textContent = "Logout";
        inputEmail.setAttribute("readonly", true);
        inputPassword.setAttribute("readonly", true);
    }

