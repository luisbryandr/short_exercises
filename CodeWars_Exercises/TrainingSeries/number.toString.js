function colorOf(r,g,b){
    //coding here
    let r1 = r.toString(16);
    let g1 = g.toString(16);
    let b1 = b.toString(16);
    if (r1.length === 1){
        r1 = "0" + r1;
    }
    if (g1.length === 1){
        g1 = "0" + g1;
    }    
    if (b1.length === 1){
        b1 = "0" + b1;
    }
    return "#" + r1 + g1 + b1;

  }

  console.log(colorOf(255,0,0));
  console.log(colorOf(0,111,0));