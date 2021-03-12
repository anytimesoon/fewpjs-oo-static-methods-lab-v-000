class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  
  static sanitize(str) {
    return str
  }
  
  static titleize(str) {
    var words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        words[i].capitalize(words[i])
      }
      
      switch(words[i]){
        
      }
    }
    
    $.each(words, function(index, word){
        words[index] = word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    return str
  }
}

for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}