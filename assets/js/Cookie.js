export default class Cookie {
  username;

  constructor(userIn) {
    this.username = userIn;
  }

  setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie() {
    let name = this.username + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  checkCookie() {
    let user = this.getCookie("username");
    if (user != "") {
      console.log("Olá novamente " + user);
    } else {
      user = this.username;
      if (user != "" && user != null) {
        this.setCookie("username", user, 365);
      }
    }
  }
}
