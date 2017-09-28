console.log('From Codemonkey Chrome Plugin.')

// 接收来自后台的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    console.log('收到来自 ' + (sender.tab ? "content-script(" + sender.tab.url + ")" : "popup或者background") + ' 的消息：', request);
    handler(request.cmd);
    sendResponse('我收到你的消息了：' + JSON.stringify(request));

});

// 处理方法
function handler(cmd, data) {

    if (cmd === ENUM.JJ_AUTO_TASK_1) {
        $("body").css({
            background: 'red'
        })
    }

}