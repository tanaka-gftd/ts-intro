"use strict";
/* クラスの学習 */
/* 基本形 */
class Character {
    constructor(name) {
        this.id = 20;
        this.name = name;
        this.id2 = 99;
    }
    greet() {
        console.log(`こんにちは。私は${this.name}です。`);
    }
}
const npc = new Character('NPC1'); //インスタンスの生成（引数はコンストラクタに渡される）
npc.greet(); //インスタンスメソッドの呼び出し
console.log(npc.name);
npc.name = 'NPC10000';
console.log(npc.name);
/* 継承 */
class Player extends Character {
    move(point) {
        console.log(`${point}に移動しました`);
    }
    showId() {
        //console.log(`IDは${this.id}です`);  //idはprivateで宣言したので継承クラスからはアクセス不可
        console.log(`ID2は${this.id2}です`); //id2はprotectedで宣言したので継承クラスからアクセス可能
    }
}
const player = new Player('プレイヤー1');
player.greet();
player.move('2歩前');
const npc2 = new Character('NPC2');
//console.log(npc2.id);  //idはprivateで宣言したので、インスタンスからもアクセス不可
//npc2.id = 999;  //idはprivateで宣言したので代入も不可
const npc3 = new Player('NPC3');
npc3.showId();
//console.log(npc3.id2)  //protectedで宣言したものは、インスタンスからのアクセス不可
