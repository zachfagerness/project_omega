import checkDb from '../model/checkDb.js';

class Login {
  isValid(loginObj) {
    return checkDb.checkLogin(loginObj);
  }
}

const login = new Login();
export default login;
