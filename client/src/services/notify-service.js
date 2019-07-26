import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/es/PNotifyStyleMaterial.js';
// PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

const stackBottomModal = {
  dir1: 'up',
  firstpos1: 20,
  spacing1: 10,
  push: 'top',
};

const registerSuccess = () => PNotify.success({
  title: "Account created",
  text: "Welcome to Bookbroker!",
  delay: 2500,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'primary-notification'
});

const registerFailure = () => PNotify.error({
  title: "Registration failed",
  text: "Username already taken.",
  delay: 2500,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'secondary-notification'
});

const loginSuccess = username => PNotify.success({
  title: "Login successful",
  text: `Welcome ${username}!`,
  delay: 2500,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'primary-notification'
});

const logoutSuccess = () => PNotify.info({
  title: "Logged out",
  text: "We will miss you!",
  delay: 2500,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'secondary-notification'
});

const loginFailure = () => PNotify.error({
  title: "Login failed",
  text: "Wrong credentials provided.",
  delay: 2500,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'secondary-notification'
});

const tradeCreated = (bookname) => PNotify.success({
  title: "Trade created",
  text: `${bookname}`,
  delay: 1500,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'primary-notification'
});

const tradeCompleted = (bookname) => PNotify.success({
  title: "Congratulations!",
  text: `Traded ${bookname}.`,
  delay: 1500,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'primary-notification'
});

const tradeUpdated = (bookname) => PNotify.info({
  title: "Trade updated",
  text: `${bookname} updated.`,
  delay: 1500,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'tertiary-notification'
});

const tradeDeleted = (bookname) => PNotify.info({
  title: "Trade deleted",
  text: `${bookname}`,
  delay: 1500,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'secondary-notification'
});

const pinAdded = (bookname) => PNotify.info({
  title: "Trade pinned",
  text: `${bookname}`,
  delay: 1500,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal,
  addClass: 'primary-notification'
});

const pinRemoved = (bookname) => PNotify.info({
  title: "Trade unpinned",
  text: `${bookname}`,
  delay: 1500,
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
  tradeDeleted,
  pinAdded,
  pinRemoved,
}

export default notifyService;