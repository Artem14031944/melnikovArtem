let year = prompt('Введите год?', '');
while (!isNumeric(year)) year = prompt ('Введите год?', '');

const convert = y => Math.ceil(y / 100);

alert(`${year} год это - ${convert(year)} век`)


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
 } 
