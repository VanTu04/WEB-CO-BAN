//dang ky
function kiemtra(){
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    if(username.length < 5){
        document.getElementById("result1").textContent = "Tên đăng ký phải chứa ít nhất 5 ký tự.";
        return false;
    }
    else if(email == ""){
        document.getElementById("result2").textContent = "Email không được để trống.";
        return false;
    }
    else if(!hasUppercase || !hasDigit){
        document.getElementById("result3").textContent = "Mật khẩu phải chứa ít nhất một ký tự hoa và một chữ số.";
        return false;
    }   
    else if(password !== confirmPassword){
        document.getElementById("result4").textContent = "Nhập lại mật khẩu không khớp.";
        return false;
    }
    else{
        alert("Dang ky thanh cong!");
        return true;
    }
}