/**
 * @author Sandaru Kithshan <skithshan93@gmail.com> (github.com/Sandaru293)
 * @since 10/18/2021
 */


$("#btnSaveProduct").click(function () {

    var form = $("#formProduct").serialize();

    $.ajax({
        url: 'product',
        method: 'post',
        async: true,
        data: form,

        success: function (data) {
            console.log(data);
        }
    });
});

$("#btnUpdateProduct").click(function () {

    let proName = $("#proName").val();
    let proType = $("#proType").val();
    let size = $("#size").val();
    let price = $("#price").val();

    $.ajax({
        url: 'product',
        method: 'put',
        async: true,
        contentType: "application/json",
        data: JSON.stringify({
            proName: proName,
            proType: proType,
            size: size,
            price: price
        }),
        success: function (data, responseState, xhr) {
            console.log(data);
        }
    });
});

// loadAllCustomers();
//
// function loadAllCustomers() {
//     $("#tblProduct").empty();
//     $.ajax({
//         url: 'product',
//         method: 'get',
//         async: true,
//         dataType: "json",
//         success: function (data, textState, xhr) {
//
//             for (let cus of data) {
//                 var row = `<tr><td>${cus.proName}</td><td>${cus.proType}</td><td>${cus.size}</td><td>${cus.price}</td></tr>`;
//                 $("#tblProduct").append(row);
//             }
//         }
//     });
// }
$("#btnSearchProduct").click(function () {

    let proName = $("#proName").val();
    let proType = $("#proType").val();
    let size = $("#size").val();
    let price = $("#price").val();

    $.ajax({
        url: 'product?proName=' + proName,
        method: 'get',
        async: true,
        contentType: "application/json",
        data: JSON.stringify({
            proName: $("#proName").set(proName),
            proType: $("#proType").set(proType),
            size: $("#size").val(size),
            price: $("#price").val(price)
        }),
        success: function (data, responseState, xhr) {
            console.log(data);
        }
    });
});

$("#btnSendFile").click(function () {

    var fileObject = $("#file")[0].files[0];
    var fileName = $("#file")[0].files[0].name;

    var data = new FormData();
    data.append("file", fileObject, fileName);

    $.ajax({
        url: 'up',
        method: 'post',
        async: true,
        processData: false,
        contentType: false,
        data: data,
        success: function () {
            alert("File Uploaded");
        }
    });
});

$("#btnDeleteProduct").click(function () {
    let proName = $("#proName").val();
    $.ajax({
        url: 'product?proName=' + proName,
        method: 'delete',
        async: true,
        success: function (data, textState, xhr) {
            console.log(data);
        }
    });
});




