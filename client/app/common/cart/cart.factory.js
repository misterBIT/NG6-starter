let CartFactory = function () {
  "ngInject";
  const items = [];


let add = (item, amount) => {

  const foundItem = items.find(currItem => currItem.name === item.name)
  if (foundItem) {
    foundItem.amount += amount;
  } else {
    item.amount = amount;
    items.push(item);
  }

};

let getItems = () => {
  return items;
};

let getCount = () => {
  return items.length;
};


  return { add, getItems, getCount };
};

export default CartFactory;
