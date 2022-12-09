var i, j, x, y, result;

x = prompt("첫 번째 숫자");
y = prompt("두 번째 숫자");

document.write("<table align=center border=1 cellspacing=0 cellpadding=2>");
document.write("<tr>");
for (i=1; i<=9; i++) {
    document.write("<td align=center bgcolor=yellow height=30 valign=middle><b>");
    document.write(i + "단");
    document.write("</b></td>");
}
document.write("</tr>");

for (i=1; i<=9; i++) {
    document.write("<tr>");
    for (j=1; j<=9; j++) {
        document.write("<td align=center ");
        if ((j==x) && (i==y)) {
            document.write("bgcolor=yellow>")
            document.write(j + " x " + i);
        } else 
            document.write(">", j + " x " + i);
        document.write("</td>");

        
    }   
    document.write("</tr>");
}

document.write("</table>");
