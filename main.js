const api = 'https://dummyjson.com/quotes';
const list = document.getElementById('quote-list');
const showMoreBtn = document.getElementById('show_moreBtn');

let pagination = {
    limit: 20,
    skip: 0,
    total: 0
}


async function loadQuotes(pagination){
    

    let {limit, skip, total} = pagination;

    if(total && skip >= total)
    {
        alert('No more quotes');
        return;
    }

    let query = `${api}/?limit=${limit}&skip=${skip}`;

    let res = await fetch(query);
    console.log('Status : ' + res.status);

    let data = await res.json();
    console.log(data);

    total = data.total;

    for(const quote of data.quotes)
    {
        list.innerHTML +=`<dt>[${quote.id}]</dt> - ${quote.author}`;
        list.innerHTML +=`<dd>${quote.quote}</dd>`;
    }
    pagination.skip+=pagination.limit;
}

loadQuotes(pagination);
showMoreBtn.onclick = ()=>{
    let {limit, skip, total} = pagination;
    // if(skip >=total)
    // {
    //     alert('No more quotes');
    //     return;
    // }
    loadQuotes(pagination);
}





// function greet() {
//     var age = 30;
//     console.log('Hello World' + age);
//     age = 25;
// }
// // var age = 25;
// // var age = 33;
// //const age = 33;
// let [ , product2] = ['potato', 'tomato']//destructuring
// //console.log(product1);
// console.log(product2);


// let student = {
//     name : 'Bohdan',
//     age : 30,
//     nick : 'sk',
//     group:'SPR421',
//     course: 4,
//     sayHi(){
//         alert('Hello' + this.name);
//     }
// };
// class Student{
//     constructor(name,surname, age, nick, group, course){
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.nick = nick;
//         this.group = group;
//         this.course = course;
//     }
//     get fullName(){
//         return `${this.name} ${this.surname}`;
//     }
//     set fullName(newValue)
//     {
//         [this.name, this.surname] = newValue.split(' ');
//     }
// }

// let student1 = new Student('Bohdan', 'Koval', 30, 'sk', 'SPR421', 4);
// student1.fullName = "Vasya Pupkin";
// console.log(student1.fullName);

// let map = new Map();
// map.set("st1", "Bohdan");
// map.set("st2", "Vasya");
// map.set("st3", "Petya");
// for(let key of map.keys()){
//     console.log(`${key}`);
// }

// let set = new Set();//no duplicates

// set.add("Bohdan");
// set.add("Vasya");
// set.add("Petya");
// set.add("Bohdan1");
// for(let item of set){
//     console.log(item);
// }


// let weakMap = new WeakMap();
// let weakSet = new WeakSet();