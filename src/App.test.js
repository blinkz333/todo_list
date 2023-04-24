import { find_Department , findModeAge , generateHair , generateAddress } from './components/libs/globalfunction'


describe("test function", () => {
 
  it("test find department", async () => {
    // mock data
    const data = [
      { id: 1, company: { department: "Marketing"} },
      { id: 2, company: { department: "Services"} },
    ];

    // return value
    const dep_data = {
      Marketing: [{company: {department: "Marketing"}, id: 1}], 
      Services: [{company: {department: "Services"}, id: 2}]
    }

    const value =  await find_Department(data)
    expect(value).toEqual(dep_data);
  });

  it("test find mode age",  () => {
    // mock data
    const data = [
      { id: 1, age : 10 },
      { id: 2, age :  20},
      { id: 3, age :  30},
    ];
    const value =   findModeAge(data)
    expect(value).toEqual(20);
  });

  it("test find hair",  () => {
    // mock data
    const data = [
      { id: 1, hair : {color : "Black"}},
      { id: 2, hair : {color : "Blond"}},
      { id: 3, hair : {color : "Black"}},
    ];


    // return value
    const hair_data = { Black: 2, Blond: 1 }

    const value = generateHair(data)
    expect(value).toEqual(hair_data);
  });

  it("test find address",  () => {
    // mock data
    const data = [
      { id: 1, firstName: "Terry" , lastName: "Medhurst" , address : {postalCode: "20020"}},
      { id: 2, firstName: "Sheldon" , lastName: "Quigley" , address : {postalCode: "40219"}},
      { id: 3, firstName: "Terrill" , lastName: "Hills" , address : {postalCode: "95945"}},
    ];


    // return value
    const address_data = {
      TerryMedhurst: '20020',
      SheldonQuigley: '40219',
      TerrillHills: '95945'
    }

    const value = generateAddress(data)
    expect(value).toEqual(address_data);
  });


});