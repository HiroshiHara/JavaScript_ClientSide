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

  // 書籍名のリンクをクリックしたときの処理
  var book_list = document.getElementById('book_list');
  var delete_btn = document.getElementById('delete_btn');
  var book_pict = document.getElementById('book_pict');
  // <ul>配下の<a>をクリックしたときの処理
  book_list.addEventListener('click', function(e) {
    // data-isbn属性から<a>に紐付いたisbn値を取得
    var isbn = e.target.getAttribute('data-isbn');
    // isbn値が取得できた場合のみ処理を実行
    if (isbn) {
      // <img>要素を生成
      var img = document.createElement('img');
      img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
      img.alt = '書籍画像';
      img.height = 150;
      img.width = 108;
      // <div>要素配下に<img>が存在するか(画像が表示中か確認)
      if (book_pict.getElementsByTagName('img').length > 0) {
        // 存在する場合、新たな<img>で置換
        book_pict.replaceChild(img, book_pict.lastChild);
      } else {
        // 存在しない場合、新たに<img>を追加し「削除」ボタンを有効に
        book_pict.appendChild(img);
        delete_btn.disabled = false;
      }
    }
  }, false);

  // 書籍画像削除ボタンを押下したときの処理
  delete_btn.addEventListener('click', function() {
    // <div>要素は以下の<img>要素を削除し、「削除」ボタンを無効に
    book_pict.removeChild(book_pict.lastChild);
    delete_btn.disabled = true;

  }, false);

}, false);
