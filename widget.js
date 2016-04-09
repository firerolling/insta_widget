(function(){

'use strict';

// 目印のaタグからパラメータとってきたら消す
var atag = document.getElementById('insta_widget');
var image_url = atag[0].dataset.imageUrl;
var post_url = atag[0].dataset.postUrl;
atag[0].style.display = 'none';

var iframe = document.createElement('iframe');
iframe.scrolling = 'no';
iframe.frameBorder = 0;
iframe.marginWidth = 0;
iframe.marginHeight = 0;
iframe.width = '100%';
iframe.height = '180px';
iframe.width = '100%';
iframe.height = '100%';
iframe.id = 'gh-contributions-widget';

// atagの隣にiframeを挿入
atag[0].parentNode.insertBefore(iframe,atag[0]);

// widgetの中身（ここに後で中身を書いていきます）
var widget = '<div class="insta_box">';
widget += '<img src="'+image_url+'" alt="" />';
widget += '<a href="'+post_url+'" target="_blank">See on instagram</a>';
widget += '</div>';
widget += (function(){/*
div.insta_box {
width:200px;
height:300px;
padding: 10px;
}

div.insta_box img {
width: 190px;
}
*/}).toString().replace(/(\n)/g, '').split('/*')[1].split('*/')[0];


// iframeにウィジェットの内容
var doc = iframe.contentWindow.document;
doc.open();
doc.write(widget);
doc.close();

})();
