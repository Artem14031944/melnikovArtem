const click = () => {

  let wordInput = prompt('Введите слово!');
  while(wordInput === '') {
    wordInput = prompt('Введите слово!', '');
  } 
  

  function paliRecurs(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
  
    let reverseStr = (str) => str === "" ? "" : newStr = reverseStr(str.substr(1)) + str.charAt(0);
  
    reverseStr(str);
  
    let pali = (str === newStr ? "Полиндром" : "Неполиндром");
    
    if( str === "" || str === " ") {
        alert(`Строка: \ ${wordInput} \ - Неполиндром!`);
    }
      else {
        alert(`Строка: \ ${wordInput} \ - ${pali}`);
    }
  }
  paliRecurs(wordInput);
}

let btn = document.querySelector('.btn').addEventListener('click', click);
