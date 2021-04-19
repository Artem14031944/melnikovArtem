"use strict"

function pushFilter() {
  
  let word = prompt('Введите слово!')
  while(word === '') {
    word = prompt('Введите слово!', '')
  } 

function words(word) {

  let wordCheck = word.toLowerCase().split('')
  const words = [ 'а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е' ]
  
  
  let count = wordCheck.filter(i => words.includes(i)).length
    return alert(`В слове глассных букв : ${ count }`)
  }

   if( word >= " " && word !== null ) {
    words(word)
  }
}



