"use strcit"

function duildWrapper(teg) {
    return function(word) {
        word = word.replace(/&/g, "&amp;");
        word = word.replace(/>/g, "&gt;");
        word = word.replace(/</g, "&lt;");
        word = word.replace(/"/g, "&quot;");
        word = word.replace(/'/g, "&#039;");
        return `<${teg}> ${word} </${teg}>`;
    }
}

let wrapP = duildWrapper('p');
let wrapH1 = duildWrapper('h1');

console.log(wrapP('Text'));
console.log(wrapP("ВкусныйМ&'sМ"));
console.log(wrapH1('Title'));

