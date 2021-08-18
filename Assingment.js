document.write("Assignment Answers<br>")
//1
var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00');
document.write(dateToday.getMilliseconds()+"<br>");



//2
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];
for(var i = 0; i<library.length;i++)
{
    document.write("Book Name : "+library[i].title+"<br>");
    document.write("Author Name : "+library[i].author+"<br>");
    document.write("Reading Status : "+library[i].readingStatus+"<br>");

}

//3
var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company;
console.log(emp1.company)
document.write("Reference Error<br>");

//4
function foo1()
{
return {
bar: "hello"
};
}
function foo2()
{
return
{
bar: "hello"
};
}
document.write("foo1() returns the object whereas foo2() returns undefined since curly braces are not on the same line<br>");


//5
var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function(num) {
return num / 2;
});
document.write(new_arr+"<br>");
document.write("1,28,39,17,32.5");




//6
const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
set.delete('Beethoven');


//7
var operatingSystem = [
{
    name : "Ubuntu",
    version : 18.4,
    license : "open source"
},
];


//8
const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};
var obj = Object.assign(details,name);
document.write("First name : "+obj.firstName+"<br>");
document.write("Last name : "+obj.lastName+"<br>");
document.write("Job : "+obj.job+"<br>");
document.write("Employer : "+obj.employer+"<br>");

//9
const gimli =
{ name: "Gimli",
race: "dwarf",
weapon: "axe",
greet: function() { return `Hi, my name is ${this.name}!`; }, };
document.write(gimli.greet());


//10
function Hero(name, level)
{
this.name = name;
this.level = level;
}
document.write("<br>this keyword should be used if both the argument and inside constructor names are same.");



