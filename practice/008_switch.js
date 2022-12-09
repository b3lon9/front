var strLevel = prompt("점수입력하시오");

var message;
switch(strLevel) {
    case "A":
        message = "오우 굿";
        break;
    case "B":
        message = "오마이갓";
        break;
    case "C":
        message = "쉣";
        break;
    default:
        message = "사요";

    
}
document.write(message);