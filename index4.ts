/* 練習問題 */

let omikuji : '吉' | '凶' | '大吉';

const generateOmikujiResult = () => {
  const rand = Math.random()
  if (rand < 0.3){
    return '凶'
  } else if (rand < 0.8){
    return '吉'
  } else {
    return '大吉'
  }
}
omikuji = generateOmikujiResult()

console.log(omikuji)