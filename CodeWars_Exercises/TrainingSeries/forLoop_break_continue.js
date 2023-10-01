function grabDoll(dolls){
    var bag=[];
    for(var i=0;i<dolls.length;i++){
      if(dolls[i]!="Hello Kitty" && dolls[i]!="Barbie doll")
        continue;
      bag.push(dolls[i]);
      if(bag.length>=3)
        break;
    }
    return bag;
  }

  console.log(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]),["Hello Kitty"]);
  console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]),["Hello Kitty","Hello Kitty"]);