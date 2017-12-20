var K = {};

K.LongestWord = function(sen) {
  var r = 0;
  var str = '';
    var l = sen.split(' ').map(function (e) {
      e = e.replace(/[^A-Za-z]/g, "");
      if(e.length > r ){
        str = e;
        r = e.length;
      }
    });

  // code goes here
  return str;

}

export default K;
