class Formatter {
  //add static methods here
  static capitalize(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1)
    console.log('str');
    return str;
    
  }
  
  static sanitize(str) {
    return str.replace(/[$@#!\*\({\^]/gi, '');
  }

  static titleize(str) {
    var sanitized = this.sanitize(str)
    var words = sanitized.split(' ');

    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        this.capitalize(words[i]);
      }
    
      
      // switch(words[i]){
      //   case 'a':
      //     break;
      //   case 'an':
      //     break;
      //   case 'but':
      //     break;
      //   case 'of':
      //     break;
      //   case 'and':
      //     break;
      //   case 'for':
      //     break;
      //   case 'at':
      //     break;
      //   case 'by':
      //     break;
      //   case 'from':
      //     break;
      //   default:
      //     this.capitalize(words[i]);
      //     break;
      // }
    
    }
    return words.join(' ');
  }
  
}