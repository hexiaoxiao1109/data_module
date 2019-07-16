function timekeeping(time) {

    // 如果不传参
    if(!time){
        throw time; //抛错
        return
    }

    // 计算距离点击时的时间
    //time是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
    function timeago(time) {   
        //把分，时，天，周，半个月，一个月用毫秒表示
        var minute = 1000 * 60;      
        var hour = minute * 60;
        var day = hour * 24;
        var week = day * 7;
        var month = day * 30;
        var now = new Date().getTime();   //获取当前时间-毫秒
        var time_diff = now - time;     //计算时间戳的差值

        if (time_diff < 0) {
            return;
        }
        var minC = time_diff / minute;  //计算时间差的分，时，天，周，月
        var hourC = time_diff / hour;
        var dayC = time_diff / day;
        var weekC = time_diff / week;
        var monthC = time_diff / month;
        if (monthC >= 1 && monthC <= 3) {
            result = " " + parseInt(monthC) + "月前"
        } else if (weekC >= 1 && weekC <= 3) {
            result = " " + parseInt(weekC) + "周前"
        } else if (dayC >= 1 && dayC <= 6) {
            result = " " + parseInt(dayC) + "天前"
        } else if (hourC >= 1 && hourC <= 23) {
            result = " " + parseInt(hourC) + "小时前"
        } else if (minC >= 1 && minC <= 59) {
            result = " " + parseInt(minC) + "分钟前"
        } else if (time_diff >= 0 && time_diff <= minute) {
            result = "刚刚"
        } 
        
        return result;
    }
}

module.exports  = {
    author:"hexiaoxiao",
    timekeeping:timekeeping
} 


