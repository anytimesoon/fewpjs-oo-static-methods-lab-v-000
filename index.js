class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static sanitize(str) {
    return str.replace(/[]/gi, '');
  }
  
  static titleize(str) {
    var words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        self.capitalize(words[i]);
      }
      
      switch(words[i]){
        case 'a':
          break;
        case 'an':
          break;
        case 'but':
          break;
        case 'of':
          break;
        case 'and':
          break;
        case 'for':
          break;
        case 'at':
          break;
        case 'by':
          break;
        case 'from':
          break;
        default:
          self.capitalize(words[i]);
          break;
      }
    }
    
    return words.join(' ');
  }
}

for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}