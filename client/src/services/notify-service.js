import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

const stackBottomModal = {
  dir1: 'up', // With a dir1 of 'up', the stacks will start appearing at the bottom.
  // Without a `dir2`, this stack will be horizontally centered, since the `dir1` axis is vertical.
  firstpos1: 25, // The notices will appear 25 pixels from the bottom of the context.
  // Without a `spacing1`, this stack's notices will be placed 25 pixels apart.
  push: 'top', // Each new notice will appear at the bottom of the screen, which is where the 'top' of the stack is. Other notices will be pushed up.
};

const registerSuccess = () => PNotify.success({
  title: "Account created",
  text: "Welcome to Bookbroker",
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal
});

const registerFailure = () => PNotify.error({
  title: "Registration failed",
  text: "Username already taken",
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal
});

const loginSuccess = username => PNotify.success({
  title: "Login successful",
  text: `Welcome ${username}, to Bookbroker`,
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal
});

const logoutSuccess = () => PNotify.info({
  title: "Logged out",
  text: "We will miss you",
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal
});

const loginFailure = () => PNotify.error({
  title: "Login failed",
  text: "Wrong credentials provided",
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal
});

const tradeCreated = (bookname) => PNotify.success({
  title: "Trade created",
  text: `${bookname} added`,
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal
});

const tradeCompleted = (bookname) => PNotify.success({
  title: "Congratulations!",
  text: `Traded ${bookname}.`,
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal
});

const tradeUpdated = (bookname) => PNotify.info({
  title: "Trade updated",
  text: `${bookname} updated`,
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal
});

const tradeDeleted = (bookname) => PNotify.info({
  title: "Trade deleted",
  text: `${bookname} deleted`,
  delay: 4000,
  width: 300,
  animation: 'fade',
  mouseReset: false,
  stack: stackBottomModal
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