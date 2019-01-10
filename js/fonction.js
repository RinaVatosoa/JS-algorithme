/*fonction carre avec un paramètre x*/
function carre(x){ 
    return x*x;
}
var n=12;
document.writeln('le carré de 12 = ' + carre(n) + '<br/>');
document.write('<hr>');

for(i=0; i<=9; i++)
document.writeln('le carré de '+ i + ' = '+ carre(i) + '<br/>');
document.write('<hr>');

/*comme procédure*/
function affiche20fois(x){
    /*répéter le nombre 20 fois*/
    for(var j=0; j<=20; j++){
    document.write(x);
    }
        document.writeln()
}
for (var k=0;k<10;k++) {
    document.write('20 fois de '+ k +' = ');
    affiche20fois(k);
}
document.writeln('<hr>');