"use strict";
/* 型の学習、その２ */
/* 型アサーションで、コンパイル時の型を指定する */
let word = 'こんにちは';
let wordLength = word.length; //unknown型を、文字列型としてコンパイルする
let wordLength2 = word.length; //unknown型を、文字列型としてコンパイルする（書き方その２）
console.log(wordLength);
console.log(wordLength2);
let num = 100;
let numLength = num.length;
console.log(numLength); //数値を文字列として扱っているので、出力は undefined となる（型アサーションによりコンパイルエラーにはならない）
/* Union型で、複数の型の設定を許容する */
/* Union型の場合、実際に変数を使う場合は、型のチェックとともに使用する */
let input; //この場合、文字列型、数値型、undefined型を許容する
/* 交差型で、複数の型をまとめる */
let sampleObject; //この場合、aは数値型、bは文字列型を設定できるようになる
sampleObject = { a: 2, b: 'ねこ' };
console.log(sampleObject);
/* リテラル型で、代入可能な値を直接指定*/
let trafficLights; //信号機の色
trafficLights = '青'; //この場合、赤,黄,青以外の値を設定するとエラーになる
console.log(trafficLights);
let diceRoll = 1; //この場合、1,2,3,4,5,6以外の値を設定するとエラーになる
console.log(diceRoll);
const taro = {
    name: 'Taro',
    age: 16,
    grade: 10
};
console.log(taro);
const hanako = {
    name: 'Hanako',
    age: 24,
    job: 'engineer'
};
console.log(hanako);
