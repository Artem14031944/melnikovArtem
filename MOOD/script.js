"use strict"

  function randomDiap(n,m) {
    return Math.floor(Math.random()*(m - n + 1)) + n 
  }

  function filterColors(arr, e) {
    if(!arr.includes(e)) {
      arr.push(e)
    } else{
      filterColors(arr, randomDiap(1,7))
    }
  }

  let cleanArr = []

  function mood(colorsCount) {
    var colors = [ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ]

    console.log( 'цветов: ' + colorsCount )
    for( var i = 1; i <= colorsCount; i++ ) {
      var n = randomDiap(1,7)
      filterColors(cleanArr, n)
    }
    cleanArr.map(e => console.log(colors[e]))
  }
     
mood(3)

