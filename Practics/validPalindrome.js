var isPalindrome = function(s) {
    let bag = '';
    for (let i = 0; i < s.length; i++) {
      if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')) {
        bag += s[i];
      }
    }
  
    bag = makeItLowerCase(bag);
    let bag2 = '';
    for (let i = bag.length - 1; i >= 0; i--) {
      bag2 += bag[i];
    }
    
    return bag === bag2;
  };
  
  function makeItLowerCase(s) {
    let bag = '';
    let toLowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = 0; i < s.length; i++) {
      let isUppercase = false;
      for (let j = 0; j < uppercase.length; j++) {
        if (s[i] === uppercase[j]) {
          bag += toLowerCase[j];
          isUppercase = true;
          break;
        }
      }
      if (!isUppercase) {
        bag += s[i];
      }
    }
    
    return bag;
  }
  
  let s = 'A man, a plan, a canal: Panama';
  let ans = isPalindrome(s);
  console.log(ans);
  