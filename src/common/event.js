exports.remEvent = function () {
    let resizeEvent = function () {
        let widthClient =  document.body.clientWidth;
        document.documentElement.style.fontSize = widthClient > 750 ? '75px' : (Number(widthClient/10) + 'px');
    };
    resizeEvent();
    window.onresize = resizeEvent;
}