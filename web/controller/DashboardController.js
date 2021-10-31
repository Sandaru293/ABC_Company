hideAll();
$("#loginContent").css('display', 'block');

$("#dashboardContent").css('display', 'block');
$("#nav").text("Dashboard");

$('#lnkHome').click(function () {
    hideAll();
    $("#dashboardContent").css('display', 'block');
    $("#nav").text("Dashboard");
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

$("#lnkContact").click(function () {
    hideAll();
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
    $("#contactContent").css('display', 'block');
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
});

$("#lnkLivingRoom").click(function () {
    hideAll();
    $("#LivingRoomContent").css('display', 'block');
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
});

$("#lnkDining").click(function () {
    hideAll();
    $("#DiningContent").css('display', 'block');
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
});

$("#lnkFurniture").click(function () {
    hideAll();
    $("#FurnitureContent").css('display', 'block');
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
});

$("#lnkBed1").click(function () {
    hideAll();
    $("#bedContent1").css('display', 'block');
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
});

$("#lnkLivingRoom1").click(function () {
    hideAll();
    $("#LivingRoomContent1").css('display', 'block');
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
});

$("#lnkDining1").click(function () {
    hideAll();
    $("#DiningContentContent1").css('display', 'block');
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
});

$("#lnkFurniture1").click(function () {
    hideAll();
    $("#FurnitureContentContent1").css('display', 'block');
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
});

$("#lnkProduct").click(function () {
    hideAll();
    $("#productContent").css('display', 'block');
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
});

$('#btnLogin').click(function () {
    hideAll();
    $("#dashboardContent1").css('display', 'block');
    $("#dashboardContent2").css('display', 'block');
    $("#dashboardContent3").css('display', 'block');
    $("#dashboardContent4").css('display', 'block');
});

$('#btnSignForm').click(function () {
    hideAll();
    $("#signInContent").css('display', 'block');
});

$('#btnLoginForm').click(function () {
    hideAll();
    $("#loginContent").css('display', 'block');
});

function hideAll() {
    $("#dashboardContent1,#dashboardContent2,#dashboardContent3,#dashboardContent4,#aboutContent," +
        "#galleryContent,#bedContent,#bedContent1,#productContent,#loginContent,#signInContent,#LivingRoomContent," +
        "#DiningContent,#DiningContentContent1,#FurnitureContent,#LivingRoomContent1,#FurnitureContentContent1,#contactContent").css('display', 'none');
}

