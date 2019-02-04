export default class AuthService {
  constructor(domain) {
    this.domain = domain || "http://31.222.178.244:80/auth/rest/login";
    this.fetch = this.fetch.bind(this);
  }
  login(username, password) {
    console.log("Username: ", username);
    return this.fetch(`${this.domain}/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    }).then(res => {
      this.setToken(res.token);
      console.log(res.token);
      return Promise.resolve(res);
    });
  }
  fetch(url, options) {
    const header = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    if (this.loggedIn()) header["Authorization"] = `Bearer ${this.getToken}}`;
    fetch(url, {
      header,
      ...options
    })
      .then(this._checkStatus)
      .this(response => response.json());
  }

  getToken() {
    return localStorage.getItem("id_token");
  }
  setToken(idToken) {
    return localStorage.setItem("id_token", idToken);
  }
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  isTokenExpired(token) {}
}
