let el = document.getElementById("app");

class Constant {
  /**
   *
   * @param {{ name: string, alias: Array<string>, description: string, value: any }} options
   */
  constructor(options) {
    this.name = options.name;
    this.alias = options.alias;
    this.description = options.description
    this.value = options.value;
  }
}

const sfw = new class ServerFirewall {
  constructor() {
    this.constants = [];
  }
  /**
   *
   * @param {{ name: string, alias?: Array<string>, description: string, value: any }} options
   */
  addConstant(options) {
    if (this.constants.some(el => el.name === options.name)) {
      for (let index = 0; index < this.constants.length; index++) {
        if (this.constants[index].name === options.name) {
          this.constants[index].value = options.value;
          
          return this.constants[index];
        }
      }
    } else {
      let alias = options.alias ? options.alias : [];
      
      this.constants.push(new Constant({
        name: options.name,
        alias: alias,
        description: options.description,
        value: options.value
      }));
    }
  }
  
  /**
   *
   * @param {string} query
   * @returns {Constant}
   */
  getConstant(query) {
    let result;
    
    this.constants.find(el => el.name === query) ?
      result = this.constants.find(el => el.name === query)
      :
      this.constants.find(el => el.alias.some(al => al === query)) ?
        result = this.constants.find(el => el.alias.some(al => al === query))
        :
        result = undefined;
    
    return result;
  }
}

sfw.addConstant({
  name: "M_UNIT_K",
  alias: ["MUK"],
  description: "Map unit size in kilometers",
  value: Math.sqrt(108) / 3000
});

sfw.addConstant({
  name: "M_UNIT_M",
  alias: ["MUM"],
  description: "Map unit size in meters",
  value: Math.sqrt(108) / 3000 * 1000
});

sfw.addConstant({
  name: "T_RATE",
  description: "Server polling frequency of player data",
  value: 128
});

console.log(sfw.getConstant("T_RATE"));

console.log(sfw.getConstant("MUM"));







/*
let paths = [];

let tickrate = 1;

function getDifferenceBetweenNumbers(n1, n2) {
  if (n1 > n2) {
    return n1 - n2
  } else {
    return n2 - n1;
  }
}

let rate = 1000 / tickrate;

let square = {
  width: 10400,
  length: 10400
}

let unit = square.width / 3000;

let mapLengthAndWidth = unit * 3000 / 1000;

console.log(mapLengthAndWidth * mapLengthAndWidth + " is square of map");

for (let x = -1500; x < 1501; x++) {
  for (let y = -1500; y < 1501; y++) {
    paths.push({
      type: 0,
      x: x,
      y: y
    })
  }
}

let playerX = null;
let playerY = null;

setInterval(() => {
  if (playerX && playerY) {
    if (pastX === null && pastY === null) {
      console.log('set pastX');
      pastX = playerX;
      pastY = playerY;
    } else {
      console.log('getDist');
      let diffX = getDifferenceBetweenNumbers(playerX, pastX);
      let diffY = getDifferenceBetweenNumbers(playerY, pastY);
      
      let diffXSq = diffX * diffX;
      let diffYSq = diffY * diffY;
      
      let distSq = diffXSq + diffYSq;
      
      let dist = Math.sqrt(distSq);
      
      let meters = dist * unit;
      
      let speedInHour = meters * 60 * 60;
      
      let kmh = speedInHour / 1000;
      
      console.log(kmh + " km/h");
      
      pastX = null;
      pastY = null;
    }
  }
}, rate)

let moveListener = null;

let pastX = null;
let pastY = null;

console.log(paths);

el.addEventListener('mouseover', () => {
  moveListener = el.addEventListener('mousemove', (ev) => {
    let x = ev.offsetX;
    let y = ev.offsetY;
    
    x = x * 10;
    x = x - 1500;
    
    y = y * 10;
    y = y - 1500;
    
    playerX = x;
    playerY = y;
  
    let dot = paths.find(el => el.x === x && el.y === y);
  })
})

el.addEventListener('mouseout', () => {
  el.removeEventListener('mousemove', moveListener);
})
*/
