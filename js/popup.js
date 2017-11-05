//
$(function() {


    $("#btnJJAutoTask1").click(function(e) {
        sendMessageToContentScript({
            cmd: ENUM.JJ_AUTO_TASK_1,
            data: {}
        }, function(response) {
            console.log('done.')
        });
    });

    $("#btnLIUAutoTask1").click(function(e) {
        sendMessageToContentScript({
            cmd: ENUM.LIU_AUTO_TASK_1,
            data: {}
        }, function(response) {
            console.log('done.')
        });
    });

    
})





// 向content-script主动发送消息
function sendMessageToContentScript(message, callback) {
    getCurrentTabId((tabId) => {
        chrome.tabs.sendMessage(tabId, message, function(response) {
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