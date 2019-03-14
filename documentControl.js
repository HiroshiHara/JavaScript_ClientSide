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
  url.textContent = 'I did it.';
}
destroyScumSearchEngine();
