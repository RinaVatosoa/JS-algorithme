/**
 *
 */
function change(){
        if( document.body.style.color == 'white'){
            document.body.style.color = 'black';
            document.body.style.background = 'white';
        }
        else {
            document.body.style.color = 'white';
            document.body.style.background = 'grey';
        }
        document.form1.text.value='Cliquer ici : '+document.body.style.color+
        '/'+document.body.style.background;
    }