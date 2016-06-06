/**
 * Created by Jan Karlsson on 2016-05-14.
 * DROP-project version 1.0
 */
$( document ).ready( function () {

    /**
     * A number is given as parameter. Any number lover then zero will be set to zero. Any number higher then
     * 255 will be set to 255. The hex-representation of the number will be returned as two hex-numbers, i.d.
     * two numbers in the range (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E). E.g. decToHexLogic(0) will
     * return "00", decToHexLogic(165) will return "A5" etc.
     * @param dec - a number.
     * @returns A string, two characters long, representing two hex-numbers.
     */
    var decToHexLogic = function (dec) {
        var con = dec,
            hexOne = 0,
            hexTwo = 0,
            hex = function () {};

        if (con < 0) { con = 0};
        if (con > 255) {con = 255};
        hexOne = Math.floor(con / 16);
        hexTwo = con - hexOne * 16;
        hex = function (num) {
            if (num === 10) {return "A"}
            else if (num === 11) {return "B"}
            else if (num === 12) {return "C"}
            else if (num === 13) {return "D"}
            else if (num === 14) {return "E"}
            else if (num === 15) {return "F"}
            else return (num).toString();
        };
        return hex(hexOne) + hex(hexTwo);
    };

    /**
     *
     */

    var setRedGreenBlueToBackgroundLogic = function () {
        var rgb = ($("body").css("background-color"));
        var p1 = rgb.indexOf("(");
        var p2 = rgb.indexOf(")");
        var c1 = rgb.indexOf(",");
        var c2 = rgb.lastIndexOf(",");
        var red = rgb.substr((p1 +1 ), (c1 - p1 - 1));
        var green = rgb.substr((c1 +1 ), (c2 - c1 - 1));
        var blue = rgb.substr((c2 +1 ), (p2 - c2 - 1));
        $("#backgroundRed").val(Number(red));
        $("#backgroundGreen").val(Number(green));
        $("#backgroundBlue").val(Number(blue));
    };

    var setBackgroundAtBackgroundDivLogic = function () {
        $("#backgroundDialog").css("background-color",
            "#" +
            central.f.decToHexLogic($("#backgroundRed").val()) +
            central.f.decToHexLogic($("#backgroundGreen").val()) +
            central.f.decToHexLogic($("#backgroundBlue").val())
        );
    };

    var setRedGreenBlueToWithinLimitsLogic = function () {
        if ($("#backgroundRed").val() < 0) {
            $("#backgroundRed").val(0);
        } else if ($("#backgroundRed").val() > 255) {
            $("#backgroundRed").val(255);
        }
        if ($("#backgroundGreen").val() < 0) {
            $("#backgroundGreen").val(0);
        } else if ($("#backgroundGreen").val() > 255) {
            $("#backgroundGreen").val(255);
        }
        if ($("#backgroundBlue").val() < 0) {
            $("#backgroundBlue").val(0);
        } else if ($("#backgroundBlue").val() > 255) {
            $("#backgroundBlue").val(255);
        }
    };

    /**
     * Function called first from btn-editPosts and then from editPostDialog. This is needed because more then
     * one row can be selected in the dataTable. editPostsLogic is called from btn-editPosts, editPostsLogic calls
     * editPostDialog that edit a post and then calls back to editPostsLogic that does some logical stuff and then
     * calls back editPostDialog again etc. The last call is from editPostDialog to editPostsLogic when the
     * "else"-option that cleans up some settings will be run.
     */
    var editPostsLogic = function () {
        if (central.v.editPostsIndex < central.v.editPostsNumberOf) {
            central.v.editPostsPresentPost = central.v.editPostsArr[central.v.editPostsIndex];
            central.v.editPostsIndex++;
            $("#editDatePicker").val(central.v.editPostsPresentPost.date);

            $("#editLocal option").filter(function() {
                return $(this).text() === central.v.editPostsPresentPost.local;
            }).prop("selected", true);

            $("#editTime option").filter(function() {
                return $(this).text() === central.v.editPostsPresentPost.time;
            }).prop("selected", true);

            $("#editPreC option").filter(function() {
                return $(this).text() === central.v.editPostsPresentPost.preC;
            }).prop("selected", true);

            $("#editPostC option").filter(function() {
                return $(this).text() === central.v.editPostsPresentPost.postC;
            }).prop("selected", true);

            $("#editComment").val(central.v.editPostsPresentPost.comment);

            $("#editPostsDialog").dialog("open");

        } else {
            central.v.selectedPosts = [];
            central.f.reloadTable();
            central.v.editPostsArr = [];
            central.v.editPostsPresentPost = {};
            central.v.editPostsNumberOf = 0;
            central.v.editPostsIndex = 0;
            central.f.addRemoveButtons();
            central.f.constructArrOfObjCalc();
            central.f.reloadCalcTable();
        }
    };

    /**
     * Functions associated with the addition of rooms, times and results starts here.
     * add???ArrLogic clears respective array (add???Arr) and then pushes every representative of that type
     * into it. E.g. addRoomArr will contain a list of one of every room that there is after addRoomArrLogic
     * has been run.
     */
    var addRoomArrLogic = function () {
        var result = "";
        central.v.addRoomArr = [];
        $(".newRoom").each(function () {
            result += $(this).text() + "\n";
            if ( central.v.addRoomArr.indexOf($(this).text()) === -1 ) {
                central.v.addRoomArr.push($(this).text());
            }
        });
        return result;
    };

    var addTimeArrLogic = function () {
        var result = "";
        central.v.addTimeArr = [];
        $(".newTime").each(function () {
            result += $(this).text() + "\n";
            if ( central.v.addTimeArr.indexOf($(this).text()) === -1 ) {
                central.v.addTimeArr.push($(this).text());
            }
        });
        return result;
    };

    var addPreCArrLogic = function () {
        var result = "";
        central.v.addPreCArr = [];
        $(".newPreC").each(function () {
            result += $(this).text() + "\n";
            if ( central.v.addPreCArr.indexOf($(this).text()) === -1 ) {
                central.v.addPreCArr.push($(this).text());
            }
        });
        return result;
    };

    var addPostCArrLogic = function () {
        var result = "";
        central.v.addPostCArr = [];
        $(".newPostC").each(function () {
            result += $(this).text() + "\n";
            if ( central.v.addPostCArr.indexOf($(this).text()) === -1 ) {
                central.v.addPostCArr.push($(this).text());
            }
        });
        return result;
    };

    /**
     * Closes all dropdown-menus if the mouse is clicked somewhere in the document.
     * (An event-handlers that's not attached to an object with a specific id or class.)
     */
    $(document).click(function() {
        if(!central.v.btnMenuFileHover && !central.v.dropMenuFileHover) {
            $("#dropMenuFile").hide();
        }
        if(!central.v.btnMenuEditHover && !central.v.dropMenuEditHover) {
            $("#dropMenuEdit").hide();
        }
        if(!central.v.btnMenuGraphHover && !central.v.dropMenuGraphHover) {
            $("#dropMenuGraph").hide();
        }
        if(!central.v.btnMenuCalcHover && !central.v.dropMenuCalcHover) {
            $("#dropMenuCalc").hide();
        }
        if(!central.v.btnMenuHelpHover && !central.v.dropMenuHelpHover) {
            $("#dropMenuHelp").hide();
        }
        if(!central.v.btnMenuQuitHover && !central.v.dropMenuQuitHover) {
            $("#dropMenuQuit").hide();
        }
    });

    /**
     * Rewrites the graph when the windows size is changed or when the window is clicked anywhere.
     */
    $(window).resize(function () {
        central.f.setGraphHeight();
        central.f.graph();
    }).click(function () {
        central.f.setGraphHeight();
        central.f.graph();
    });

    /**
     * Sets the height of the graph.
     */
    var setGraphHeight = function () {
        $("#graph").height(central.f.calculateGraphHeight());
    };

    /**
     * Calculates how high the graph can be, i.e. how much space there is left including some padding.
     * @returns {number} - remaining space that the graph can occupy.
     */
    var calculateGraphHeight = function () {
        var result = 0;
        if ($("#calcTable").is(":visible")) {
            result = $(window).height() - $("#calcTable").position().top - $("#calcTable").height() - 20;
        } else if ($("#dataTable").is(":visible")) {
            result = $(window).height() - $("#dataTable").position().top - $("#dataTable").height() - 20;
        } else {
            result = $(window).height() - $("#menuBar").position().top - 70;
        }
        return result;
    };

    /**
     * Saved settings are restored from local storage automatically on startup.
     */
    central.v.savedSettings =  JSON.parse(localStorage.getItem(central.v.savedSettingsJSONObject));
    if (central.v.savedSettings !== null) {
        if (central.v.savedSettings.theme ) {
            $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/" + central.v.savedSettings.theme + "/jquery-ui.min.css");
            $("#themeCss").attr("href", "../vendors/jquery-ui/themes/" + central.v.savedSettings.theme + "/theme.css");
        }
        if (central.v.savedSettings.background) {
            $("body").css("background-color", central.v.savedSettings.background);
        }
    }

    /**
     * Functions are added to central-object.
     */
    central.f.setRedGreenBlueToBackgroundLogic = setRedGreenBlueToBackgroundLogic;
    central.f.setBackgroundAtBackgroundDivLogic = setBackgroundAtBackgroundDivLogic;
    central.f.setRedGreenBlueToWithinLimitsLogic = setRedGreenBlueToWithinLimitsLogic;
    central.f.editPostsLogic = editPostsLogic;
    central.f.addRoomArrLogic = addRoomArrLogic;
    central.f.addTimeArrLogic = addTimeArrLogic;
    central.f.addPreCArrLogic = addPreCArrLogic;
    central.f.addPostCArrLogic = addPostCArrLogic;
    central.f.decToHexLogic = decToHexLogic;
    central.f.calculateGraphHeight = calculateGraphHeight;
    central.f.setGraphHeight = setGraphHeight;

});
