/*test.js*/

(function () {
  var test = function (ele) {
    alert(ele.innerText);
  };
  var h1Tag = document.querySelector('h1');
  test(h1Tag);
})();
