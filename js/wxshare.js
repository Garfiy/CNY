//背景音乐
var bgm = new Bgm({
    src: location.href.split(/\w+.html/)[0] + 'music/bgm.mp3?v=1',
    x: 30,
});

/** 获取摇一摇权限 */
function getShark() {
    if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission().then(permissionState => {
            if (permissionState === 'granted') {
                console.log('shark granted');
            } else if (permissionState === 'denied') { // 打开的链接不是https开头
                // alert("当前IOS系统拒绝访问动作与方向。请退出微信，重新进入活动页面获取权限。");
                console.log('shark denied');
            }
        }).catch((error) => {
            console.log('shark error');
            // alert("请求设备方向或动作访问需要用户手势来提示");
        })
    }
}

function playBgm() {
    document.body.removeEventListener('click', playBgm);
    if (bgm.musicAudio.paused) {
        bgm.play();
    }
    getShark();
}
document.body.addEventListener('click', playBgm);
//背景音乐

window.wechatShareData = {
    "imgUrl": 'https://cduravit.trisanet.com/CNY/img/share_icon.jpg',
    "link": location.href,
    "desc": '"浴”见新年',
    "title": '2021年我竟然走这运！你也快来抽支新年签吧，牛年特牛！'
};

window.wechat_share = function () {};
if (/MicroMessenger/i.test(navigator.userAgent)) {
    $.ajax({
        url: 'https://duravit.trisanet.com/share_new/wxauth/',
        type: 'GET',
        dataType: 'json',
        success(res) {
            res.jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage', ]
            wx.config(res);

            wx.ready(function () {

                window.wechat_share = function (shareData) {

                    var data = shareData ? shareData : window.wechatShareData;
                    // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容 updateAppMessageShareData
                    console.log(data.imgUrl)
                    wx.onMenuShareTimeline({
                        title: data.title,
                        desc: data.desc,
                        link: data.link,
                        imgUrl: data.imgUrl,
                        success: function () {

                        }
                    });

                    // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内 updateTimelineShareData
                    wx.onMenuShareAppMessage({
                        title: data.title,
                        desc: data.desc,
                        link: data.link,
                        imgUrl: data.imgUrl,
                        success: function () {}
                    });
                };

                window.wechat_share();

                playBgm();
            });
        },
        error(err) {
            console.log(err);
        }
    })

}