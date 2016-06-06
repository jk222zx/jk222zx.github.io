/**
 * Created by Jan Karlsson on 2016-04-30.
 * DROP-project version 1.0
 */

$( document ).ready(function () {

    /**
     * Dialogs opened from dropdown-menu "File".
     */
    $("#openFileDialog").dialog({
        draggable: false,
        resizable: false,
        width: 800,
        height: 230,
        modal: true,
        autoOpen: false,
        buttons: {
            "Cancel": function () {
                $(this).dialog("close");
            },
            "Replace": function () {
                central.cf.clearTable();
                central.v.unsavedDataExists = false;
                central.f.readFile();
                $(this).dialog("close");
            },
            "Append": function () {
                central.v.unsavedDataExists = true;
                central.f.readFile();
                $(this).dialog("close");
            }
        }
    });

    $("#saveFileDialog").dialog({
        draggable: false,
        resizable: false,
        width: 300,
        height: 200,
        modal: true,
        autoOpen: false,
        buttons: {
            "Close": function () {
                $(this).dialog("close");
            }
        }
    });

    $("#backgroundDialog").dialog({
        draggable: true,
        resizable: false,
        autoOpen: false,
        buttons: {
            "Close": function () {
                $(this).dialog("close");
            },
            "Execute": function () {
                if ($("#backgroundRed").val() < 0) { $("#backgroundRed").val(0); }
                if ($("#backgroundRed").val() > 255) { $("#backgroundRed").val(255); }
                if ($("#backgroundGreen").val() < 0) { $("#backgroundGreen").val(0); }
                if ($("#backgroundGreen").val() > 255) { $("#backgroundGreen").val(255); }
                if ($("#backgroundBlue").val() < 0) { $("#backgroundBlue").val(0); }
                if ($("#backgroundBlue").val() > 255) { $("#backgroundBlue").val(255); }
                var hexRed = central.f.decToHexLogic($("#backgroundRed").val());
                var hexGreen = central.f.decToHexLogic($("#backgroundGreen").val());
                var hexBlue = central.f.decToHexLogic($("#backgroundBlue").val());
                $("body").css("background-color", "#" + hexRed + hexGreen + hexBlue);
                $(this).dialog("close");
            }
        }
    });

    /**
     * Dialogs opened from dropdown-menu "Edit" in file gui.js starts here.
     *
     * Dialog opened from button "btn-newPost" in file gui.js.
     * Used to add a new post.
     */
    $("#newPostDialog").dialog({
        draggable: true,
        width: 400,
        height: 820,
        autoOpen: false,
        buttons: [
            {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                }
            },
            {
                text: "Execute",
                click: function () {
                    var data = {
                        "date": $("#newDatePicker").val(),
                        "local": $("#newLocal").val(),
                        "time": $("#newTime").val(),
                        "preC": $("#newPreC").val(),
                        "postC": $("#newPostC").val(),
                        "comment": $("#newComment").val(),
                        "commentExist": $("#newComment").val() !== ""
                    };
                    central.v.tableData.push(data);
                    central.f.reloadTable();
                    central.v.unsavedDataExists = true;
                    central.v.dataExists = true;
                    central.f.addRemoveButtons();
                    central.f.graph();
                    central.f.constructArrOfObjCalc();
                    central.f.reloadCalcTable();
                    $(this).dialog("close");
                }
            }
        ]
    });

    $("#newDatePicker").datepicker({
        showOn: "button",
        dateFormat: "yy-mm-dd"
    }).position({});

    /**
     * Dialog opened from button "btn-editPost" in file gui.js.
     * Used to change values in a post.
     */
    $("#editPostsDialog").dialog({
        draggable: true,
        resizable: true,
        width: 400,
        height: 820,
        modal: true,
        autoOpen: false,
        buttons: [
            {
                text: "Cancel",
                click: function () {
                    central.v.selectedPosts = [];
                    central.f.reloadTable();
                    $(this).dialog("close");
                }
            },
            {
                text: "Execute",
                click: function () {
                    central.v.editPostsPresentPost.date = $("#editDatePicker").val();
                    central.v.editPostsPresentPost.local = $("#editLocal").val();
                    central.v.editPostsPresentPost.time = $("#editTime").val();
                    central.v.editPostsPresentPost.preC = $("#editPreC").val();
                    central.v.editPostsPresentPost.postC = $("#editPostC").val();
                    central.v.editPostsPresentPost.comment = $("#editComment").val();
                    central.v.editPostsPresentPost.commentExist = $("#editComment").val() !== "";
                    central.v.unsavedDataExists = true;
                    $(this).dialog("close");
                    central.f.addRemoveButtons();
                    central.f.graph();
                    central.f.editPostsLogic();
                }
            }
        ]
    });

    $("#editDatePicker").datepicker({
        showOn: "button",
        dateFormat: "yy-mm-dd"
    }).position({});

    /**
     * Dialog opened from button "btn-deletePosts" in file gui.js.
     * Used to delete posts.
     */
    $("#deletePostsDialog").dialog({
        draggable: true,
        resizable: false,
        modal: true,
        autoOpen: false,
        buttons: {
            "Cancel": function () {
                $(this).dialog("close");
            },
            "Confirm Delete": function () {
                for (var i = 0; i < central.v.selectedPosts.length; i++) {
                    var post = central.v.selectedPosts[i];
                    var index = central.v.tableData.indexOf(post);
                    central.v.tableData.splice(index, 1);
                }
                central.v.selectedPosts = [];
                central.f.reloadTable();
                if(central.cf.numberOfPosts() === 0) {
                    central.v.dataExists = false;
                    central.v.unsavedDataExists = false;
                }
                central.f.addRemoveButtons();
                central.f.graph();
                central.f.constructArrOfObjCalc();
                central.f.reloadCalcTable();
                $(this).dialog("close");
            }
        }
    });

    /**
     * Dialog opened function central.functionAddRoomLogic() stored in file central.js, defined in file logic.js.
     * Used to add a room value to "dataTable".
     */
    $("#addRoomDialog").dialog({
        draggable: true,
        autoOpen: false,
        buttons: {
            "Cancel": function () {
                $(this).dialog("close");
            },
            "Execute": function () {
                if ($("#addRoomInput").val() && (central.v.addRoomArr.indexOf($("#addRoomInput").val()) === -1) ) {
                    $("#newLocal").append("<option class=\"newRoom\">" + $("#addRoomInput").val() + "</option>");
                    $("#editLocal").append("<option class=\"editRoom\">" + $("#addRoomInput").val() + "</option>");
                } else {
                    $("#infoDialog").dialog("option", "title", "Value already in list.");
                    $("#infoDialogText").html("The room is already in the room list. No room added.");
                    $("#infoDialog").dialog("open");
                }
                $(this).dialog("close");
                $("#addRoomInput").val("");
            }
        }
    });

    /**
     * Dialog opened function central.functionAddTimeLogic() stored in file central.js, defined in file logic.js.
     * Used to add a time value to "dataTable".
     */
    $("#addTimeDialog").dialog({
        draggable: true,
        autoOpen: false,
        buttons: {
            "Cancel": function () {
                $(this).dialog("close");
            },
            "Execute": function () {
                if ($("#addTimeInput").val() && (central.v.addTimeArr.indexOf($("#addTimeInput").val()) === -1) ) {
                    $("#newTime").append("<option class=\"newTime\">" + $("#addTimeInput").val() + "</option>");
                    $("#editTime").append("<option class=\"editTime\">" + $("#addTimeInput").val() + "</option>");
                } else {
                    $("#infoDialog").dialog("option", "title", "Value already in list.");
                    $("#infoDialogText").html("The time value is already in the time list. No value added.");
                    $("#infoDialog").dialog("open");
                }
                $(this).dialog("close");
                $("#addTimeInput").val("");
            }
        }
    });

    /**
     * Dialog opened function central.functionAddPreCLogic() stored in file central.js, defined in file logic.js.
     * Used to add a preC value to "dataTable".
     */
    $("#addPreCDialog").dialog({
        draggable: true,
        autoOpen: false,
        buttons: {
            "Cancel": function () {
                $(this).dialog("close");
            },
            "Execute": function () {
                if ($("#addPreCInput").val() && (central.v.addPreCArr.indexOf($("#addPreCInput").val()) === -1) ) {
                    $("#newPreC").append("<option class=\"newPreC\">" + $("#addPreCInput").val() + "</option>");
                    $("#editPreC").append("<option class=\"editPreC\">" + $("#addPreCInput").val() + "</option>");
                } else {
                    $("#infoDialog").dialog("option", "title", "Value already in list.");
                    $("#infoDialogText").html("The cleanliness before is already in the list. No value added.");
                    $("#infoDialog").dialog("open");
                }
                $(this).dialog("close");
                $("#addPreCInput").val("");
            }
        }
    });

    /**
     * Dialog opened function central.functionAddPostCLogic() stored in file central.js, defined in file logic.js.
     * Used to add a postC value to "dataTable".
     */
    $("#addPostCDialog").dialog({
        draggable: true,
        autoOpen: false,
        buttons: {
            "Cancel": function () {
                $(this).dialog("close");
            },
            "Execute": function () {
                if ($("#addPostCInput").val() && (central.v.addPostCArr.indexOf($("#addPostCInput").val()) === -1) ) {
                    $("#newPostC").append("<option class=\"newPostC\">" + $("#addPostCInput").val() + "</option>");
                    $("#editPostC").append("<option class=\"editPostC\">" + $("#addPostCInput").val() + "</option>");
                } else {
                    $("#infoDialog").dialog("option", "title", "Value already in list.");
                    $("#infoDialogText").html("The cleanliness after is already in the list. No value added.");
                    $("#infoDialog").dialog("open");
                }
                $(this).dialog("close");
                $("#addPostCInput").val("");
            }
        }
    });

    $("#removeRoomDialog").dialog({
        draggable: true,
        autoOpen: false,
        buttons: {
            "Cancel": function () {
                $(this).dialog("close");
            },
            "Execute": function () {
                var val = $("#removeRoomInput").val();
                if (val) {
                    $(".newRoom").remove(":contains("+ val +")");
                    $(".editRoom").remove(":contains("+ val +")");
                }
                $(this).dialog("close");
            }
        }
    });

    $("#removeTimeDialog").dialog({
        draggable: true,
        autoOpen: false,
        buttons: {
            "Cancel": function () {
                $(this).dialog("close");
            },
            "Execute": function () {
                var val = $("#removeTimeInput").val();
                if (val) {
                    $(".newTime").remove(":contains("+ val +")");
                    $(".editTime").remove(":contains("+ val +")");
                }
                $(this).dialog("close");
            }
        }
    });

    $("#removePreCDialog").dialog({
        draggable: true,
        autoOpen: false,
        buttons: {
            "Cancel": function () {
                $(this).dialog("close");
            },
            "Execute": function () {
                var val = $("#removePreCInput").val();
                if (val) {
                    $(".newPreC").remove(":contains("+ val +")");
                    $(".editPreC").remove(":contains("+ val +")");
                }
                $(this).dialog("close");
            }
        }
    });

    $("#removePostCDialog").dialog({
        draggable: true,
        autoOpen: false,
        buttons: {
            "Cancel": function () {
                $(this).dialog("close");
            },
            "Execute": function () {
                var val = $("#removePostCInput").val();
                if (val) {
                    $(".newPostC").remove(":contains("+ val +")");
                    $(".editPostC").remove(":contains("+ val +")");
                }
                $(this).dialog("close");
            }
        }
    });

    /**
     * Dialogs opened from dropdown-menu "Graph".
     */

    /**
     * Dialogs opened from dropdown-menu "Calc".
     */

    /**
     * Dialogs opened from dropdown-menu "Quit".
     */

    $("#quitDialog1").dialog({
        draggable: false,
        resizable: false,
        modal: true,
        autoOpen: false,
        buttons: {
            "Cancel": function () {
                $(this).dialog("close");
            },
            "Confirm Exit": function () {
                if (central.v.unsavedDataExists) {
                    $("#quitDialog2").dialog("open");
                    $(this).dialog("close");
                } else {
                    window.close();
                }
            }
        }
    });

    $("#quitDialogFirefox").dialog({
        draggable: false,
        resizable: false,
        modal: true,
        autoOpen: false,
        buttons: {
            "Back": function () {
                $(this).dialog("close");
            }
        }
    });

    $("#quitDialog2").dialog({
        draggable: false,
        resizable: false,
        modal: true,
        autoOpen: false,
        buttons: {
            "No": function () {
                $(this).dialog("close");
            },
            "Yes": function () {
                window.close();
            }
        }
    });

    /**
     * Other dialogs.
     */

    $("#infoDialog").dialog({
        draggable: false,
        resizable: false,
        modal: true,
        autoOpen: false,
        buttons: {
            "Close": function () {
                $(this).dialog("close");
            }
        }
    });

});