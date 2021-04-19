"use strict"

function pushReducer() {
  
  let word = prompt('Введите слово!')
  while(word === '') {
    word = prompt('Введите слово!', '')
  } 

function words(word) {

  let wordCheck = word.toLowerCase().split('')
  const words = [ 'а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е' ]
  

  let count = wordCheck.reduce((p,i) => words.includes(i) ? p + 1 : p, 0) 
    return alert(`В слове глассных букв : ${ count }`)
  }
  
   if( word >= " " && word !== null ) {
    words(word)
  }
}



  