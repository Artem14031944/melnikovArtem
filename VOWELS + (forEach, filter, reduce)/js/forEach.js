"use strict"

function pushForEach() {
  
  let word = prompt('Введите слово!')
  while(word === '') {
    word = prompt('Введите слово!', '')
  } 

function words(word) {

  let count = 0
  let wordCheck = word.toLowerCase().split('')
  const words = [ 'а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е' ]
  
  
  wordCheck.forEach(i => {
    if(words.includes(i)) {
      count += 1
    }})
    
    return alert(`В слове глассных букв : ${ count }`)
  }

   if( word >= " " && word !== null ) {
    words(word)
  }
}




  