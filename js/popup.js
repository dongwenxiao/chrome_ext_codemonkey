$(function() {

    $("#title").text("xxxx")

    $("#btnSetBackgroundColor").click(function(e) {
        console.log(0)
            // sendMessageToContentScript('你好，我是xxxxxxx！', (response) => {
            //     if (response) alert('收到来自content-script的回复：' + response);
            // });

        // sendMessageToContentScript({ cmd: 'update_font_size', size: 42 }, function(response) {});
        sendMessageToContentScript({
            cmd: ENUM.JJ_AUTO_TASK_1,
            data: {}
        }, function(response) {
            $("#ll").text('success')
        });
    });
})





// 向content-script主动发送消息
function sendMessageToContentScript(message, callback) {
    console.log(1)
    getCurrentTabId((tabId) => {
        console.log(2)
        chrome.tabs.sendMessage(tabId, message, function(response) {
            console.log(3)
            console.log(response)
            if (callback) callback(response);
        });
    });
}

// 获取当前选项卡ID
function getCurrentTabId(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (callback) callback(tabs.length ? tabs[0].id : null);
    });
}