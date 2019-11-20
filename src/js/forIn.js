const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
let orderArr = {};

function orderByProps(obj, arr) {
    for (let property in obj) {
      for (let prop in arr) {
          let item = arr[prop];
          if (property == item) {
            orderArr[property] = obj[property];
            delete obj[property];
          } 
        }
    }

    obj = Object.assign(orderArr, obj);
    return obj;

}    

console.log(orderByProps(obj, ['health','defence']));
