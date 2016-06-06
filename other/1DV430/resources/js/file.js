/**
 * Created by Jan Karlsson on 2016-04-09.
 */
$( document ).ready(function () {
    var saveFile = function () {
        if (central.v.tableData) {
            var data = JSON.stringify(central.v.tableData);
            var blob = new Blob([data], {
                type: "text/plain;charset=utf-8"
            });
            saveAs(blob, "save");
            central.v.unsavedDataExists = false;
        } else {
            alert("Content undefined. Nothing to save.");
        }
    };

    var readFile = function () {
        $("#hiddenInput").trigger("click").change(function (e) {
            central.v.functionwriteTableFileCalled = false;   //Used to solve a problem with unwanted multiply writings to tableData.
            var f = e.target.files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                var arr = JSON.parse(reader.result);
                central.f.writeTableFile(arr);
            };
            reader.readAsText(f);
        })
    };

    var writeTableFile = function (arr) {
        if (!central.v.functionwriteTableFileCalled) {
            central.v.functionwriteTableFileCalled = true;    //Used to solve a problem with unwanted multiply writings to tableData.
            for (var i = 0; i < arr.length; i++) {
                central.v.tableData.push(arr[i]);
            }
            central.f.reloadTable();
            central.v.dataExists = true;
            central.f.addRemoveButtons();
            central.f.graph();
            central.f.constructArrOfObjCalc();
            central.f.reloadCalcTable();
        }

    };

    central.f.saveFile = saveFile;
    central.f.readFile = readFile;
    central.f.writeTableFile = writeTableFile;
});



