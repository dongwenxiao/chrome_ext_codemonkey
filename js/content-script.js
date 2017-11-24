console.log('From Codemonkey Chrome Plugin.')

// 接收来自后台的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    console.log('收到来自 ' + (sender.tab ? "content-script(" + sender.tab.url + ")" : "popup或者background") + ' 的消息：', request);
    handler(request.cmd);
    sendResponse('我收到你的消息了：' + JSON.stringify(request));

});

// 处理方法
async function handler(cmd, data) {

    if (cmd === ENUM.JJ_AUTO_TASK_1) {
        // $("body").css({
        //     background: 'red'
        // })

        var number = $("#zhaimenNum1").html();

        JJ_AUTO_TASK_1(number)
    }

    if (cmd === ENUM.JJ_AUTO_TASK_2) {
        // $("body").css({
        //     background: 'red'
        // })

        var number2 = $("#zhaimenNum1").html();

        JJ_AUTO_TASK_2(number2)
    }

    if (cmd === ENUM.LIU_AUTO_TASK_1) {
        // $("body").css({
        //     background: 'red'
        // })

        var number1 = $("#zhaimenNum1").html();

        LIU_AUTO_TASK_1(number1)
    }

    if (cmd === ENUM.CM_ARTICLES_RANK_10) {

        await getLinks()

    }

}


