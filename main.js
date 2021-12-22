// you task will be to return an array of all children who will receive a gift. The child will receive a gift if:
// *they have been nice
// *left cookies for santa
// *and is under 16 years of age







const santasList = [
    {childName: "Little Timmy", expectedGift: "iphone14", naughty: false, age: 35, leftACookie: true},
    {childName: "Joseph", expectedGift: "toy car", naughty: false, age: 5, leftACookie: true},
    {childName: "Berta", expectedGift: "doll house", naughty: true, age: 10, leftACookie: false},
    {childName: "Reece", expectedGift: "doll house", naughty: false, age: 4, leftACookie: true},
    {childName: "Simren", expectedGift: "doll house", naughty: true, age: 7, leftACookie: false},
    {childName: "Troy", expectedGift: "doll house", naughty: true, age: 1, leftACookie: false},
    {childName: "", expectedGift: "doll house", naughty: true, age: 7, leftACookie: false}
];

function generateGoodList(list){
const goodList = [];
for(i=0; i< santasList.length; i++){
    let child = list[i]
    if(child.naughty === false && child.age < 16 && child.leftACookie === true){
    goodList.push(list[i].childName);
}
}
console.log(goodList);
return goodList;
}

generateGoodList(santasList);
