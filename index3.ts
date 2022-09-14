/* クラスの学習 */


/* 基本形 */
class Character {  //クラスの宣言

  //name: string;  //プロパティ（インスタンス変数）

  public name: string;  //publicなので、どこからでもアクセス可能

  private id: number;  //privateなので、宣言したクラス内からのみアクセス可能（インスタンスや継承先からはアクセス不可）

  protected id2: number;  //protectedなので、宣言したクラス内と継承先クラスからアクセス可能

  constructor(name: string) {  //コンストラクタ
    this.id = 20;
    this.name = name;
    this.id2 = 99;
  }

  public greet(){  //メソッド
    console.log(`こんにちは。私は${this.name}です。`);
  }
}

const npc = new Character('NPC1');  //インスタンスの生成（引数はコンストラクタに渡される）
npc.greet();  //インスタンスメソッドの呼び出し
console.log(npc.name);
npc.name = 'NPC10000';
console.log(npc.name);



/* 継承 */
class Player extends Character {  //上記のCharacterクラスを継承して、Playerクラスを作成する
  public move(point: string){
    console.log(`${point}に移動しました`);
  }

  public showId(){
    //console.log(`IDは${this.id}です`);  //idはprivateで宣言したので継承クラスからはアクセス不可
    console.log(`ID2は${this.id2}です`);  //id2はprotectedで宣言したので継承クラスからアクセス可能
  }
}

const player = new Player('プレイヤー1');
player.greet();
player.move('2歩前')

const npc2 = new Character('NPC2');
//console.log(npc2.id);  //idはprivateで宣言したので、インスタンスからもアクセス不可
//npc2.id = 999;  //idはprivateで宣言したので代入も不可

const npc3 = new Player('NPC3');
npc3.showId();
//console.log(npc3.id2)  //protectedで宣言したものは、インスタンスからのアクセス不可
