import { arr } from '../forIn';

const superMegaFinalArr = [];
const arrFinalValue = ['name','level','attack', 'defence', 'health'];

arr.map(value => {
    const {key} = value;
    superMegaFinalArr.push(key);
});

function testValue() {
  for (let element of arrFinalValue) {
    let checkVar = arrFinalValue.indexOf(element)
    let checkVar2 = superMegaFinalArr.indexOf(element)
    if (checkVar != checkVar2) {
      return false;
    } else {
      return true;
    }
  };
}

let received = 0;
let expected = 0;

test('check the correct order for "true"', () => {
    received = testValue();
    expected = true;
    expect(received).toBe(expected);
});
