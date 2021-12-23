import {generateGoodList, santasList} from "./main.js"

it("Who gets the presents?", () =>{
    //assemble
    const expected = ['Name: Joseph. Gift: Toy car.',
    'Name: Reece. Gift: Hummus.',
    'Name: Simren. Gift: Anotehr object.',
    'Name: Troy. Gift: Something else....']
    //act
    const actual= generateGoodList(santasList);
    //assert
    expect(actual).toStrictEqual(expected);
})