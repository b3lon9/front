function myFunc(name) {
    myWin = window.open("", "popup_sampel", "width=400, height=300");

    myWin.document.open();
    myWin.document.write(
        "<html>" +
        "<head><title>" +
        "SAMPLE" +
        "</title></head>");
    myWin.document.write("<body bgcolor=gold>");
    myWin.document.write("<p align=center><b>안녕하세요?"+name+"님</b></p>");
    myWin.document.write("</body></html>");
    myWin.document.close();
}