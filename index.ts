/* TypeScriptの学習 */


/* 基本 */
const cat = {  //猫のオブジェクトを作成
  name: '太郎',
  height: 25,
  color: '白'
};

//猫の色をコンソールに出力
console.log('猫は ' + cat.color + ' 色です');


/* 型の設定についての学習 */


//Arrayの型の設定方法は２種類存在
const scores: number[] = [10, 20, 30];
const scores2: Array<number> = [10, 20, 30];

function calcAverage(values: number[]): number {
  let sum: number = 0;
  for(const value of values) {
    sum += value;  
  }
  const avg: number = sum/values.length;
  return avg;
}

const averageScore: number = calcAverage(scores);
const averageScore2: number = calcAverage(scores2);

console.log(averageScore);
console.log(averageScore2);