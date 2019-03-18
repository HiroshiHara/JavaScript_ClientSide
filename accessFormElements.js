'use strict'
document.addEventListener('DOMContentLoaded', function() {
  // 入力されたテキストに応じて表示項目を書き換え
  document.getElementById('text_btn').addEventListener('click', function() {
    var name = document.getElementById('name');
    console.log(name.value);
    var result = name.value + ' が入力されました';
    document.getElementById('name_result').textContent = result;
  }, false);

  // 選択した項目に応じて表示項目を書き換え
  document.getElementById('checkBox_btn').addEventListener('click', function() {
    // 選択結果を格納する配列
    var results = [];
    // 全選択肢を格納する配列
    var foods = document.getElementsByName('food');
    // 全選択肢を走査し、チェック状態か否か確認
    for (var i = 0; i < foods.length; i++) {
      var food = foods.item(i);
      if (food.checked) {
        console.log(food.value);
        results.push(food.value);
      }
    }
    // チェック状態のもので表示項目を書き換え
    var checkBox_result = '';
    for (var i = 0; i < results.length; i++) {
      console.log(results[i]);
      checkBox_result += results[i] + ', ';
    }
    console.log(checkBox_result);
    var sliced = checkBox_result.slice(0, -2);
    document.getElementById('checkBox_result').textContent = sliced;
  }, false);

  // チェックボックスの初期値を設定
  var setCheckbox = function(name, value) {
    var elems = document.getElementsByName('food');
    for (var i = 0; i < elems.length; i++) {
      var elem = elems.item(i);
      // Array.indexOf()... 引数の要素がArrayの中のどれかと一致しなければ-1
      if (value.indexOf(elem.value) > -1) {
        elem.checked = true;
      }
    }
  };

  // チェックボックスの初期値を焼き肉とラーメンに
  setCheckbox('food', ['焼き肉', 'ラーメン']);

  // 指定されたラジオボタンの値を取得(関数)
  var getRadioValue = function(name) {
    var result = '';
    var elems = document.getElementsByName(name);
    for (var i = 0; i < elems.length; i++) {
      var elem = elems.item(i);
      if (elem.checked) {
        result += elem.value;
        break;
      }
    }
    return result;
  };

  document.getElementById('radio_btn').addEventListener('click', function() {
    document.getElementById('radio_result').textContent = getRadioValue('city');
  }, false);

  // ラジオボタンの初期値を設定する
  var setRadioValue = function(name, value) {
    var elems = document.getElementsByName(name);
    // ラジオボタンを走査し、valueが等しいものをcheckedに
    for (var i = 0; i < elems.length; i++) {
      var elem = elems.item(i);
      if (elem.value === value) {
        elem.checked = true;
        break;
      }
    }
  };

  // ラジオボタンの初期値を大阪に
  setRadioValue('city', '大阪');

  // リストボックスの値を取得する
  var getListBoxValue = function(name) {
    // 選択結果を格納する配列
    var results = [];
    var opts = document.getElementById(name).options;
    for (var i = 0; i < opts.length; i++) {
      var opt = opts.item(i);
      // リストボックスはselectedで判別
      if (opt.selected) {
        results.push(opt.value);
      }
    }
    return results;
  };

  // リストボックスの選択結果を項目表示
  document.getElementById('list_btn').addEventListener('click', function() {
    var results = getListBoxValue('sports');
    var resultToString = '';
    for (var i = 0; i < results.length; i++) {
      resultToString += results[i] + ', ';
    }
    var sliced = resultToString.slice(0, -2);
    document.getElementById('listBox_result').textContent = sliced;
  }, false);

  // リストボックスの初期値を設定する
  var setListBoxValue = function(name, array) {
    var opts = document.getElementById(name).options;
    console.log(opts);
    for (var i = 0; i < opts.length; i++) {
      var opt = opts.item(i);
      if (array.indexOf(opt.value) > -1) {
        opt.selected = true;
      }
    }
  };

  // リストボックスの初期値をボクシングと砲丸投げに
  setListBoxValue('sports', ['ボクシング', '砲丸投げ']);

  // ファイルの情報を取得する
  var getFileProperty = function(name) {
    var result = '';
    var inputs = document.getElementById(name).files;
    for (var i = 0; i < inputs.length; i++) {
      result += inputs[i].name + '<br>';
      result += inputs[i].type + '<br>';
      result += inputs[i].size / 1024 + '<br>';
      result += inputs[i].lastModifiedDate + '<br>';
      result += '<br>';
    }
    var sliced = result.slice(0, -1);
    return sliced;
  };

  document.getElementById('file_btn').addEventListener('click', function() {
    var result = getFileProperty('file');
    document.getElementById('file_result').innerHTML = result;
  })

}, false);
