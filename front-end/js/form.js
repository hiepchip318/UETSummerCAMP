document.getElementById("hoten").focus();

// Tự động chuẩn hóa tên khi mất focus
document.getElementById("hoten").onblur = function() {
    this.value = chuan_hoa(this.value);
}

function chuan_hoa(ten) {
    cus_name = ten;
	compare = cus_name.split(' ');
	cus_name = "";
	for (i = 0; i < compare.length; i++)
		if (compare[i].length > 0) {
			if (cus_name.length > 0) cus_name = cus_name + " ";
			cus_name = cus_name + compare[i].substring(0, 1).toUpperCase();
			cus_name = cus_name + compare[i].substring(1).toLowerCase();
		}
	return cus_name;
}

const birthdayInput = document.getElementById('birthday');
birthdayInput.addEventListener('change', validateBirthday);

function validateBirthday() {
    const birthday = new Date(birthdayInput.value);
    const birthdayYear = birthday.getFullYear();
    if(birthdayYear > 2007) {
        document.getElementById("date_error").innerHTML = "Trang web này dành cho những người trên 17 tuổi!";
    }
}

const usernameInput = document.getElementById('username');
const usernameErrorSpan = document.getElementById('username_error');

usernameInput.addEventListener('change', validateUserName);

function validateUserName() {
    const username = usernameInput.value.trim(); // lọc kí tự cách thừa

    let errorMessage = '';

    if (username.indexOf(' ') !== -1) {
        errorMessage = 'Tên người dùng không được có dấu cách';
    }

    const specialCharRegex = /[^a-z0-9_]/g;
    if (specialCharRegex.test(username)) {
        errorMessage = 'Tên người dùng chỉ được chứa chữ thường, số và ký tự "_".';
    }

    usernameErrorSpan.innerHTML = errorMessage;

    if(errorMessage) {
        event.preventDefault();
    }
}

document.getElementById("repass").onblur = function() {
    document.getElementById("repass_error").innerHTML = "";
    if(document.getElementById("password").value !== document.getElementById("repass").value) {
        document.getElementById("repass_error").innerHTML = "Vui lòng nhập lại mật khẩu!"
    }
}

// Duyệt form
