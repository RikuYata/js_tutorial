function dayName(date) {
    const daysOfTheWeek = ["日曜日", "月曜日", "火曜日", "水曜日",
        "木曜日", "金曜日", "土曜日"];
    return daysOfTheWeek[date.getDay()];
}
// 指定の日付の曜日を含むあいさつ文を返す
function greeting(date) {
    return `今日は${dayName(date)}です。`;
}