/**
 * Created by Jan Karlsson on 2016-05-29.
 * DROP-project version 1.0
 */

$( document).ready( function () {

    /**
     * central.v.objRoomSortedArr will contain an object with room-names for names and as value an array of all
     * members in tableData with that "local"-value. E.g. if tableData contains the following:
     * [ {local:room1, x:1}, {local:room1, x:2}, {local:room2, x:1} ] then objRoomSortedArr will contain:
     * { room1:[ {local:room1, x:1}, {local:room1, x:2} ], room2:[ {local:room2, x:1} ] } after execution of the
     * function.
     * It also set objRoomSortedArr_Keys to the keys of objRoomSortedArr.
     */
    var setupDataCalc = function () {
        central.v.objRoomSortedArr = {};
        //En empty array for each room-type in tableData is created in objRoomSortedArr.
        central.v.tableData.forEach(function(obj,i,a) {
            central.v.objRoomSortedArr[obj.local] = [];
        });
        //Every object in tableData with a certain room-type is pushed to the corresponding array.
        central.v.tableData.forEach(function(obj,i,a) {
            central.v.objRoomSortedArr[obj.local].push(obj);
        });

        central.v.objRoomSortedArr_Keys = Object.keys(central.v.objRoomSortedArr);

        central.v.objRoomSortedArr_Keys.forEach(function(room,i,a) {
            central.v.objRoomSortedArr[room].sort(function(a, b) {
                return central.f.dateToMs(a.date) - central.f.dateToMs(b.date);
            });
        });
    };

    var calculateCleaningDaysCalc = function () {
        var postCMin = 0,
            dateMin = 0,
            postCMax = 0,
            preCMax = 0,
            dateMax = 0,
            maxIndex = 0,
            derivative = 0,
            plusDays = 0;

        central.f.setupDataCalc();
        central.v.objRoomSortedArr_Keys.forEach(function(room,i,a) {
            central.v.cleaningDays[room] = null;
            maxIndex = central.v.objRoomSortedArr[room].length - 1;
            if (maxIndex >= 1) {
                postCMin = central.v.objRoomSortedArr[room][maxIndex - 1].postC;
                dateMin = central.v.objRoomSortedArr[room][maxIndex - 1].date;
                postCMax = central.v.objRoomSortedArr[room][maxIndex].postC;
                preCMax = central.v.objRoomSortedArr[room][maxIndex].preC;
                dateMax = central.v.objRoomSortedArr[room][maxIndex].date;
                central.v.cleaningDays[room] = [];
                if (Number(postCMin) > Number(preCMax)) {
                    derivative = (preCMax - postCMin) / (central.f.dateToDays(dateMax) - central.f.dateToDays(dateMin));
                    for(var i = 0; i <= 10; i++) {
                        plusDays = Math.floor( (i * 10 - postCMax) / derivative );
                        if (plusDays >= 0) {
                            central.v.cleaningDays[room][i] = (central.f.daysToDate(central.f.dateToDays(dateMax) + plusDays));
                        } else {
                            central.v.cleaningDays[room][i] = "NA";
                        }
                    }
                } else {
                    for(var i = 0; i <= 10; i++) {
                        central.v.cleaningDays[room][i] = "NA";
                    }
                }
            }
        });
    };

    var constructArrOfObjCalc = function () {
        central.v.calcData.splice(0);
        central.f.calculateCleaningDaysCalc();
        central.v.objRoomSortedArr_Keys.forEach(function(room,i,a) {
            if (central.v.cleaningDays[room]) {
                var data = {
                    "local": room,
                    "p100": central.v.cleaningDays[room][10],
                    "p90": central.v.cleaningDays[room][9],
                    "p80": central.v.cleaningDays[room][8],
                    "p70": central.v.cleaningDays[room][7],
                    "p60": central.v.cleaningDays[room][6],
                    "p50": central.v.cleaningDays[room][5],
                    "p40": central.v.cleaningDays[room][4],
                    "p30": central.v.cleaningDays[room][3],
                    "p20": central.v.cleaningDays[room][2],
                    "p10": central.v.cleaningDays[room][1],
                    "p00": central.v.cleaningDays[room][0]
                };
                central.v.calcData.push(data);
            }
        });
    };

    central.f.setupDataCalc = setupDataCalc;
    central.f.calculateCleaningDaysCalc = calculateCleaningDaysCalc;
    central.f.constructArrOfObjCalc = constructArrOfObjCalc;
});