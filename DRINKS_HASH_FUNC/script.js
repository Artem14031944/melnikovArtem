'use strict'

/////////////Class
class HashStorageFunc {
  constructor() {}

    addValue(key, value) {
      return this[key] = value
    }

    getValue(key) {
      return this[key]
    }

    deleteValue(key) {
      return delete this[key]
    }

    getKeys() {
      return Object.keys(this)
    }

}

const drinkStorage = new HashStorageFunc()


/////////////Events 

let nameDrink = document.querySelector('#nameDrink'),
    select = document.querySelector('#select'),
    recept = document.querySelector('#recept'),
    searchDrink = document.querySelector('#searchDrink'),
    listDrink = document.querySelector('.listDrink'),
    searchRe = document.querySelector('.searchRe'),
    deleteDrink = document.querySelector('#deleteDrink'),
    answer = document.querySelector('.answer') 
    

 /////////////Function 
   
function clearInfo() {
  nameDrink.value = "";
  select.value = "Да";
  recept.value = "";
}

 /////////////Function Add 

btnAdd.onclick = () => {
  if (nameDrink.value !== "") {
      const info = {
          'Алкогольный': select.value,
          'Рецепт': recept.value,
      }
      drinkStorage.addValue(nameDrink.value, info);
      clearInfo();
      nameDrink.placeholder = "";
  } else {
      clearInfo();
      nameDrink.placeholder = "Введите название напитка, вот здесь)";
  }
}

 /////////////Function infoDrink

btnInfo.onclick = () => {
  if (drinkStorage.getKeys().length < 1) {
      listDrink.innerHTML = 'Каталог пуст!'
  } else {
      listDrink.innerHTML = "";
      drinkStorage.getKeys().forEach(el => {
          let li = document.createElement('li');
          li.innerHTML = el;
          listDrink.append(li);
      });
  }
}

 /////////////Function infoRe

btnAll.onclick = () => {
  if (drinkStorage.hasOwnProperty(searchDrink.value)) {
      searchRe.innerHTML = "";
      for (let key in drinkStorage.getValue(searchDrink.value)) {
          let li = document.createElement('li');
          li.innerHTML = `${key} : ${drinkStorage.getValue(searchDrink.value)[key]} `;
          searchRe.append(li);
      }
  } else {
    searchRe.innerHTML = undefined;
  }
  searchRe.value = '';
}

 /////////////Function deleteDrink

btnDelete.onclick = () => {
  if (!drinkStorage.hasOwnProperty(deleteDrink.value)) {
      deleteDrink.value = '';
      answer.innerHTML = `<h3>Не удаленно</h3>`  /* false*/ ;
   } else {
      drinkStorage.deleteValue(deleteDrink.value);
      deleteDrink.value = '';
      answer.innerHTML = `<h3>Удаленно</h3>`  /* true*/;
  }
}
