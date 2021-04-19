"use strict"

const bigData = [];

let itemProduct = {
  img: null,
  price: null,
  desc: null,
  id: null
};


function getItem() {
  itemProduct.img = document.getElementById('idImg').value;
  itemProduct.price = document.querySelector('#idPrice').value;
  itemProduct.desc = document.querySelector('#desc').value;
  itemProduct.id = document.querySelector('#idID').value;
};

//////////////   Button  Activation

function pushBigData() {
  getItem()
  bigData.push(itemProduct)
  pushProduct(bigData,addProduct)

 //////////////   Clean inputs
  let inputs = [...document.querySelectorAll('input')];
  for (var i = 0;  i < inputs.length; i++) {
    inputs[i].value = '';
  };
};

function addProductBasket() {
  bigData.push(itemProduct)
  pushProduct(bigData,basket)
};



//////////////   Blocks

let addProduct = document.querySelector('.addProduct');
let basket = document.querySelector('.basket');


//////////////   Button

let pushAddProduct = document.getElementById('button_addBasket');


//////////////   Function render()

function pushProduct(arr, block) {
for(let i = 0; i < arr.length; i++) {
  let str = `<div class="block_product">
              <div class="img">
                <img src="${arr[i].img}"></img>
              </div>
              <div class="price product" >
                <h2>${arr[i].price}</h2>
              </div>
              <div class="product">
                <p>${arr[i].desc}</p>
              </div>
              <div class="product">
                <button class="btn btn-success" id="button_basket" onclick="addProductBasket()" > Add in basket </button>
              </div>
            </div>
      `;
  block.innerHTML += str
  arr = []
}};


//////////////   Activation

pushAddProduct.addEventListener('click', pushBigData);

