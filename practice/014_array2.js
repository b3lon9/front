Language1 = new Array("HTML", "JavaScript", "JSP", "ASP");

document.write("<b>처음 데이터</b><br>");
for (i=0; i<Language1.length; i++) {
    document.write(Language1[i] + " ");
}
document.write("<br>");

var pop1 = Language1.pop();
document.writeln("pop1 : " + pop1 + "<br>");

for (i=0; i<Language1.length; i++) {
    document.write(Language1[i] + " ");
}