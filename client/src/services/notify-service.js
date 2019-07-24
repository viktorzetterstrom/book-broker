import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
// PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

const stackBottomModal = {
  dir1: 'up',
  firstpos1: 25,
  push: 'top',
};

const registerSuccess = () => PNotify.success({
  title: "Account created",
  text: "Welcome to Bookbroker",
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'primary-notification'
});

const registerFailure = () => PNotify.error({
  title: "Registration failed",
  text: "Username already taken",
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'secondary-notification'
});

const loginSuccess = username => PNotify.success({
  title: "Login successful",
  text: `Welcome ${username}, to Bookbroker`,
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'primary-notification'
});

const logoutSuccess = () => PNotify.info({
  title: "Logged out",
  text: "We will miss you",
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'secondary-notification'
});

const loginFailure = () => PNotify.error({
  title: "Login failed",
  text: "Wrong credentials provided",
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'secondary-notification'
});

const tradeCreated = (bookname) => PNotify.success({
  title: "Trade created",
  text: `${bookname} added`,
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'primary-notification'
});

const tradeCompleted = (bookname) => PNotify.success({
  title: "Congratulations!",
  text: `Traded ${bookname}.`,
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'primary-notification'
});

const tradeUpdated = (bookname) => PNotify.info({
  title: "Trade updated",
  text: `${bookname} updated`,
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'tertiary-notification'
});

const tradeDeleted = (bookname) => PNotify.info({
  title: "Trade deleted",
  text: `${bookname} deleted`,
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'secondary-notification'
});

const notifyService = {
  registerSuccess,
  registerFailure,
  loginSuccess,
  logoutSuccess,
  loginFailure,
  tradeCreated,
  tradeCompleted,
  tradeUpdated,
  tradeDeleted
}

export default notifyService;