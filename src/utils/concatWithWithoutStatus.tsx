import moment from "moment";
import { useState } from "react";
import { daysOfWeek } from "./daysOfWeek";
import { medicinesOnDay } from "./medicinesOnDay";

export function concatWithWithoutStatus(params) {
    const days = daysOfWeek();
    const withStatus = params.arrayOfStatusMedicines;
    const without = params.data;

    // Filter data of days week
    const handleData = []
    for (var i = 0; i < days.length; i++) {
        handleData.push(withStatus.filter((medicine) => moment(days[i]).isBetween(medicine.date, medicine.date, null, '[]')))
    }

    var data = []

    for (var i = 0; i < days.length; i++) {

        if(without[i].length <= 0){
            data.push([])
        }

        for (var j = 0; j < without[i].length; j++) {

            for (var k = 0; k < handleData[i].length; k++) {

                // Variables
                const status = handleData[i][k];
                const medicine = without[i][j];

                if (status.name === medicine.name && status.time === medicine.time){
                    without[i][j] = {};
                    without[i][j] = status;
                }
            }
        }
    }
    
    return without;
}