var oFileReader = new FileReader(); // 创建一个FileReader对象
var rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i; // 验证图片的正则
var oPreview = document.getElementsByClassName('goods_img')[0]; // 预览图
var oUpload = document.getElementsByClassName('file1')[0]; // 图片上传

oFileReader.onload = function (event) {
    oPreview.src = event.target.result; // 替换预览图的src
    alert('替换完成');
}

oUpload.onchange = function loadImgFile() {
    var oFile = oUpload.files[0];

    if (!rFilter.test(oFile.type)) {
        alert('必须上传图片文件！');
    }

    if (window.FileReader) {
        /*
        读取指定的Blob对象或File对象中的内容。
        当读取操作完成时，会自动尝试去调用onloadend事件。
        同时，result属性将包含一个data:URL表示读取的文件的内容。
         */
        oFileReader.readAsDataURL(oFile);
    } else if (navigator.appName === 'Microsoft Internet Explorer') { // IE浏览器
        // IE10以下版本不支持FileReader()构造函数，利用滤镜兼容旧版本的IE
        oPreview.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)';
        oPreview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = oUpload.value;
    }
}