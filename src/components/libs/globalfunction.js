
const find_Department = async (data) => {
    const department = data.reduce((x , y) => {
        (x[y.company.department] = x[y.company.department] || []).push(y);
        return x;
    },{})

    return department

}

const findModeAge =  ( obj ) => {
    
    let sumAge = 0;
      obj.forEach(items => {
        sumAge += items.age;
      });
      return Math.floor(sumAge / obj.length)
}

const generateHair = (obj) => {
    const hair = obj.reduce((x , y) => {
        (x[y.hair.color] = x[y.hair.color] || []).push(y);
        return x;
      },{})


      Object.keys(hair).filter((items) => {
        hair[items] = hair[items].length
      })


      return hair
}

const generateAddress = (obj) => {
    const address = obj.reduce((x , y) => {
        (x[y.firstName + y.lastName] = x[y.firstName] || []).push(y);
        return x;
      },{})

      Object.keys(address).filter((items) => {
        address[items] = address[items][0].address.postalCode
      })

      return address

}   

export { find_Department , findModeAge , generateHair , generateAddress}


