export default function orderByProps(obj, arr) {

    const safeObjCopy = {...obj};


    const orderObj = {};
    let finalArr = [];
    let abcArr = [];

    for (let property in safeObjCopy) {
      for (let prop in arr) {
          let item = arr[prop];
          if (property == item) {
            orderObj[property] = safeObjCopy[property];
            delete safeObjCopy[property];
          }
      }
    }

    for (let order in orderObj) {
      finalArr.push({key: order, value: orderObj[order]});
    }

    for (let abc in safeObjCopy) {
      abcArr.push({key: abc, value: safeObjCopy[abc]});
      abcArr.sort(function(a, b){
        let nameA=a.key.toLowerCase(), nameB=b.key.toLowerCase()
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
        })
    }
    
    safeObjCopy = finalArr.concat(abcArr);
    
    return safeObjCopy;

}