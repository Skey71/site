function checker() {
    document.querySelectorAll(".field_error").forEach(el => el.classList.remove("field_error"));
    let result = "";
    let str;
    let isBad;

    //Поле с именем:
    str = document.getElementById("Name").value;
    let regExp = /[^а-я a-z]/ig;
    isBad = regExp.test(str);
    if (isBad) {
        result += "Формат имени не верен!\n";
        document.getElementById("Name").classList.add("field_error");
    }
    //Поле с телефоном:
    str = document.getElementById("Tel").value;
    regExp = /^(\+7\(\d{3}\)\d{3}-)(\d{4})$/g;
    isBad = !regExp.test(str);
    if (isBad) {
        result += "Формат телефона не верен!\n";
        document.getElementById("Tel").classList.add("field_error");
    }
    //Поле с емайлом
    str = document.getElementById("Email").value;
    regExp = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/ig;
    if (!regExp.test(str)) {
        result += "Формат e-mail не верен!\n";
        document.getElementById("Email").classList.add("field_error");
    }
    //Выводим результат:
    if (result === "") result = "Всё введено верно!";
    document.querySelector(".check-result").innerHTML = result;
}