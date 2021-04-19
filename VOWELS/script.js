const click = () => {
  
  let word = prompt('Введите слово!');
  while(word === '') {
    word = prompt('Введите слово!', '');
  } 

function words(word) {

  let count = 0;
  const words = [ 'а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е' ];

  for(let char of word.toLowerCase()) {
    if(words.includes(char)) {
      count += 1;
    }
  }
  return console.log(`Итог: ${count}`);
  }
   if( word >= " " && word !== null ) {
    words(word)
  }
}



document.querySelector('.btn').addEventListener('click', click)
  