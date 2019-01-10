/*Une liste de nombres, de 1 à 55 :*/
document.write('Une liste de nombres, de 1 à 55 :'+ '<br/>');
for (var n=1;n<56;n++){
    document.write(n+' ');
}
document.writeln('<hr>');

/*nombre impair*/
document.write('nombre impair de 1 à 55'+'<br/>')
for (var nb=1 ; nb<=55 ; nb+=2){
    document.writeln(nb + ' ');
}
document.writeln('<hr>');

/*calcul de 30!*/
document.write('calcul de 30!'+'<br/>')
var f=1;
for( i=1; i<30; i++)
    f=f*i;
    document.writeln('30!=' +f)
