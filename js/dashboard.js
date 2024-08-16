const localData = localStorage.getItem('userData')
const userObj = JSON.parse(localData)
$("#name").text($(userObj)[0].name)
$("#email").text($(userObj)[0].email)
$("#phone").text($(userObj)[0].phone)
$("#gender").text($(userObj)[0].gender)
$("#dateOfBirth").text($(userObj)[0].dateOfBirth)
$("#profileImage").attr("src", $(userObj)[0].profilePicture)

$("#newDataBtn").on("click", () => {
    localStorage.setItem("userData", '')
    localStorage.setItem("newImg", '')
    location.href = "index.html"
})