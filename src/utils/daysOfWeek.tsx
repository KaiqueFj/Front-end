import moment from "moment";

export function daysOfWeek() {
    //Return the date of days of week
    var currentDate = moment();
    var weekStart = currentDate.clone().startOf('week');

    var days = [];
    for (var i = 0; i <= 6; i++) {
        days.push(moment(weekStart).add(i, 'days').format("YYYY-MM-DD"));
    };

    return days;
}