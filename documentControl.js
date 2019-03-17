'use strict';

// getAttribute/setAttribute
// 指定した属性名の値を取得/設定できる
// elem.getAttribute(name:属性名)/elem.setAttribute(name:属性名, value:属性値)
function printUrlLog() {
  var urlList = document.getElementsByTagName('a');
  for (var i = 0; i < urlList.length; i++) {
    var url = urlList.item(i);
    console.log(url.getAttribute('href'));
  }
}
printUrlLog();

function destroyScumSearchEngine() {
  var url = document.getElementById('scum');
  url.setAttribute('href', 'https://www.torproject.org');
  window.alert('I did it.');
}

// attributesプロパティはその要素ノードのすべての属性を返す
// 戻り値はNamedNodeMapオブジェクト
// 属性名もしくはインデックス番号でアクセス可
document.addEventListener('DOMContentLoaded', function() {
  var id = document.getElementById('youtube');
  // <img id="youtube">に含まれる属性リストを取得
  var attrs = id.attributes;
  // 属性リストから順に値を取り出し、その属性名:属性値のセットをログ出力
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs.item(i);
    console.log(attr.name + ':' + attr.value);
  }
}, false);

document.getElementById('youtube').addEventListener('click', function() {
  var id = document.getElementById('youtube');
  var attrs = id.attributes;
  console.log(attrs);
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs.item(i);
    if (attr.name == 'height' || attr.name == 'width') {
      attr.value = '200px';
    }
  }
}, false);

// innerHTML/textContent
// 指定要素の配下のテキストを取得/設定する
// textContentは文字列をそのまま設定するので高速
document.getElementById('textContent').addEventListener('click', function() {
  document.getElementById('result_text').textContent = 'ボタンが押下されました' ;
}, false);
// innerHTMLはHTMLとして解釈するので万能だが低速
document.getElementById('innerHTML').addEventListener('click', function() {
  document.getElementById('result_html').innerHTML = '<a href="google.co.jp">google</a>';
}, false);

// innerHTML使用時はXSS脆弱性に注意
document.getElementById('btn').addEventListener('click', function() {
  var yourName = document.getElementById('yourName');
  document.getElementById('result').innerHTML = 'welcome, ' + yourName.value + '!';
}, false);
