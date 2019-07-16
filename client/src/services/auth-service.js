const authService = {
  isAuthenticated: false,
  authenticate(username, password, cb) {
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
      .then(res => res.json())
      .then(console.log)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
};

export default authService;
