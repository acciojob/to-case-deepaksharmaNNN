function toCase(text) {
    // write your code here
      let str = text.toLowerCase();
      str = str + "-";
      str = str + text.toUpperCase();
        return str;
  }


  // DO not change the code below
  
  const text = prompt("Enter text:");
  alert(toCase(text));
  