hideAll();

$("#dashboardContent1").css('display', 'block');
$("#dashboardContent2").css('display', 'block');
$("#dashboardContent3").css('display', 'block');
$("#dashboardContent4").css('display', 'block');

///////////
$("#dashboardContent").css('display', 'block');
$("#nav").text("Dashboard");

$('#lnkHome').click(function () {
    hideAll();
    $("#dashboardContent").css('display', 'block');
    $("#nav").text("Dashboard");
    text = $('#nav').text();
});

$('#lnkCustomer').click(function () {
    $("#txtCustomerID").focus();
    hideAll();
    $("#customerContent").css('display', 'block');
    $("#nav").text("Customer Manage");
    text = $('#nav').text();
});

$("#lnkItem").click(function () {
    hideAll();
    $("#itemContent").css('display', 'block');
    $("#nav").text("Item Manage");
    text = $('#nav').text();
});

$("#lnkOrders").click(function () {
    hideAll();
    $("#orderContent").css('display', 'block');
    $("#nav").text("Order Manage");
    text = $('#nav').text();
});

$("#lnkAbout").click(function () {
    hideAll();
    $("#aboutContent").css('display', 'block');
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
    $("#dashboardContent4").css('display', 'block');
});

$("#lnkHome").click(function () {
    hideAll();
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
    $("#dashboardContent3").css('display', 'block');
    $("#dashboardContent4").css('display', 'block');
});

$("#lnkGallery").click(function () {
    hideAll();
    $("#galleryContent").css('display', 'block');
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
    $("#dashboardContent4").css('display', 'block');
});

$("#lnkBed").click(function () {
    hideAll();
    $("#bedContent").css('display', 'block');
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
    $("#dashboardContent4").css('display', 'block');
});

$("#lnkBed1").click(function () {
    hideAll();
    $("#bedContent1").css('display', 'block');
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
    $("#dashboardContent4").css('display', 'block');
});

$("#lnkProduct").click(function () {
    hideAll();
    $("#productContent").css('display', 'block');
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
    $("#dashboardContent4").css('display', 'block');
});

function hideAll() {
    $("#dashboardContent1,#dashboardContent2,#dashboardContent3,#dashboardContent4,#aboutContent," +
        "#galleryContent,#bedContent,#bedContent1,#productContent").css('display', 'none');
}

