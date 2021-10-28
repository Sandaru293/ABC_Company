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

$("#lnkBed1").click(function () {
    hideAll();
    $("#bedContent1").css('display', 'block');
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
        "#galleryContent,#bedContent,#bedContent1,#productContent,#loginContent,#signInContent").css('display', 'none');
}

