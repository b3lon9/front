function WriteFunc1() {
    document.write("WriteFunc1 함수 사용하기 <br><br>");
}

function WriteFunc2(strName) {
    document.write("WriteFunc2 함수 사용하기<br><br>");
    document.write(strName + "님 안녕하세요<br><br>");
}

function WriteFunc3(intNum1, intNum2) {
    document.write("WriteFunc3 함수 사용하기<br>");
    var intSum;
    intSum = intNum1 + intNum2;
    return intSum;
}


WriteFunc1();
WriteFunc2("김주환");
WriteFunc3(22, 30);