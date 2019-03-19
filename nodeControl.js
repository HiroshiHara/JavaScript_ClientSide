'use strict';
document.addEventListener('DOMContentLoaded', function() {

  // 新規にノードを作成する
  document.getElementById('exec_btn').addEventListener('click', function() {
    // テキストボックスの内容を取得
    var website_name = document.getElementById('website_name');
    var url = document.getElementById('url');

    // <a>要素を生成
    var anchor = document.createElement('a');
    // <a>要素のhref属性を指定
    anchor.href = url.value;
    // <a>要素のstyle属性を指定
    anchor.style = 'color:black; text-decoration:none;';
    // テキストノードを生成
    var text = document.createTextNode(website_name.value);
    // 生成したノードを<a>直下に追加
    anchor.appendChild(text);
    // <br>要素を生成
    var br = document.createElement('br');

    // <div id="result_link">を取得
    var result_link = document.getElementById('result_link');
    // <div>要素の直下に<a>/<br>の順番で追加
    result_link.appendChild(anchor);
    result_link.appendChild(br);
  }, false);

  // 複雑なコンテンツを作成する
  document.getElementById('listview_btn').addEventListener('click', function() {
    // <li>で表示したい配列
    var books = [
      {title: 'Readable Code', price: 2200},
      {title: 'Effective Java', price: 4500},
      {title: 'RESTful API', price: 3300}
    ];

    // コンテンツを蓄積するためのDocumentFlangmentオブジェクトを生成
    var fragment = document.createDocumentFragment();
    // 配列booksの内容を順番に<li>要素に整形
    for (var i = 0; i < books.length; i++) {
      var book = books[i];
      var li = document.createElement('li');
      var text = document.createTextNode(book.title + ':' + book.price);
      li.appendChild(text);
      fragment.appendChild(li);
    }

    // <li>要素をまとめて文書ツリーに追加
    document.getElementById('item_list').appendChild(fragment);
  }, false);

}, false);
