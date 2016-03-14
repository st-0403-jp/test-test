/*test.js*/

(function () {
  var test = function (ele) {
    console.log("h1タグの中身は：" + ele.innerText);
  };
  var h1Tag = document.querySelector('h1');
  test(h1Tag);
})();
