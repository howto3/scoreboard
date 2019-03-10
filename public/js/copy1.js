let book = {title: "inside javascript", price: 1000};
/*let a = 1000;
let b = a;
b = 1200;

let copyBook = book;
copyBook.price = 1300;
console.log(book);
console.log(copyBook);

console.log('a:',a);
console.log('b:',b);

copyBook = Object.assign({}, book);
copyBook.price = 1900;
console.log(book);
console.log(copyBook);*/

const copyBook = {...book, ...{a: 1}, ...{title: 'a'}};
copyBook.price = 20000;
console.log(book);
console.log(copyBook);