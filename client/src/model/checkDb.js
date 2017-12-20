import IO from '../../init/socket.js';


class CheckDb {
  checkLogin(loginObj) {

    IO.socket.emit('login',loginObj);
      IO.socket.on('login', function(msg){

        return true;
    });

  }
}
const checkDb = new CheckDb();
export default checkDb;
