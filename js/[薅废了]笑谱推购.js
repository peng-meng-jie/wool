//薅废了，耗时1小时
launch(getPackageName("笑谱推购"));
var sh = new Shell(true);
className("androidx.appcompat.app.ActionBar$Tab").clickable(true).selected(true).depth(12).waitFor();
for (i = 0; i < 330; i++) {
    toastLog("计数器：" + (i + 1));
    sleep(10 * 1000);
    swipe(500, 1600, 500, 250, 600);
}
sh.exec("am force-stop " + getPackageName("笑谱推购"));
sleep(1000);
sh.exit;
toastLog("【笑谱推购】已完成计划任务并退出APP！");
