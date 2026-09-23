let name = document.querySelector("[name=name]");
let id = document.querySelector("[name=id]");
let email = document.querySelector("[name=email]");
let phone = document.querySelector("[name=phone]");
let password = document.querySelector("[name=password]");
let password2 = document.querySelector("[name=password2]");
let login = document.querySelector("#login");
let regist = document.querySelector("#regist");

const email_id_chk = (obj) => {
  if (!obj.value.indexOf("@")) {
    alert("이메일 형식이 아닙니다.");
    obj.value = "";
    obj.focus();
  }
};

const password_chk = (obj1, obj2) => {
  if (obj1.value !== obj2.value) {
    alert("비밀번호가 일치하지 않습니다.");
    obj1.value = "";
    obj2.value = "";
    obj1.focus();
  }
};

const input_chk = (obj) => {
  if (obj.value == "") {
    alert("필수 입력 사항입니다.");
    obj.focus();
    return false;
  }
};

regist.addEventListener("click", () => {
  let chk = true;
  const inputs = [name, email, phone, password, password2];
  for (let input of inputs) {
    if (!input_chk(input)) return;
  }
  email_id_chk(email);
  password_chk(password, password2);
});
