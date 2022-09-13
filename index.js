"use strict";
/* TypeScriptの学習 */
/* 基本 */
const cat = {
    name: '太郎',
    height: 25,
    color: '白'
};
//猫の色をコンソールに出力
console.log('猫は ' + cat.color + ' 色です');
/* 型の設定についての学習 */
//Arrayの型の設定方法は２種類存在
const scores = [10, 20, 30];
const scores2 = [10, 20, 30];
function calcAverage(values) {
    let sum = 0;
    for (const value of values) {
        sum += value;
    }
    const avg = sum / values.length;
    return avg;
}
const averageScore = calcAverage(scores);
const averageScore2 = calcAverage(scores2);
console.log(averageScore);
console.log(averageScore2);
