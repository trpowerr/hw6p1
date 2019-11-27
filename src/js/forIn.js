const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
let orderArr = [];
let finalArr = {};

function orderByProps(obj, arr) {
    for (let property in obj) {
      for (let prop in arr) {
          let item = arr[prop];
          if (property == item) {
            finalArr.key = property;
            console.log(typeof finalArr.key);
            finalArr.value = obj[property];
            console.log(typeof obj[property]);
            console.log(finalArr);
            // orderArr.push(finalArr);
            // console.log(orderArr);
            delete obj[property];
          } 
        }
    }
    

    obj = Object.assign(finalArr, obj);

    return obj;

}    

console.log(orderByProps(obj, ['name','level']));
