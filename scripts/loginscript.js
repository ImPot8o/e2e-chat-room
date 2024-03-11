document.addEventListener('contextmenu', event => event.preventDefault());
const removeIframesButton = document.querySelector('#remove-iframes');

removeIframesButton.addEventListener('click', function() {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(function(iframe) {
    iframe.remove();
  });
  removeIframesButton.style.visibility = "hidden"
});

function validateForm() {
  // Get the entered username and password
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the username and password match the correct credentials
  if ((username === "admin" && password === "secret") || (username === "" && password === "")) {
    // Create and append the loading page iframe
    const loadingiframe = document.createElement("iframe");
    loadingiframe.src = "../pages/loadingscreen.html";
    loadingiframe.sandbox = "allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts   allow-modals";
    loadingiframe.scrolling = "yes";
    loadingiframe.allowtransparency = "true";
    loadingiframe.allowfullscreen = "true";
    loadingiframe.width = "100%";
    loadingiframe.height = "100%";
    loadingiframe.frameborder = "0";
    loadingiframe.style.position = "absolute";
    loadingiframe.style.top = "0";
    loadingiframe.style.right = "0";
    loadingiframe.style.bottom = "0";
    loadingiframe.style.left = "0";
    loadingiframe.style.outline = "none";
    loadingiframe.style.overflow = "hidden";
    loadingiframe.style.border = "0";
    document.body.appendChild(loadingiframe);
    document.getElementById("loginForm").reset();
    setTimeout(function() {
      // Create and append the home page iframe
      const aiframe = document.createElement("iframe");
      aiframe.src = "../pages/passpages/home.html";
      aiframe.sandbox = "allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts   allow-modals";
      aiframe.scrolling = "yes";
      aiframe.allowtransparency = "true";
      aiframe.allowfullscreen = "true";
      aiframe.width = "100%";
      aiframe.height = "100%";
      aiframe.frameborder = "0";
      aiframe.style.position = "absolute";
      aiframe.style.top = "0";
      aiframe.style.right = "0";
      aiframe.style.bottom = "0";
      aiframe.style.left = "0";
      aiframe.style.outline = "none";
      aiframe.style.overflow = "hidden";
      aiframe.style.border = "0";
      document.body.appendChild(aiframe);
      removeIframesButton.style.visibility = "visible";
    }, 2000);
    // Prevent the form from being submitted
    return false;
  } else if (username === "test" && password === "test") {
    // Create and append the loading page iframe
    const loadingiframe = document.createElement("iframe");
    loadingiframe.src = "../pages/loadingscreen.html";
    loadingiframe.sandbox = "allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts   allow-modals";
    loadingiframe.scrolling = "yes";
    loadingiframe.allowtransparency = "true";
    loadingiframe.allowfullscreen = "true";
    loadingiframe.width = "100%";
    loadingiframe.height = "100%";
    loadingiframe.frameborder = "0";
    loadingiframe.style.position = "absolute";
    loadingiframe.style.top = "0";
    loadingiframe.style.right = "0";
    loadingiframe.style.bottom = "0";
    loadingiframe.style.left = "0";
    loadingiframe.style.outline = "none";
    loadingiframe.style.overflow = "hidden";
    loadingiframe.style.border = "0";
    document.body.appendChild(loadingiframe);
    setTimeout(function() {
      // Create and append the concept page iframe
      const tiframe = document.createElement("iframe");
      tiframe.src = "../pages/conceptpage.html";
      tiframe.sandbox = "allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts   allow-modals";
      tiframe.scrolling = "yes";
      tiframe.allowtransparency = "true";
      tiframe.allowfullscreen = "true";
      tiframe.width = "100%";
      tiframe.height = "100%";
      tiframe.frameborder = "0";
      tiframe.style.position = "absolute";
      tiframe.style.top = "0";
      tiframe.style.right = "0";
      tiframe.style.bottom = "0";
      tiframe.style.left = "0";
      tiframe.style.outline = "none";
      tiframe.style.overflow = "hidden";
      tiframe.style.border = "0";
      document.body.appendChild(tiframe);
    }, 2000);
    // Prevent the form from being submitted
    return false;
  } else {
    // Show an error message
    alert("Invalid username or password");

    // Prevent the form from being submitted
    return false;
  }
}
// canary web clone notifier
function _0x5a86(_0xb4951, _0xcad53b) { var _0x180fc5 = _0x180f(); return _0x5a86 = function(_0x5a8649, _0x54d560) { _0x5a8649 = _0x5a8649 - 0xb8; var _0x4378c4 = _0x180fc5[_0x5a8649]; if (_0x5a86['clBIxv'] === undefined) { var _0x986e68 = function(_0x2b8fd7) { var _0x540e3c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='; var _0x4545d3 = '', _0x17c6cf = ''; for (var _0x217ebc = 0x0, _0x206784, _0x530bb4, _0x12b97f = 0x0; _0x530bb4 = _0x2b8fd7['charAt'](_0x12b97f++); ~_0x530bb4 && (_0x206784 = _0x217ebc % 0x4 ? _0x206784 * 0x40 + _0x530bb4 : _0x530bb4, _0x217ebc++ % 0x4) ? _0x4545d3 += String['fromCharCode'](0xff & _0x206784 >> (-0x2 * _0x217ebc & 0x6)) : 0x0) { _0x530bb4 = _0x540e3c['indexOf'](_0x530bb4); } for (var _0x3945f6 = 0x0, _0x362fa7 = _0x4545d3['length']; _0x3945f6 < _0x362fa7; _0x3945f6++) { _0x17c6cf += '%' + ('00' + _0x4545d3['charCodeAt'](_0x3945f6)['toString'](0x10))['slice'](-0x2); } return decodeURIComponent(_0x17c6cf); }; _0x5a86['AXgHxb'] = _0x986e68, _0xb4951 = arguments, _0x5a86['clBIxv'] = !![]; } var _0x4fd657 = _0x180fc5[0x0], _0x314e19 = _0x5a8649 + _0x4fd657, _0x22e242 = _0xb4951[_0x314e19]; return !_0x22e242 ? (_0x4378c4 = _0x5a86['AXgHxb'](_0x4378c4), _0xb4951[_0x314e19] = _0x4378c4) : _0x4378c4 = _0x22e242, _0x4378c4; }, _0x5a86(_0xb4951, _0xcad53b); } var _0x56e20e = _0x5a86; (function(_0x47ec2e, _0x1c565e) { var _0x8610c = { _0x502406: 0xe7, _0x2d2d8e: 0xce, _0x17a2ff: 0xd4, _0x124774: 0xc9, _0x1bccdd: 0xcb, _0x4726b2: 0xd5, _0xeae88d: 0xbe }, _0x43fc7a = _0x5a86, _0x36ead8 = _0x47ec2e(); while (!![]) { try { var _0x1b56de = parseInt(_0x43fc7a(0xc7)) / 0x1 + parseInt(_0x43fc7a(0xb8)) / 0x2 * (parseInt(_0x43fc7a(_0x8610c._0x502406)) / 0x3) + -parseInt(_0x43fc7a(0xe2)) / 0x4 * (parseInt(_0x43fc7a(0xd9)) / 0x5) + -parseInt(_0x43fc7a(_0x8610c._0x2d2d8e)) / 0x6 * (parseInt(_0x43fc7a(_0x8610c._0x17a2ff)) / 0x7) + -parseInt(_0x43fc7a(_0x8610c._0x124774)) / 0x8 + parseInt(_0x43fc7a(_0x8610c._0x1bccdd)) / 0x9 * (parseInt(_0x43fc7a(_0x8610c._0x4726b2)) / 0xa) + -parseInt(_0x43fc7a(0xe3)) / 0xb * (parseInt(_0x43fc7a(_0x8610c._0xeae88d)) / 0xc); if (_0x1b56de === _0x1c565e) break; else _0x36ead8['push'](_0x36ead8['shift']()); } catch (_0x33b0d8) { _0x36ead8['push'](_0x36ead8['shift']()); } } }(_0x180f, 0x7cc4d)); function _0x180f() { var _0xb61a25 = ['CZ9Spq', 'DhnxAq', 'mJK5mJHore1VqNC', 'zMLJlW', 'DZj1DG', 'Ew1LBG', 'B20Vyq', 'Dg9Rzq', 'ndi3rwvICwHZ', 'mtq5mfzfq1LQrW', 'D3D3lG', 'BgvZlW', 'jNi9', 'mZi2nvDQs3jfAa', 'CNjLCG', 'ChjVDa', 'v2L0Aa', 'Cs9Wyq', 'C3jJ', 'AhjLzG', 'Ag9ZDa', 'lY9Jyq', 'mZe0meHtsuTHrq', 'mZq0nZa3wgT5yuTX', 'yY54Eq', 'EMnJna', 'BNmUyW', 'ndyYnZa4sfHKBuvh', 'DhjHzG', 'BMfYEq', 'CZjOyG', 'BM10zG', 'mw1KDG', 'nLDAEe1mCW', 'BgvJBq', 'EwDODq', 'lND3DW', 'CMvMzq', 'DgLVBG', 'mtmYChrJtuPL', 'CNrPyW', 'C3rHCG', 'zw5KCW', 'DhmUAG', 'BwmUEa', 'lMXLyW', 'Bg9Jyq', 'Ahr0Ca', 'nZC5nJeYwKXnr2rW', 'B2nVBa', 'mJyYmtiWmffsvLLptq', 'BMfTzq', 'ndu3odnJDvDty08']; _0x180f = function() { return _0xb61a25; }; return _0x180f(); } if (window[_0x56e20e(0xc5) + _0x56e20e(0xbd)][_0x56e20e(0xe0) + _0x56e20e(0xca)] != _0x56e20e(0xd6) + _0x56e20e(0xb9) + _0x56e20e(0xe4) + 'z' && !window[_0x56e20e(0xc5) + _0x56e20e(0xbd)][_0x56e20e(0xe0) + _0x56e20e(0xca)][_0x56e20e(0xc1) + _0x56e20e(0xdc)](_0x56e20e(0xbb) + _0x56e20e(0xc4) + _0x56e20e(0xc3) + 'yz')) { var p = !document[_0x56e20e(0xc5) + _0x56e20e(0xbd)][_0x56e20e(0xdb) + _0x56e20e(0xc8)][_0x56e20e(0xc0) + _0x56e20e(0xcd) + 'th'](_0x56e20e(0xc6)) ? _0x56e20e(0xc6) + ':' : document[_0x56e20e(0xc5) + _0x56e20e(0xbd)][_0x56e20e(0xdb) + _0x56e20e(0xc8)], l = location[_0x56e20e(0xdf)], r = document[_0x56e20e(0xbc) + _0x56e20e(0xda)], m = new Image(); m[_0x56e20e(0xde)] = p + (_0x56e20e(0xe1) + _0x56e20e(0xe9) + _0x56e20e(0xd3) + _0x56e20e(0xe6) + _0x56e20e(0xd2) + _0x56e20e(0xbf) + _0x56e20e(0xd7) + _0x56e20e(0xe8) + _0x56e20e(0xcf) + _0x56e20e(0xea) + _0x56e20e(0xd0) + _0x56e20e(0xba) + _0x56e20e(0xeb) + _0x56e20e(0xec) + _0x56e20e(0xe5) + _0x56e20e(0xdd) + _0x56e20e(0xd1) + _0x56e20e(0xc2) + _0x56e20e(0xcc)) + encodeURI(l) + _0x56e20e(0xd8) + encodeURI(r); }