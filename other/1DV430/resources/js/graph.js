/**
 * Created by Jan Karlsson on 2016-05-22.
 * DROP-project version 1.0
 */

$( document).ready( function () {

    /**
     *
     * @param days - The number of days since midnight 01 January, 1970 UTC.
     * @returns {string} - Representing a date on form yyyy-mm-dd.
     */
    var daysToDate = function (days) {
        var dateObj = new Date(days * 24 * 3600 * 1000 + 2 * 3600 * 1000);
        var year = dateObj.getFullYear();
        var month = dateObj.getMonth() + 1;
        var day = dateObj.getDate();
        if (month < 10) {month = "0" + month}
        if (day < 10) {day = "0" + day}
        return year + "-" + month + "-" + day;
 //       return dateObj.getFullYear() + "-" + dateObj.getMonth() + "-" + dateObj.getDate();
    };

    /**
     * @param date - A date represented as yyyy-mm-dd, i.e. 2016-05-01.
     * @returns {number} - The number of days since midnight 01 January, 1970 UTC.
     */
    var dateToDays = function (date) {
        var dateObj = new Date(date.slice(0,4), date.slice(5, 7) - 1, date.slice(8));
        return Math.round((dateObj.valueOf() + 2 * 3600 * 1000)/ (24 * 3600 * 1000));
    };

    /**
     * @param date - A date represented as yyyy-mm-dd, i.e. 2016-05-01.
     * @returns {number} - The number of milliseconds since midnight 01 January, 1970 UTC.
     */
    var dateToMs = function (date) {
        var dateObj = new Date(date.slice(0,4), date.slice(5, 7) - 1, date.slice(8));
        return dateObj.valueOf() + 2 * 3600 * 1000;
    };

    /**
     * Intended use is to remake a local name (a room) that includes one or several spaces into a name that
     * can be used as a identifier.
     * @param text - a string.
     * @returns {string} - the parameter with any space removed.
     */
    var removeSpaceInString = function (text) {
        var result = "";
        for (var i = 0; i < text.length; i++) {
            if (text.charAt(i) !== " ") {
                result += text.charAt(i);
            } else {
            }
        }
        return result;
    };

    /**
     * The objects in (the array) tableData that has not already been copied to (the array) graphCopiedTableDataAn is
     * copied. graphObjArrArr is an object, each name is a local from tableData, i.e. a room, and each value is a
     * two dimensional array were each inner array represents a coordinate, the first number the x-coordinate and the
     * second the y-coordinate. Usually time is represented on the x-axis in milliseconds since midnight 01 January,
     * 1970 UTC.
     */
    var storeSortedData = function () {
        central.v.graphObjDatePreC = {};
        central.v.graphObjDatePostC = {};
        central.v.tableData.forEach(function (obj, index, array) {
            if (!central.v.graphObjDatePreC[obj.local]) {
                central.v.graphObjDatePreC[obj.local] = [[dateToMs(obj.date), obj.preC]];
            } else {
                central.v.graphObjDatePreC[obj.local].push([dateToMs(obj.date), obj.preC]);
            }
            if (!central.v.graphObjDatePostC[obj.local]) {
                central.v.graphObjDatePostC[obj.local] = [[dateToMs(obj.date), obj.postC]];
            } else {
                central.v.graphObjDatePostC[obj.local].push([dateToMs(obj.date), obj.postC]);
            }
            if (!central.v.calcObjDatePreCPostC[obj.local]) {
                central.v.calcObjDatePreCPostC[obj.local] = [[dateToMs(obj.date), obj.preC, obj.postC]];
            } else {
                central.v.calcObjDatePreCPostC[obj.local].push([dateToMs(obj.date), obj.preC, obj.postC]);
            }
        });

        central.v.graphArrKeys = Object.keys(central.v.graphObjDatePreC);
    };

    /**
     *
     */
    var eventGraphBtn = function (btn, key) {
        $("#" + btn).click(function () {
            central.v.graphSelectedLocal = key;
            $("#graph").show();
            central.f.graph();
            $("#dropMenuGraph").hide();
        });
    };

    var addRemoveButtons = function () {
        $(".graphBtnAdded").remove();   //All buttons under View/Graph are removed as are their listeners.
        central.v.graphStoredRooms = [];  //List with rooms are cleared.
        storeSortedData();
        var btnID = "",
            appendText = "";

        central.v.graphArrKeys.forEach(function(local,i,a) {
            if (central.v.graphStoredRooms.indexOf(local) === -1) {
                central.v.graphStoredRooms.push(local);
                btnID = "btn-graph-" + removeSpaceInString(local);
                appendText = "<li class=\"ui-menu-item graphBtnAdded\"><span class=\"\"></span><a id=\"" + btnID + "\">" + local + "</a></li>";
                $("#jQueryAppend1").append(appendText);
                eventGraphBtn(btnID, local);
            }
        });
    };

    /**
     *
     * @param data
     */
    var graph = function() {
        if ($("#graph").is(":visible")) {
            var dataSet = [
                    {
                        label: "Cleanliness after cleaning",
                        data: central.v.graphObjDatePostC[central.v.graphSelectedLocal]
                    },
                    {
                        label: "Cleanliness before cleaning",
                        data: central.v.graphObjDatePreC[central.v.graphSelectedLocal]
                    }
                ],
                options = {
                    yaxis: {
                        max: 100,
                        min: 0
                    },
                    series: {
                        bars: {show: true},
                        lines: {show: false},
                        points: {
                            show: true,
                            radius: 5,
                            fill: true,
                            fillColor: "#00FF00"
                        }
                    },
                    xaxis: {
                        mode: "time",
                        timeformat: "%y/%m/%d"
                    },
                    colors: ["#0000FF", "#FF0000"]
                };

            central.f.setGraphHeight();
            $.plot($("#graph"), dataSet, options);
        }
    };

    /**
     *
     * @type {Function}
     */
    central.f.graph = graph;
    central.f.daysToDate = daysToDate;
    central.f.dateToDays = dateToDays;
    central.f.dateToMs = dateToMs;
    central.f.storeSortedData = storeSortedData;
    central.f.addRemoveButtons = addRemoveButtons;
});