var now = new Date();

function createtime() {
    now.setTime(now.getTime() + 1e3); // 更新当前时间为一秒后，模拟实时更新

    var startDate = new Date("2025-01-01T00:00:00"); // 使用 ISO 格式确保日期解析的准确性
    var elapsedSeconds = Math.trunc((now - startDate) / 1e3); // 计算已经过去的秒数
    
    var voyagerDistance = 234e8 + elapsedSeconds * 17; // 假设旅行者1号以每秒增加17千米的速度远离地球
    var au = (voyagerDistance / 1496e5).toFixed(6); // 将距离转换为天文单位
    
    var days = Math.floor(elapsedSeconds / (60 * 60 * 24)); // 已经过了多少天
    var hours = Math.floor((elapsedSeconds % (60 * 60 * 24)) / (60 * 60)); // 已经过了多少小时
    var minutes = Math.floor((elapsedSeconds % (60 * 60)) / 60); // 已经过了多少分钟
    var seconds = elapsedSeconds % 60; // 已经过了多少秒
    
    // 确保小时、分钟、秒数始终显示两位数
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    var boardSign;
    if (hours >= 9 && hours < 18) { // 如果当前时间在上午9点到下午6点之间
        boardSign = `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br>`;
    } else {
        boardSign = `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br>`;
    }

    var displayText = `${boardSign}<div style="font-size:13px;font-weight:bold">本站居然运行了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${voyagerDistance} 千米，约为 ${au} 个天文单位 🚀</div>`;

    if (document.getElementById("workboard")) {
        document.getElementById("workboard").innerHTML = displayText;
    }
}

// 每秒更新一次
setInterval(() => {
    createtime();
}, 1000);