'use strict';
document.addEventListener('DOMContentLoaded', function() {

  // デフォルトの背景色
  var defaultColor = '#86d385';
  var first_child1 = document.getElementsByClassName('first_child1');

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

  
}, false);
