import factory from "./factory.js";
import Cookie from "./Cookie.js";

addEventListener("DOMContentLoaded", (event) => {
  const username = "formPesquisaSatisfacao";
  const cookie = new Cookie(username);
  const eita = cookie.getCookie();
  console.log(eita);
});
