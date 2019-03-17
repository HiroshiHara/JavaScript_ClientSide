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
  }

  document.getElementById('radio_btn').addEventListener('click', function() {
    document.getElementById('radio_result').textContent = getRadioValue('city');
  }, false);
  
}, false);
