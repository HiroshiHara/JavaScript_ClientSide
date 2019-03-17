'use strict'
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    var name = document.getElementById('name');
    console.log(name.value);
    var result = name.value + ' が入力されました';
    document.getElementById('name_result').textContent = result;
  }, false);
}, false);
