'use strict';
document.addEventListener('DOMContentLoaded', function() {

  // 変化前のbackground-color
  let defaultColor = '#86d385';

  // mouseover/mouseoutでbackground-color変更
  var first_child1 = document.getElementsByClassName('first_child1');
  first_child1[0].addEventListener('mouseover', function() {
    // プロパティ名はキャメルケースになる
    this.style.backgroundColor = '#93e892';
    this.style.transition = '.1s';
  }, false);
  first_child1[0].addEventListener('mouseout', function() {
    this.style.backgroundColor = defaultColor;
    this.style.transition = '.1s';
  }, false);

  // mouseover/mouseoutでbackground-color変更
  var first_child2 = document.getElementsByClassName('first_child2');
  first_child2[0].addEventListener('mouseover', function() {
    // クラス名を変更
    this.className = 'change_red';
  }, false);
  first_child2[0].addEventListener('mouseout', function() {
    // クラス名を変更
    this.className = 'change_default';
  }, false);

  // classNameプロパティでクラスの着脱
  var second_child1 = document.getElementsByClassName('second_child1');
  second_child1[0].addEventListener('click', function() {
    this.className = (this.className === 'second_child1' ? 'change_blue' : 'second_child1');
  }, false);

  // 既にクラス名が付与されている要素のチェックにはsplit()が使える
  var second_child2 = document.getElementsByClassName('second_child2');
  second_child2[0].addEventListener('click', function() {
    // 複数のクラスは空白区切りで取得されるので、' 'でsplit()
    var classes = this.className.split(' ');
    // "change_yellow"が付与されているか検証
    var index = classes.indexOf('change_yellow');
    if (index === -1) {
      // 付与されていなければ新たに追加
      classes.push('change_yellow');
    } else {
      // 既に付与されていれば除去
      classes.splice(index, 1);
    }
    // 配列の要素をjoin(' ')で空白文字で連結する
    this.className = classes.join(' ');
  }, false);

  // classListプロパティでclass属性の値をDOMTokenListオブジェクトで取得できる
  // length, item(), contains, add, remove, toggle(切替)が使用可能
  // IEがVer.10以降対応。ほんとクソ
  var third_child1 = document.getElementsByClassName('third_child1');
  third_child1[0].addEventListener('mousedown', function() {
    var classes = this.classList;
    classes.add('change_purple');
  }, false);
  third_child1[0].addEventListener('mouseup', function() {
    var classes = this.classList;
    classes.remove('change_purple');
  }, false);

  var third_child2 = document.getElementsByClassName('third_child2');
  third_child2[0].addEventListener('mousedown', function() {
    var classes = this.classList;
    classes.add('change_width');
  }, false);
  third_child2[0].addEventListener('mouseup', function() {
    var classes = this.classList;
    classes.remove('change_width');
  }, false);

}, false);
