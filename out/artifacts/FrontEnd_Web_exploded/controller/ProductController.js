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

loadAllCustomers();

function loadAllCustomers() {
    $("#tblProduct").empty();
    $.ajax({
        url: 'product',
        method: 'get',
        async: true,
        dataType: "json",
        success: function (data, textState, xhr) {

            for (let cus of data) {
                var row = `<tr><td>${cus.proName}</td><td>${cus.proType}</td><td>${cus.size}</td><td>${cus.price}</td></tr>`;
                $("#tblProduct").append(row);
            }
        }
    });
}

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

function loadAllProducts() {
    $("#tblProduct").empty();
    $.ajax({
        url: 'product',
        method: 'get',
        async: true,
        dataType: "json",
        success: function (data, textState, xhr) {

            for (let pr of data) {
                var row = `<tr><td>${pr.proName}</td><td>${pr.proType}</td><td>${pr.size}</td>
                           <td>${pr.price}</td></tr>`;
                $("#tblProduct").append(row);
            }
        }
    });
}

$("#btnUpdateProduct").click(function () {

    let proName = $("#proName").val();
    let proType = $("#proType").val();
    let size = $("#size").val();
    let price = $("#price").val();

    $.ajax({
        url: 'http://localhost:8080/FrontEnd_Web_exploded/api/v1/product',
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
            loadAllProducts();
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
            proName: $("#proName").set(),
            proType: $("#proType").set(),
            size: $("#size").val(),
            price: $("#price").val()
        }),
        success: function (data, responseState, xhr) {
            console.log(data);
        }
    });
});


