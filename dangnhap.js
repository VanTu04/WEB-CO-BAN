function kiemtra(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username == ""){
        document.getElementById("result1").textContent = "Chưa nhập Email.";
        return false;
    }
    else if(password == ""){
        document.getElementById("result3").textContent = "Chưa nhập mật khẩu.";
        return false;
    }
    else{
        alert("Dang nhap thanh cong!");
        return true;
    }
}