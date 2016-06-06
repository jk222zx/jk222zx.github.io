/**
 * Created by Jan Karlsson on 2016-04-21.
 * DROP-project version 1.0
 */

$( document ).ready(function() {

    /**
     * Menu button and dropdown-menu "File".
     */
    var initBtnMenuFile = function () {
        $("#btnMenuFile").button({
            icons: {
                primary: ""
            }
        }).position({
            my: "left top",
            at: "left top",
            of: "#menuBar",
            collision: "none"
        }).click(function () {
            $("#dropMenuFile").toggle();
        }).mouseleave(function () {
            central.v.btnMenuFileHover = false;
            central.f.dropMenuFileSetTimeout();
        }).mouseenter(function () {
            central.v.btnMenuFileHover = true;
            central.f.dropMenuFileClearTimeout();
        });
    };

    var initDropMenuFile = function () {
        $("#dropMenuFile").menu({}).position({
            my: "left top",
            at: "left bottom",
            of: "#btnMenuFile",
            collision: "none"
        }).mouseleave(function () {
            central.v.dropMenuFileHover = false;
            central.f.dropMenuFileSetTimeout();
        }).mouseenter(function () {
            central.v.dropMenuFileHover = true;
            central.f.dropMenuFileClearTimeout();
        }).hide().zIndex(1);
    };

    /**
     * Menu button and dropdown-menu "Edit".
     */
    var initBtnMenuEdit = function () {
        $("#btnMenuEdit").button({
            icons: {
                primary: ""
            }
        }).position({
            my: "left top",
            at: "right+5 top",
            of: "#btnMenuFile",
            collision: "none"
        }).click(function () {
            $("#dropMenuEdit").toggle();
        }).mouseleave(function () {
            central.v.btnMenuEditHover = false;
            central.f.dropMenuEditSetTimeout();
        }).mouseenter(function () {
            central.v.btnMenuEditHover = true;
            central.f.dropMenuEditClearTimeout();
        });
    };

    var initDropMenuEdit = function () {
        $("#dropMenuEdit").menu({}).position({
            my: "left top",
            at: "left bottom",
            of: "#btnMenuEdit",
            collision: "none"
        }).mouseleave(function () {
            central.v.dropMenuEditHover = false;
            central.f.dropMenuEditSetTimeout();
        }).mouseenter(function () {
            central.v.dropMenuEditHover = true;
            central.f.dropMenuEditClearTimeout();
        }).hide().zIndex(1);
    };

    /**
     *
     */
    var initBtnMenuCalc = function () {
        $("#btnMenuCalc").button({
            icons: {
                primary: ""
            }
        }).position({
            my: "left top",
            at: "right+5 top",
            of: "#btnMenuEdit",
            collision: "none"
        }).click(function () {
            $("#dropMenuCalc").toggle();
        }).mouseleave(function () {
            central.v.btnMenuCalcHover = false;
            central.cf.dropMenuCalcSetTimeout();
        }).mouseenter(function () {
            central.v.btnMenuCalcHover = true;
            central.cf.dropMenuCalcClearTimeout();
        });
    };

    var initDropMenuCalc = function () {
        $("#dropMenuCalc").menu({}).position({
            my: "left top",
            at: "left bottom",
            of: "#btnMenuCalc",
            collision: "none"
        }).mouseleave(function () {
            central.v.dropMenuCalcHover = false;
            central.cf.dropMenuCalcSetTimeout();
        }).mouseenter(function () {
            central.v.dropMenuCalcHover = true;
            central.cf.dropMenuCalcClearTimeout();
        }).hide().zIndex(1);
    };

    /**
     * Menu button and dropdown-menu "Graph".
     */
    var initBtnMenuGraph = function () {
        $("#btnMenuGraph").button({
            icons: {
                primary: ""
            }
        }).position({
            my: "left top",
            at: "right+5 top",
            of: "#btnMenuCalc",
            collision: "none"
        }).click(function () {
            $("#dropMenuGraph").toggle();
        }).mouseleave(function () {
            central.v.btnMenuGraphHover = false;
            central.cf.dropMenuGraphSetTimeout();
        }).mouseenter(function () {
            central.v.btnMenuGraphHover = true;
            central.cf.dropMenuGraphClearTimeout();
        });
    };

    var initDropMenuGraph = function () {
        $("#dropMenuGraph").menu({}).position({
            my: "left top",
            at: "left bottom",
            of: "#btnMenuGraph",
            collision: "none"
        }).mouseleave(function () {
            central.v.dropMenuGraphHover = false;
            central.cf.dropMenuGraphSetTimeout();
        }).mouseenter(function () {
            central.v.dropMenuGraphHover = true;
            central.cf.dropMenuGraphClearTimeout();
        }).hide().zIndex(1);
    };

    /**
     * Menu button and dropdown-menu "Help".
     */
    var initBtnMenuHelp = function () {
        $("#btnMenuHelp").button({
            icons: {
                primary: ""
            }
        }).position({
            my: "left top",
            at: "right+5 top",
            of: "#btnMenuGraph",
            collision: "none"
        }).click(function () {
            $("#dropMenuHelp").toggle();
        }).mouseleave(function () {
            central.v.btnMenuHelpHover = false;
            central.cf.dropMenuHelpSetTimeout();
        }).mouseenter(function () {
            central.v.btnMenuHelpHover = true;
            central.cf.dropMenuHelpClearTimeout();
        });
    };

    var initDropMenuHelp = function () {
        $("#dropMenuHelp").menu({}).position({
            my: "left top",
            at: "left bottom",
            of: "#btnMenuHelp",
            collision: "none"
        }).mouseleave(function () {
            central.v.dropMenuHelpHover = false;
            central.cf.dropMenuHelpSetTimeout();
        }).mouseenter(function () {
            central.v.dropMenuHelpHover = true;
            central.cf.dropMenuHelpClearTimeout();
        }).hide().zIndex(1);
    };

    /**
     * Menu button and dropdown-menu "Quit".
     */
    var initBtnMenuQuit = function () {
        $("#btnMenuQuit").button({
            icons: {
                primary: ""
            }
        }).position({
            my: "left top",
            at: "right+5 top",
            of: "#btnMenuHelp",
            collision: "none"
        }).click(function () {
            $("#dropMenuQuit").toggle();
        }).mouseleave(function () {
            central.v.btnMenuQuitHover = false;
            central.cf.dropMenuQuitSetTimeout();
        }).mouseenter(function () {
            central.v.btnMenuQuitHover = true;
            central.cf.dropMenuQuitClearTimeout();
        });
    };

    var initDropMenuQuit = function () {
        $("#dropMenuQuit").menu({}).position({
            my: "left top",
            at: "left bottom",
            of: "#btnMenuQuit",
            collision: "none"
        }).mouseleave(function () {
            central.v.dropMenuQuitHover = false;
            central.cf.dropMenuQuitSetTimeout();
        }).mouseenter(function () {
            central.v.dropMenuQuitHover = true;
            central.cf.dropMenuQuitClearTimeout();
        }).hide().zIndex(1);
    };

    /**
     * Datatable and function for reloading the datatable.
     * The delay is for solving a problem where the datatable was loaded before the object it was positioned
     * against.
     */
    var initDataTable = function () {
        $("#dataTable").puidatatable({
            caption: "Data.",
            scrollable: true,
            //paginator: { //Doesn't work together with scrollable: true.
            //    rows: central.v.dateTableNumberRows
            //},
            scrollHeight: "500",
//            scrollWidth: "100%",
            columns: [
                {field: "date", headerText: "Date", sortable: true},
                {field: "local", headerText: "Room", sortable: true},
                {field: "time", headerText: "Time", editor: "input", sortable: true},
                {field: "preC", headerText: "Cleanliness before (%)", sortable: true},
                {field: "postC", headerText: "Cleanliness after (%)", sortable: true},
                {rowToggler: true, bodyStyle: "width:18px", headerStyle: "width:18px"},
                {field: "commentExist", headerText: "Comment exist?", sortable: true}
            ],
            datasource: central.v.tableData,
            selectionMode: "multiple",
            rowSelect: function(event, data) {
                if (central.v.dataExists) {
                    central.v.selectedPosts.push(data);
                }
            },
            rowUnselect: function(event, data) {
                central.v.selectedPosts.splice(central.v.selectedPosts.indexOf(data),1);
            },
            expandableRows: true,
            rowExpandMode: "single",
            expandedRowContent: function(expandedRow) {
                return expandedRow.comment;
            }
        }).position( {
            my: "left top",
            at: "left bottom+5",
            of: "#menuBar"
        });

        var reloadTable = function () {
            $("#dataTable").puidatatable("reload");
        };

        central.f.reloadTable = reloadTable;
    };

    /**
     * Calctable and function for reloading calctable.
     */
    var initCalcTable = function () {
        $("#calcTable").puidatatable({
            caption: "Calculated dates when cleaning should be done to achieve respective percentage cleanliness goal.",
            columns: [
                {field: "local", headerText: "Room", sortable: true},
                {field: "p100", headerText: "100 %", editor: "input", sortable: true},
                {field: "p90", headerText: "90 %", editor: "input", sortable: true},
                {field: "p80", headerText: "80 %", editor: "input", sortable: true},
                {field: "p70", headerText: "70 %", editor: "input", sortable: true},
                {field: "p60", headerText: "60 %", editor: "input", sortable: true},
                {field: "p50", headerText: "50 %", editor: "input", sortable: true},
                {field: "p40", headerText: "40 %", editor: "input", sortable: true},
                {field: "p30", headerText: "30 %", editor: "input", sortable: true},
                {field: "p20", headerText: "20 %", editor: "input", sortable: true},
                {field: "p10", headerText: "10 %", editor: "input", sortable: true},
                {field: "p00", headerText: "0 %", editor: "input", sortable: true}
            ],
            datasource: central.v.calcData,
            paginator: {
                rows: 10
            },
            expandableRows: true,
            rowExpandMode: "single",
            expandedRowContent: function(expandedRow) {
                return expandedRow.comment;
            }
        }).position( {
            my: "left top",
            at: "left bottom+5",
            of: "#dataTable"
        });

        var reloadCalcTable = function () {
            $("#calcTable").puidatatable("reload");
        };

        central.f.reloadCalcTable = reloadCalcTable;
    };

    /**
     * Graph - position data etc.
     */
    var initGraph = function () {
        $("#graph").position({
            my: "left top",
            at: "left bottom+5",
            of: "#calcTable"
        }).hide().height(central.f.calculateGraphHeight());
    };

    /**
     * Menubuttons for "File"-menu.
    */
    $("#btn-open").click(function () {
        if (central.v.dataExists) {
            $("#openFileDialog").dialog("open");
            $("#dropMenuFile").hide();
        } else {
            central.f.readFile();
            $("#dropMenuFile").hide();
        }
    });

    $("#btn-save").click(function () {
        if (central.v.dataExists) {
            $("#dropMenuFile").hide();
            central.f.saveFile();
        } else {
            $("#dropMenuFile").hide();
            $("#saveFileDialog").dialog("open");
        }
    });

    $("#btn-base").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/base/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/base/theme.css");
    });

    $("#btn-black-tie").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/black-tie/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/black-tie/theme.css");
    });

    $("#btn-blitzer").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/blitzer/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/blitzer/theme.css");
    });

    $("#btn-cupertino").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/cupertino/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/cupertino/theme.css");
    });

    $("#btn-dark-hive").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/dark-hive/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/dark-hive/theme.css");
    });

    $("#btn-dot-luv").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/dot-luv/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/dot-luv/theme.css");
    });

    $("#btn-eggplant").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/eggplant/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/eggplant/theme.css");
    });

    $("#btn-excite-bike").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/excite-bike/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/excite-bike/theme.css");
    });

    $("#btn-flick").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/flick/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/flick/theme.css");
    });

    $("#btn-hot-sneaks").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/hot-sneaks/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/hot-sneaks/theme.css");
    });

    $("#btn-humanity").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/humanity/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/humanity/theme.css");
    });

    $("#btn-le-frog").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/le-frog/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/le-frog/theme.css");
    });

    $("#btn-mint-choc").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/mint-choc/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/mint-choc/theme.css");
    });

    $("#btn-overcast").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/overcast/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/overcast/theme.css");
    });

    $("#btn-pepper-grinder").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/pepper-grinder/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/pepper-grinder/theme.css");
    });

    $("#btn-redmond").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/redmond/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/redmond/theme.css");
    });

    $("#btn-smoothness").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/smoothness/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/smoothness/theme.css");
    });

    $("#btn-south-street").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/south-street/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/south-street/theme.css");
    });

    $("#btn-start").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/start/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/start/theme.css");
    });

    $("#btn-sunny").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/sunny/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/sunny/theme.css");
    });

    $("#btn-swanky-purse").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/swanky-purse/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/swanky-purse/theme.css");
    });

    $("#btn-trontastic").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/trontastic/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/trontastic/theme.css");
    });

    $("#btn-ui-darkness").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/ui-darkness/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/ui-darkness/theme.css");
    });

    $("#btn-ui-lightness").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/ui-lightness/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/ui-lightness/theme.css");
    });

    $("#btn-vader").click(function() {
        $("#uiMinCss").attr("href", "../vendors/jquery-ui/themes/vader/jquery-ui.min.css");
        $("#themeCss").attr("href", "../vendors/jquery-ui/themes/vader/theme.css");
        $("#dropMenuFile").hide();
    });

    $("#btn-background").click(function () {
        $("#backgroundDialog").dialog("open");
        central.f.setRedGreenBlueToBackgroundLogic();
        central.f.setBackgroundAtBackgroundDivLogic();
        $("#dropMenuFile").hide();
    });

    $("#backgroundRed").change(function() {
        central.f.setBackgroundAtBackgroundDivLogic();
        central.f.setRedGreenBlueToWithinLimitsLogic();
    });

    $("#backgroundGreen").change(function() {
        central.f.setBackgroundAtBackgroundDivLogic();
        central.f.setRedGreenBlueToWithinLimitsLogic();
    });

    $("#backgroundBlue").change(function() {
        central.f.setBackgroundAtBackgroundDivLogic();
        central.f.setRedGreenBlueToWithinLimitsLogic();
    });

    $("#btn-restoreDefault").click(function () {
        $("#uiMinCss").attr("href", central.v.uiMinCss);
        $("#themeCss").attr("href", central.v.themeCss);
        $("body").css("background-color", central.v.body);
        $("#dropMenuFile").hide();
    });

    $("#btn-restoreSettings").click(function () {
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
        $("#dropMenuFile").hide();
    });

    $("#btn-saveSettings").click(function () {
        var themeStart = $("#uiMinCss").attr("href").indexOf("themes/") + 7,
            themeEnd = $("#uiMinCss").attr("href").indexOf("/jquery-ui.min.css"),
            theme = $("#uiMinCss").attr("href").substring(themeStart, themeEnd),
            background = $("body").css("background-color");
        central.v.savedSettings = {};
        central.v.savedSettings.theme = theme;
        central.v.savedSettings.background = background;
        localStorage.setItem(central.v.savedSettingsJSONObject, JSON.stringify(central.v.savedSettings));
        $("#dropMenuFile").hide();
    });

    $("#btn-clearSettings").click(function () {
        localStorage.removeItem(central.v.savedSettingsJSONObject);
        $("#dropMenuFile").hide();
    });

    /**
     * Menubuttons for "Edit"-menu.
     */
    $("#btn-newPost").click(function() {
        $("#newPostDialog").dialog("open");
        $("#dropMenuEdit").hide();
    });

    $("#btn-editPosts").click(function() {
        if (central.v.selectedPosts.length > 0 && central.v.dataExists) {
            central.v.editPostsArr = central.v.selectedPosts.slice();       //Must be setup before logic-function
            central.v.editPostsNumberOf = central.v.editPostsArr.length;    //Must be setup before logic-function
            central.v.editPostsIndex = 0;                                 //Must be setup before logic-function
            central.f.editPostsLogic();
            $("#dropMenuEdit").hide();
        } else {
            $("#dropMenuEdit").hide();
            if (central.v.dataExists) {
                $("#infoDialog").dialog("option", "title", "No posts selected.");
                $("#infoDialogText").html("No posts are selected. (Click on a post to select it.)");
            } else {
                $("#infoDialog").dialog("option", "title", "No posts.");
                $("#infoDialogText").html("There are no posts.");
            }
            central.v.selectedPosts = [];
            central.f.reloadTable();
            $("#infoDialog").dialog("open");
        }
    });

    $("#btn-deletePosts").click(function() {
        if (central.v.selectedPosts.length > 0 && central.v.dataExists) {
            $("#deletePostsDialogText").html("Selected posts will be deleted. Press cancel to cancel.");
            $("#deletePostsDialog").dialog("open");
        } else {
            if (central.v.dataExists) {
                $("#infoDialog").dialog("option", "title", "No posts selected.");
                $("#infoDialogText").html("No posts are selected.");
            } else {
                $("#infoDialog").dialog("option", "title", "No posts.");
                $("#infoDialogText").html("There are no posts.");
            }
            $("#dropMenuEdit").hide();
            $("#infoDialog").dialog("open");
        }
    });

/*  Set number of rows doesn't work at the moment. The dataTable seem to ignore the changed value.
    var setNumberOfRows = function (num) {
        central.v.dateTableNumberRows = num;
        central.f.reloadTable();
        $("#dropMenuEdit").hide();
    };

    $("#btn-10rows").click(function() {
        setNumberOfRows(10);
    });

    $("#btn-20rows").click(function() {
        setNumberOfRows(20);
    });

    $("#btn-30rows").click(function() {
        setNumberOfRows(30);
    });

    $("#btn-40rows").click(function() {
        setNumberOfRows(40);
    });
*/
    $("#btn-addRoom").click(function() {
        var text = "";
        $(".newRoom").each(function () {
            text = text + $(this).text() + "\n";
        });
        central.f.addRoomArrLogic();
        $("#addRoomDialogTextArea").html(text);
        $("#addRoomInput").focus();
        $("#addRoomDialog").dialog("open");
        $("#dropMenuEdit").hide();
    });

    $("#btn-addTime").click(function() {
        var text = "";
        $(".newTime").each(function () {
            text = text + $(this).text() + "\n";
        });
        central.f.addTimeArrLogic();
        $("#addTimeDialogTextArea").html(text);
        $("#addTimeInput").focus();
        $("#addTimeDialog").dialog("open");
        $("#dropMenuEdit").hide();
    });

    $("#btn-addPreC").click(function() {
        var text = "";
        $(".newPreC").each(function () {
            text = text + $(this).text() + "\n";
        });
        central.f.addPreCArrLogic();
        $("#addPreCDialogTextArea").html(text);
        $("#addPreCInput").focus();
        $("#addPreCDialog").dialog("open");
        $("#dropMenuEdit").hide();
    });

    $("#btn-addPostC").click(function() {
        var text = "";
        $(".newPostC").each(function () {
            text = text + $(this).text() + "\n";
        });
        central.f.addPostCArrLogic();
        $("#addPostCDialogTextArea").html(text);
        $("#addPostCInput").focus();
        $("#addPostCDialog").dialog("open");
        $("#dropMenuEdit").hide();
    });

    $("#btn-removeRoom").click(function() {
        var text = central.f.addRoomArrLogic();
        $("#removeRoomInput").empty().focus();
        central.v.addRoomArr.forEach(function(v,i,a) {
            $("#removeRoomInput").append("<option class=\"removeRoom\">" + v + "</option>");
        });
        $("#removeRoomDialogTextArea").html(text);
        $("#removeRoomDialog").dialog("open");
        $("#dropMenuEdit").hide();
    });

    $("#btn-removeTime").click(function() {
        var text = central.f.addTimeArrLogic();
        $("#removeTimeInput").empty().focus();
        central.v.addTimeArr.forEach(function(v,i,a) {
            $("#removeTimeInput").append("<option class=\"removeTime\">" + v + "</option>");
        });
        $("#removeTimeDialogTextArea").html(text);
        $("#removeTimeDialog").dialog("open");
        $("#dropMenuEdit").hide();
    });

    $("#btn-removePreC").click(function() {
        var text = central.f.addPreCArrLogic();
        $("#removePreCInput").empty().focus();
        central.v.addPreCArr.forEach(function(v,i,a) {
            $("#removePreCInput").append("<option class=\"removePreC\">" + v + "</option>");
        });
        $("#removePreCDialogTextArea").html(text);
        $("#removePreCDialog").dialog("open");
        $("#dropMenuEdit").hide();
    });

    $("#btn-removePostC").click(function() {
        var text = central.f.addPostCArrLogic();
        $("#removePostCInput").empty().focus();
        central.v.addPostCArr.forEach(function(v,i,a) {
            $("#removePostCInput").append("<option class=\"removePostC\">" + v + "</option>");
        });
        $("#removePostCDialogTextArea").html(text);
        $("#removePostCDialog").dialog("open");
        $("#dropMenuEdit").hide();
    });

    $("#btn-restorePosts").click(function () {
        central.v.savedPosts =  JSON.parse(localStorage.getItem(central.v.savedPostsJSONObject));
        if (central.v.savedPosts !== null) {
            central.f.addRoomArrLogic();
            central.v.savedPosts.room.forEach(function(v,i,a) {
                if ( central.v.addRoomArr.indexOf(v) === -1 ) {
                    $("#newLocal").append("<option class=\"newRoom\">" + v + "</option>");
                    $("#editLocal").append("<option class=\"editRoom\">" + v + "</option>");
                }
            });
            central.f.addTimeArrLogic();
            central.v.savedPosts.time.forEach(function(v,i,a) {
                if ( central.v.addTimeArr.indexOf(v) === -1 ) {
                    $("#newTime").append("<option class=\"newTime\">" + v + "</option>");
                    $("#editTime").append("<option class=\"editTime\">" + v + "</option>");
                }
            });
            central.f.addPreCArrLogic();
            central.v.savedPosts.preC.forEach(function(v,i,a) {
                if ( central.v.addPreCArr.indexOf(v) === -1 ) {
                    $("#newPreC").append("<option class=\"newPreC\">" + v + "</option>");
                    $("#editPreC").append("<option class=\"editPreC\">" + v + "</option>");
                }
            });
            central.f.addPostCArrLogic();
            central.v.savedPosts.postC.forEach(function(v,i,a) {
                if ( central.v.addPostCArr.indexOf(v) === -1 ) {
                    $("#newPostC").append("<option class=\"newPostC\">" + v + "</option>");
                    $("#editPostC").append("<option class=\"editPostC\">" + v + "</option>");
                }
            });
        }
        $("#dropMenuEdit").hide();
    });

    $("#btn-savePosts").click(function () {
        central.v.savedPosts = {};
        central.f.addRoomArrLogic();
        central.f.addTimeArrLogic();
        central.f.addPreCArrLogic();
        central.f.addPostCArrLogic();
        central.v.savedPosts.room = central.v.addRoomArr;
        central.v.savedPosts.time = central.v.addTimeArr;
        central.v.savedPosts.preC = central.v.addPreCArr;
        central.v.savedPosts.postC = central.v.addPostCArr;
        localStorage.setItem(central.v.savedPostsJSONObject, JSON.stringify(central.v.savedPosts));
        $("#dropMenuEdit").hide();
    });

    $("#btn-clearPosts").click(function () {
        localStorage.removeItem(central.v.savedPostsJSONObject);
        $("#dropMenuEdit").hide();
    });

    $("#btn-data-SH").click(function() {
        $("#dataTable").toggle();
        $("#dropMenuEdit").hide();
    });

    /**
     * Menubuttons for "Graph"-menu.
     */
    $("#btn-graphs").click(function() {
    });

    $("#btn-graph-SH").click(function() {
        if ((central.v.dataExists && central.v.graphSelectedLocal) || $("#graph").is(":visible")) {
            $("#graph").toggle();
            central.f.graph();
        } else if (central.v.dataExists) {
            $("#infoDialog").dialog("option", "title", "No graph selected.");
            $("#infoDialogText").html("Choose a graph.");
            $("#infoDialog").dialog("open");
        } else {
            $("#infoDialog").dialog("option", "title", "No posts.");
            $("#infoDialogText").html("There are no posts, i.e. there is nothing to draw a graph from.");
            $("#infoDialog").dialog("open");
        }
        $("#dropMenuGraph").hide();
    });

    /**
     * Menubuttons for "Calc"-menu.
     */
    $("#btn-calc-SH").click(function() {
        $("#calcTable").toggle();
        $("#dropMenuCalc").hide();
    });

    /**
     * Menubuttons for "Help"-menu.
     */
     $("")

    /**
     * Menubuttons for "Quit"-menu.
     */
    $("#btn-quit").click(function() {
        if (is.not.firefox()) {
            if (central.v.unsavedDataExists) {
                $("#quitDialog1Text").html("Unsaved data exists!");
            } else {
                $("#quitDialog1Text").html("There are no unsaved data. You can safely quit.");
            }
            $("#quitDialog1").dialog("open");
        } else {
            if (central.v.unsavedDataExists) {
                $("#quitDialogFirefox").html("Unsaved data exists! Since the browser is" +
                    " Firefox you have to close the window the ordinary way.");
            } else {
                $("#quitDialogFirefox").html("There are no unsaved data, you can safely quit. Since the browser" +
                    " is Firefox you have to close the window the ordinary way.");
            }
            $("#quitDialogFirefox").dialog("open");
        }
    });


    /**
     * The different elements in the GUI are initialized with a small delay. This is because in some cases
     * elements has been misplaced when an element that the misplaced element should have been positioned relative
     * to wasn't initialized first.
     */
    var initMajorComponentsInGui = function () {
        var delay = setTimeout(function () {
            initBtnMenuFile();
        }, 0);
        var delay = setTimeout(function () {
            initBtnMenuEdit();
        }, 5);
        var delay = setTimeout(function () {
            initBtnMenuCalc();
        }, 10);
        var delay = setTimeout(function () {
            initBtnMenuGraph();
        }, 15);
        var delay = setTimeout(function () {
            initBtnMenuHelp();
        }, 20);
        var delay = setTimeout(function () {
            initBtnMenuQuit();
        }, 25);
        var delay = setTimeout(function () {
            initDataTable();
        }, 250);
        var delay = setTimeout(function () {
            initCalcTable();
        }, 255);
        var delay = setTimeout(function () {
            initGraph();
        }, 260);
        var delay = setTimeout(function () {
            initDropMenuFile();
        }, 150);
        var delay = setTimeout(function () {
            initDropMenuEdit();
        }, 155);
        var delay = setTimeout(function () {
            initDropMenuCalc();
        }, 160);
        var delay = setTimeout(function () {
            initDropMenuGraph();
        }, 165);
        var delay = setTimeout(function () {
            initDropMenuHelp();
        }, 170);
        var delay = setTimeout(function () {
            initDropMenuQuit();
        }, 175);
    };

    central.f.initMajorComponentsInGui = initMajorComponentsInGui;

    central.f.initMajorComponentsInGui();
});
