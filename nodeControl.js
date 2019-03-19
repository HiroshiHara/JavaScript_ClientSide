'use strict';
document.addEventListener('DOMContentLoaded', function() {

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

}, false);
