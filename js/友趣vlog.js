//耗时40分钟
//开启脚本后点开微信小程序“友趣vlog”
id("d9").waitFor();
sleep(4000);
toastLog("start");
for (i = 1; i < 285; i++) {
    if (i % 6 != 0) {
        toastLog("计数器：" + i);
        sleep(4000);
        Tap(999, 900);
        sleep(5000);
        swipe(800, 1200, 800, 386, 500);
    } else {
        sleep(2000);
        swipe(800, 1200, 800, 386, 500);
    }

}
