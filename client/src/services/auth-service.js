const authService = {
  isAuthenticated: false,
  login(username, password, cb) {
    this.isAuthenticated = true
    fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password
      })
    })
      .then(res => res.text())
      .then(text => {
        if (text === 'Unauthorized') throw new Error();
        else return JSON.parse(text);
      })
      .then(json => cb(json))
      .catch(err => cb(false));
  },
  register(username, email, password, cb) {
    fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, email, password
      })
    })
      .then(res => res.json())
      .then(json => cb(json));
  },
  signout(cb) {
    this.isAuthenticated = false
    fetch('/api/users/logout', { method: 'POST' })
      .then(() => cb());
  }
};

export default authService;
