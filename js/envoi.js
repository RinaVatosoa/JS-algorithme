/**
 * récupérer la valeur dans un formulaire
 * afficher le résultat dans la même page
 */
$ ('.vt-btn').click(function()
{
    var vt_result = $('input').val();
    document.getElementById("vt-result").innerHTML += vt_result + '<br/>';
})