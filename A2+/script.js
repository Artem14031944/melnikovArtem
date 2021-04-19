let btn = document.querySelector('.btn');

const onclick = () => {
  let str = prompt('Введите слово');

  function trimStr (string) {
    let newStr = string.replace(/^\s+|\s+$/g, ' | ');
    alert(`Ответ: ${newStr}`)
  }
  
  if( str >= " " && str !== null ) {
    trimStr(str)
  }
}

btn.addEventListener('click', onclick);
