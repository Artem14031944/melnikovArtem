"use strict"


let formDef1 = [
    {label:'Название сайта:',kind:'longtext',name:'sitename'},
    {label:'URL сайта:',kind:'longtext',name:'siteurl'},
    {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
    {label:'E-mail для связи:',kind:'shorttext',name:'email'},
    {label:'Рубрика каталога:',kind:'combo',name:'division',
        variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
    {label:'Размещение:',kind:'radio',name:'payment',
        variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
    {label:'Разрешить отзывы:',kind:'check',name:'votes'},
    {label:'Описание сайта:',kind:'memo',name:'description'},
    {label:'Опубликовать:',kind:'submit'},
];

let formDef2 = [
    {label:'Фамилия:',kind:'longtext',name:'lastname'},
    {label:'Имя:',kind:'longtext',name:'firstname'},
    {label:'Отчество:',kind:'longtext',name:'secondname'},
    {label:'Возраст:',kind:'number',name:'age'},
    {label:'Зарегистрироваться:',kind:'submit'},
];



const form_1 = document.querySelector('.form_1');
const form_2 = document.querySelector('.form_2');

let buildForm = (formDef, formHTML) => { 
    formDef.forEach(elem => {
        let formLabel = document.createElement('label');
        formLabel.innerHTML = elem.label;
        formLabel.classList.add('formLabel')
        formHTML.appendChild(formLabel);
        if (elem.kind == 'longtext') {
            let tag = document.createElement('input');
            tag.type = 'text';  
            tag.classList.add('tag')    
            formHTML.appendChild(tag);
            let carry = document.createElement('br');
            formHTML.appendChild(carry);      
        };
        if (elem.kind == 'number') {
            let tag = document.createElement('input');
            tag.type = 'number';      
            formHTML.appendChild(tag);
            let carry = document.createElement('br');
            formHTML.appendChild(carry);
        };
        if (elem.kind == 'shorttext') {
            let tag = document.createElement('input');
            tag.type = 'text'; 
            formHTML.appendChild(tag);
            let carry = document.createElement('br');
            formHTML.appendChild(carry);
        };
        if (elem.kind == 'combo') {
            let tag = document.createElement('select');
            formHTML.appendChild(tag);
            let carry = document.createElement('br');
            formHTML.appendChild(carry);
            elem.variants.forEach(elemLevel2 => {
            let tagOption = document.createElement('option');
            tagOption.setAttribute('value', elemLevel2.value);
            tagOption.textContent = elemLevel2.text;
            tag.appendChild(tagOption);
            });
        };
        if (elem.kind == 'radio') {
            elem.variants.forEach(elemLevel2 => {
            let tag = document.createElement('input');
            tag.type = 'radio';
            tag.name = "payment";
            tag.setAttribute('value', elemLevel2.value);          
            let newSpanRadio = document.createElement('span');
            newSpanRadio.textContent=elemLevel2.text; 
            formHTML.appendChild(tag);
            formHTML.appendChild(newSpanRadio);
            let carry = document.createElement('br');
            formHTML.appendChild(carry);
            });
        };  
        if (elem.kind == 'check') {
            let tag = document.createElement('input');
            tag.type = 'checkbox'; 
            formHTML.appendChild(tag);
            let carry = document.createElement('br');
            formHTML.appendChild(carry);
        };
        if (elem.kind == 'memo') {
            let tag = document.createElement('textarea');
            tag.style.cssText = 'width: 400px; height: 50px';
            formHTML.appendChild(tag);
            let carry = document.createElement('br');
            formHTML.appendChild(carry);
        };
        if (elem.kind == 'submit') {
            let tag = document.createElement('input');
            tag.type = 'submit';
            tag.value = elem.label;;
            formHTML.appendChild(tag);
            let carry = document.createElement('br');
            formHTML.appendChild(carry);
            formHTML.removeChild(formLabel);
            tag.name = elem.name
            };
        });
    }


    buildForm(formDef1, form_1);
    buildForm(formDef2, form_2);


