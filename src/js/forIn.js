const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

function orderByProps(obj, itemOne) {
    for (let property in obj) {
        // console.log(property);
        if (property == itemOne) {
            itemOne = property;
            return { key: itemOne, value: obj[property] };
        
        }    
    }
}    

console.log(orderByProps(obj, ['name']));
