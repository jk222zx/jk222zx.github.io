/**
 * Created by Jan Karlsson on 2016-05-01.
 * DROP-project version 1.0
 */
var central = {
    f : {
        initMajorComponentsInGui : function () {},
        saveFile : function () {},
        readFile : function () {},
        writeTableFile : function () {},
        addRoomArrLogic : function () {},
        addTimeArrLogic : function () {},
        addPreCArrLogic : function () {},
        addPostCArrLogic : function () {},
        setupDataCalc : function () {},
        calculateCleaningDaysCalc : function () {},
        constructArrOfObjCalc : function () {},
        reloadTable : function () {},
        setRedGreenBlueToBackgroundLogic : function () {},
        setBackgroundAtBackgroundDivLogic : function () {},
        setRedGreenBlueToWithinLimitsLogic : function () {},
        editPostsLogic : function () {},
        decToHexLogic : function () {},
        graph : function () {},
        calculateGraphHeight : function () {},
        setGraphHeight : function () {},
        daysToDate : function () {},
        dateToDays : function () {},
        dateToMs : function () {},
        storeSortedData : function () {},
        addRemoveButtons : function () {},
    },
    cf : {
        dropMenuFileSetTimeout : function () {
            central.v.dropMenuFileTimeout = setTimeout(function(){
                if(!central.v.btnMenuFileHover && !central.v.dropMenuFileHover) {
                    $("#dropMenuFile").hide(500);
                }
            }, 1500);
        },
        dropMenuFileClearTimeout : function () {
            clearTimeout(central.v.dropMenuFileTimeout);
        },
        dropMenuEditSetTimeout : function () {
            central.v.dropMenuEditTimeout = setTimeout(function(){
                if(!central.v.btnMenuEditHover && !central.v.dropMenuEditHover) {
                    $("#dropMenuEdit").hide(500);
                }
            }, 1500);
        },
        dropMenuEditClearTimeout : function () {
            clearTimeout(central.v.dropMenuEditTimeout);
        },
        dropMenuGraphSetTimeout : function () {
            central.v.dropMenuGraphTimeout = setTimeout(function(){
                if(!central.v.btnMenuGraphHover && !central.v.dropMenuGraphHover) {
                    $("#dropMenuGraph").hide(500);
                }
            }, 1500);
        },
        dropMenuGraphClearTimeout : function () {
            clearTimeout(central.v.dropMenuGraphTimeout);
        },
        dropMenuCalcSetTimeout : function () {
            central.v.dropMenuCalcTimeout = setTimeout(function(){
                if(!central.v.btnMenuCalcHover && !central.v.dropMenuCalcHover) {
                    $("#dropMenuCalc").hide(500);
                }
            }, 1500);
        },
        dropMenuCalcClearTimeout : function () {
            clearTimeout(central.v.dropMenuCalcTimeout);
        },
        dropMenuHelpSetTimeout : function () {
            central.v.dropMenuHelpTimeout = setTimeout(function(){
                if(!central.v.btnMenuHelpHover && !central.v.dropMenuHelpHover) {
                    $("#dropMenuHelp").hide(500);
                }
            }, 1500);
        },
        dropMenuHelpClearTimeout : function () {
            clearTimeout(central.v.dropMenuHelpTimeout);
        },
        dropMenuQuitSetTimeout : function () {
            central.v.dropMenuQuitTimeout = setTimeout(function(){
                if(!central.v.btnMenuQuitHover && !central.v.dropMenuQuitHover) {
                    $("#dropMenuQuit").hide(500);
                }
            }, 1500);
        },
        dropMenuQuitClearTimeout : function () {
            clearTimeout(central.v.dropMenuQuitTimeout);
        },
        clearTable : function () {
            while (central.v.tableData.pop()) {}
        },
        numberOfPosts : function () {
            return central.v.tableData.length;
        }
    },
    v : {
        dropMenuFileTimeout : null,
        dropMenuEditTimeout : null,
        dropMenuGraphTimeout : null,
        dropMenuCalcTimeout : null,
        dropMenuHelpTimeout : null,
        dropMenuQuitTimeout : null,
        dropMenuFileHover : false,
        dropMenuEditHover : false,
        dropMenuGraphHover : false,
        dropMenuCalcHover : false,
        dropMenuHelpHover : false,
        dropMenuQuitHover : false,
        addRoomArr : [],
        addTimeArr : [],
        addPreCArr : [],
        addPostCArr : [],
        objRoomSortedArr : {},
        objRoomSortedArr_Keys : [],
        cleaningDays : {},
        tableData : [],
        calcData : [],
        dateTableNumberRows : 20,
        selectedPosts : [],
        selectedRows : [],
        savedSettingsJSONObject : "DROP_savedSettings",
        savedSettings : {},
        savedPostsJSONObject : "DROP_savedPosts",
        savedPosts : {},
        defaultTheme : "le-frog",
        defaultBackground : "#32C832",
        unsavedDataExists : false,
        dataExists : false,                     //
        functionWriteTableFileCalled : false, //An (ugly) fix to solve a problem with unwanted multiply writings to
        // tableData.
        editPostsPresentPost : {},
        editPostsPresentRow : null,
        editPostsNumberOf : 0,
        editPostsIndex : 0,
        btnMenuFileClicked : false,
        btnMenuEditClicked : false,
        btnMenuGraphClicked : false,
        btnMenuCalcClicked : false,
        btnMenuHelpClicked : false,
        btnMenuQuitClicked : false,
        btnMenuFileHover : false,
        btnMenuEditHover : false,
        btnMenuGraphHover : false,
        btnMenuCalcHover : false,
        btnMenuHelpHover : false,
        btnMenuQuitHover : false,
        graphArrKeys : [],
        graphObjDatePreC : {},
        graphObjDatePostC : {},
        graphStoredRooms : [],
        graphSelectedLocal : "",
        calcObjDatePreCPostC : {}
    }
};
