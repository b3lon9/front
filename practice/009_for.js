var intNum = prompt("숫자 입력하세요", "0");

for (i=0; i<= intNum; i++) {
    if (i % 2 == 0) {
        document.write(i + "짝수입니다.<br>");
    } else {
        document.write(i + "홀수입니다.<br>");
    }
}