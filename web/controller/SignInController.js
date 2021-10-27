/**
 * @author Sandaru Kithshan <skithshan93@gmail.com> (github.com/Sandaru293)
 * @since 10/22/2021
 */

$("#btnSignForm").click(function () {

    var form = $("#formLogin").serialize();

    $.ajax({
        url: 'user',
        method: 'post',
        async: true,
        data: form,

        success: function (data) {
            console.log(data);
            alert("Sign in success");
        }
    });
});

$("#btnLogin").click(function () {

    var form = $("#formLogin").serialize();
    let userId = $("#userId").val();
    let password = $("#password").val();

    $.ajax({
        url: 'user?userId=' + userId & 'user?password=' + password,
        method: 'get',
        async: true,
        dataType: "json",
        success: function (data, resp) {
            console.log(data);
            alert("login success");
            if (resp.code == 200){
                $("#dashboardContent1").css('display', 'block');
                $("#dashboardContent2").css('display', 'block');
                $("#dashboardContent3").css('display', 'block');
                $("#dashboardContent4").css('display', 'block');
            }
        }
    });
});

// function registerUser() {
//
//     let nic = $('#txt-g-NIC').val();
//     let email = $('#txtEmail').val();
//     let password = $('#password-G').val();
//     // let filename = $('#nicImg')[0].files[0].name;
//     let address = $('#txtAddress').val();
//     let contact = $('#txtContact').val();
//     let formData = new FormData();
//     for (let file of document.getElementById('nicImg').files) {
//         formData.append("file", file)
//     }
//
//     formData.append("nic", nic);
//     $.ajax({
//         method: "POST",
//         contentType: false,
//         processData: false,
//         url: "http://localhost:8080/EasyRent_war_exploded/api/v1/user/uploadimage",
//         async: true,
//         data: formData,
//         success: function (resp) {
//             console.log(resp.data);
//
//             if (resp.code == 200) {
//                 $.ajax({
//                     method: "POST",
//                     contentType: "application.json",
//                     url: "http://localhost:8080/EasyRent_war_exploded/api/v1/user/registerUser",
//                     data: JSON.stringify({
//                         "nic": nic,
//                         "email": email,
//                         "password": password,
//                         "idPhoto": resp.data,
//                         "address": address,
//                         "contact": contact
//                     })
//                 });
//             } else {
//                 alert("PLease Upload a NIC")
//             }
//         }
//     });
//
// }
