//ボタンのid要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  //textというidを持つHTML要素を取得し、定数に代入する
  const h2Value = document.getElementById('text');
  //h2要素に「ボタンをクリックしました」というテキストを追加する
  h2Value.textContent = "ボタンをクリックしました";
  //「ボタンをクリックしました」というテキストを画面に表示する。
  console.log(h2Value);
}, 2000);
