
//récupérer les éléments du DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(element => element.dataset.key);
const ecran = document.querySelector('.ecran');
const historique = document.querySelector('.historique');


//ex: touche 6 : keycode 102. addeventListener('keydown)permet de récupére les info de l'evenement quand l'utilisateur appuies sur la touche
//(e)=event)
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
})
// le paramètre keycode 102 est recupéré dans la function (click) et nous retour la valeur
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

var d = new Date();
var date = d.getFullYear() + '-' + (d.getMonth()+1)+ '-' + d.getDate();
console.log(date);

const calculer = (valeur) => {
// if(la touch qu'on appuie posséde (valeur = keycode 102) includ dans la liste de keyCode )
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8' :
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent= calcul;
                historique.textContent = calcul;
                break;
            case 'boutonRadic':
                const racine = Math.sqrt(ecran.textContent);
                ecran.textContent = racine;
                
            break
            case 'boutonPi':
                ecran.textContent = Math.PI;
            break
        default :
            //lire le keycode de const calculer = (valeur) =>, 
            //prendre le tab listKeycode, regarder l'index de valeur a l'interieur de la liste etrenvoyer l'index de la valeur
            //permet de récuperer une valeur qu'on pourra réutiliser
            const indexKeycode = listeKeycode.indexOf(valeur);
            //pour récupérer l'index de la touche où on a appuyer
            const touche = touches[indexKeycode];
            //afficher la valeur à l'écran
            ecran.textContent += touche.innerHTML;
        }
        }
}




