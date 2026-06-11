//Q1 変数
let nickname = 'こうちゃん';
let age = '23';

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

//Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go '];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

//Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


//Q4 配列 × オブジェクト
let playerList = [{
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5 四則演算
aveAge = (playerList[0].age + playerList[1].age + playerList[2].age) / 3;
console.log(aveAge);

//Q6 関数
function sayHello() {
  console.log('Hello');
}
sayHello();

let sayWorld = function () {
  console.log('World');
}
sayWorld();

//Q7 メソッド
user.birthday = '2000-09-27';
//console.log(user.birthday);
user.sayHello = function () {
  console.log('Hello!');
}
user.sayHello();


//Q8 引数
let calc = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
};
console.log(calc.add(5, 2));
console.log(calc.subtract(13, 3));
console.log(calc.multiply(7, 7));
console.log(calc.divide(10, 2));

//Q9 返り値
let remember = function (x, y) {
  return x % y;
}

console.log(`5を3で割った余りは${remember(5, 3)}です。`);

//Q10 スコープ
//下記の console.log(x); においてコンソールに 1 が出力されることはなく、x is not defined（変数 x が定義されていない）というエラーが出力されます。
//その理由を以下 2 つの単語を使用し app.js にコメントアウトで回答してください。

// スコープ
// 参照
//function foo() {
//  let x = 1;
//}
//console.log(x);

//A.letのスコープはfoo関数内であり、console.log(x)はfoo関数の外に書かれており、参照できないため。