const loginButton = document.querySelector("#login");
const registerButton = document.querySelector("#regist");

if (loginButton !== null) {
  loginButton.addEventListener("click", (event) => {
    const id = document.querySelector("#id");
    const password = document.querySelector("#password");

    if (id.value === "") {
      event.preventDefault();
      alert("아이디를 입력하세요.");
      id.focus();
      return;
    }

    if (password.value === "") {
      event.preventDefault();
      alert("비밀번호를 입력하세요.");
      password.focus();
      return;
    }

    alert("입력유무체크 완료");
  });
}

if (registerButton !== null) {
  registerButton.addEventListener("click", () => {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("form input");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const password2 = document.querySelector("#password2");

    for (let input of inputs) {
      if (input.value === "") {
        alert(input.name + "을 입력하세요.");
        input.focus();
        return;
      }
    }

    if (email.value.indexOf("@") === -1) {
      alert("이메일 형식이 아닙니다.");
      email.focus();
      return;
    }

    if (password.value !== password2.value) {
      alert("비밀번호가 일치하지 않습니다.");
      password.value = "";
      password2.value = "";
      password.focus();
      return;
    }

    form.submit();
  });
}
