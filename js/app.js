$("#showProfile").css("display", "none")

$("#profile").on("change", () => {
    const fileType = $("#profile")[0].files[0].type
    if (fileType == "image/png" || fileType == "image/jpg" || fileType == "image/jpeg") {
        $("#profileError").text('')
        $("#showProfile").css("display", "block")
        const reader = new FileReader()
        reader.readAsDataURL($("#profile")[0].files[0])
        $(reader).on("load", () => {
            $("#showProfile").attr("src", reader.result)
        })
    } else {
        $("#profileError").text('Please Select Supported Files Only')
    }
})
$("#form").on("submit", (e) => {
    e.preventDefault()
    inputDate = new Date($("#dob").val())
    const genderValue = $('input[name="gender"]:checked').val();
    if (!$("#form").validationEngine("validate")) {
        return false
    }
    if (!genderValue) {
        $("#genderError").text('Please Select Your Gender')
        return
    } else {
        $("#genderError").text('')
    }

    if (inputDate > new Date()) {
        $("#dateError").text('Date Should Not be of the Future')
        $("#dob").focus()
        return
    } else {
        $("#dateError").text('')
    }
    const fileType = $("#profile")[0].files[0].type
    if (!(fileType == "image/png" || fileType == "image/jpg" || fileType == "image/jpeg")) {
        $("#profileError").text('Please Select Supported Files Only')
        $("#profile").focus()
        return
    } else {
        $("#profileError").text('')
    }

    const reader = new FileReader()
    reader.readAsDataURL($("#profile")[0].files[0])
    $(reader).on("load", () => {
        $("#showProfile").attr("src", reader.result)
        const userData = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            gender: genderValue,
            dateOfBirth: $("#dob").val(),
            profilePicture: reader.result
        }
        localStorage.setItem('userData', JSON.stringify(userData))
    })
    location.href = "dashboard.html"
})
$("#resetBtn").on("click", () => {
    $("#form").trigger('reset')
    $("#showProfile").attr("src", "").css("display", "none")
    $("#nameError, #emailError, #phoneError, #genderError, #dateError, #profileError").text('')
})