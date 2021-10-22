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

    //var form = $("#formLogin").serialize();
    let userId = $("#userId").val();
    let password = $("#password").val();

    $.ajax({
        url: 'user?userId=' + userId & 'user?password=' + password,
        //method: 'get',
        async: true,
        dataType: "json",
        success: function (data, textState, xhr) {
            console.log(data);
            alert("login success");
            if (this.success){
                // $("#dashboardContent1").css('display', 'block');
                // $("#dashboardContent2").css('display', 'block');
                // $("#dashboardContent3").css('display', 'block');
                // $("#dashboardContent4").css('display', 'block');
            }
        }
    });
});
