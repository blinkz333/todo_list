const find_Department = async (data: any[]) => {
  const department = data.reduce((x: any, y: any) => {
    (x[y.company.department] = x[y.company.department] || []).push(y);
    return x;
  }, {});

  return department;
};

const findModeAge = (obj: any[]) => {
  let sumAge = 0;
  obj.forEach((items) => {
    sumAge += items.age;
  });
  return Math.floor(sumAge / obj.length);
};

const generateHair = (obj: any[]) => {
  const hair = obj.reduce((x: any, y: any) => {
    (x[y.hair.color] = x[y.hair.color] || []).push(y);
    return x;
  }, {});

  Object.keys(hair).filter((items) => {
    hair[items] = hair[items].length;
  });

  return hair;
};

const generateAddress = (obj: any[]) => {
  const address = obj.reduce((x: any, y: any) => {
    (x[y.firstName + y.lastName] = x[y.firstName] || []).push(y);
    return x;
  }, {});

  Object.keys(address).filter((items) => {
    address[items] = address[items][0].address.postalCode;
  });

  return address;
};

const generateProductType = (value: string): string => {

  const data: {[key: string]: string} = {
      Apple: 'Fruit',
      Broccoli: 'Vegetable',
      Mushroom: 'Vegetable',
      Banana: 'Fruit',
      Tomato: 'Vegetable',
      Orange: 'Fruit',
      Mango: 'Fruit',
      Pineapple: 'Fruit',
      Cucumber: 'Vegetable',
      Watermelon: 'Fruit',
      Carrot: 'Vegetable',
  }

  return data[value] || '';
}

export { find_Department, findModeAge, generateHair, generateAddress, generateProductType };
