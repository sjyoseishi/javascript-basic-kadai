//今日の日付データを変数に格納
//変数は"today"とする
var today=new Date(); 

//年・月・日・曜日を取得
var year = today.getFullYear();
var month = today.getMonth()+1;
var day = today.getDate();

//年・月・日を書き出す
console.log(year+"年"+month+"月"+day+"日 ");