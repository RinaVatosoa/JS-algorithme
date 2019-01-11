document.write('Tableau' + '<br/>')
var vt_tableFruits = ['banana' , 'apple']
/*nombre des éléments du tableau*/
document.write('le nombre des éléments du tableau = ' +vt_tableFruits.length + '<br/>');

/*affiche le premier élément avec: table[0] */
var vt_firstElement = vt_tableFruits[0];
document.write('le premier élément du tableau = ' + vt_firstElement + '<br/>');

/*affiche le dernier élément avec: table.length-1 */
var vt_lastElement = vt_tableFruits[vt_tableFruits.length-1];
document.write('le dernier élément du tableau = ' +vt_lastElement + '<br/>');

/*boucle forEach dans le tableau, affiche la liste des éléments*/
/*item: élément, index: numéro */
vt_tableFruits.forEach(function(item, index,array){
document.write('la liste des éléments du tableau: ')
document.write( item +' '+ index + '<br/>');
})

/*ajout d'un élément à la fin du tableau: table.push */
var vt_newLength = vt_tableFruits.push('orange');
document.write('nombre total des éléments après l\'ajout: ' + vt_newLength+ '<br/>');

/*suppression d'un élément à la fin du tableau: table.pop */
var vt_lastDelete = vt_tableFruits.pop();
document.write('l\'élément ' + vt_lastDelete + ' a été supprimé'+ '<br/>');

/*suppression du premier éléments du tableau: table.shift */
var vt_firstDelete = vt_tableFruits.shift();
document.write('l\'élément ' + vt_firstDelete + ' a été supprimé'+ '<br/>');

/*ajout d'un élément au début du tableau: table.unshift*/
var vt_newFirstLenght = vt_tableFruits.unshift('strawberry');
document.write('nombre total des éléments après l\'ajout: ' + vt_newFirstLenght)