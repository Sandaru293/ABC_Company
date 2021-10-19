/**
 * @author Sandaru Kithshan <skithshan93@gmail.com> (github.com/Sandaru293)
 * @since 10/18/2021
 */
loadAllProducts();

$("#btnSaveProduct").click(function () {

    var form = $("#formProduct").serialize();

    $.ajax({
        url: 'product',
        method: 'post',
        async: true,
        data: form,

        success: function (data) {
            console.log(data);
            loadAllProducts();
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



