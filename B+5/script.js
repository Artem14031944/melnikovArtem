"use strcit"

function duildWrapper(teg) {
    return function(word, obj) {
        word = word.replace(/&/g, "&amp;");
        word = word.replace(/>/g, "&gt;");
        word = word.replace(/</g, "&lt;");
        word = word.replace(/"/g, "&quot;");
        word = word.replace(/'/g, "&#039;");

        if(obj) {
            let objRec = Object.entries(obj)
            for ([key, val] of objRec){
                return `<${teg} ${key} ='${val}'> ${word} </${teg}>`;
            } 
        }  
        return `<${teg}> ${word} </${teg}>`;
    }
    
}

let wrapP = duildWrapper('p');
let wrapH1 = duildWrapper('h1');


console.log(wrapP('Text'));
console.log(wrapP("ВкусныйМ&'sМ"));
console.log(wrapH1('Title',{align:"center", title:"M&'><M"}));

