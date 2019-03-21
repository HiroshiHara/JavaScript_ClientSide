'use strict';
document.addEventListener('DOMContentLoaded', function() {

  // デフォルトの背景色
  var defaultColor = '#86d385';
  var first_child1 = document.getElementsByClassName('first_child1');
  var first_child2 = document.getElementsByClassName('first_child2');
  var second_child1 = document.getElementsByClassName('second_child1');
  var second_child2 = document.getElementsByClassName('second_child2');
  var third_child1 = document.getElementsByClassName('third_child1');

  // mouseover/mouseoutイベントハンドラを登録する関数
  let setMouseOverOuterEvent = function() {
    first_child1[0].onmouseover = function() {
      this.style.backgroundColor = '#e8ffdd';
      this.style.transition = '.1s';
    };
    first_child1[0].onmouseout = function() {
      this.style.backgroundColor = defaultColor;
      this.style.transition = '.1s';
    };
  };
  setMouseOverOuterEvent();

  // clickイベントで上記のイベントハンドラを破棄
  first_child1[0].onclick = function() {
    if (!(first_child1[0].onmouseover) && !(first_child1[0].onmouseout)) {
      setMouseOverOuterEvent();
    } else {
      // onxxxxに対してnullを設定する
      first_child1[0].onmouseover = null;
      first_child1[0].onmouseout = null;
    }
  };

  // イベントオブジェクトを利用してマウスポインタの座標を取得
  first_child2[0].addEventListener('mousemove', function(e) {
    first_child2[0].innerHTML = '<p>screen' + e.screenX + '/' + e.screenY + '<br>'
      + 'page'+ e.pageX + '/' + e.pageY + '<br>'
      + 'client' + e.clientX + '/' + e.clientY + '<br>'
      + 'offset' + e.offsetX + '/' + e.offsetY + '<br></p>';
  }, false);

  // イベントオブジェクトを利用して特定のキーが押下されたとき発生するイベント
  second_child2[0].addEventListener('keydown', function(e) {
    if (e.key === 'k') {
      var textarea = document.getElementById('textarea');
      textarea.value = 'keydown';
    }
  }, false);

  // mousedown/mouseupイベントリスナーを登録する関数
  var setMouseDownUpEvent = function() {
    second_child1[0].addEventListener('mousedown', function() {
      second_child1[0].innerHTML = '<p>mouseup</p>';
    }, false);
    second_child1[0].addEventListener('mouseup', function() {
      second_child1[0].innerHTML = '<p>mousedown</p>';
    }, false);
  };
  setMouseDownUpEvent();

  // イベントオブジェクトの利用
  third_child1[0].addEventListener('click', function(e) {
    var target = e.target;
    console.log('発生元:' + target.nodeName + '/' + target.id);
    console.log('種類:' + e.type);
  }, false);

}, false);
