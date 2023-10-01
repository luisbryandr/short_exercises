function padIt(str,n){
    //coding here
    var i = 0;
    while (i < n) {
      if (i % 2 == 0) {
        str = "*" + str;
      } else {
        str = str + "*";
      }
      i++;
    }
    return str
  }

  console.log(padIt("a",1),"*a");
  console.log(padIt("a",2),"*a*");