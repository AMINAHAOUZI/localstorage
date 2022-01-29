/*---------------------operation ajouter-----------*/
afficher()
document.getElementsByClassName("bu")[0].children[0].addEventListener("click",ajouter)
function ajouter(){
    var voiture=document.getElementById("add").textContent.trim()
    if(voiture!=""){
     localStorage.setItem(gere_indice(),voiture);
   document.getElementById("add").textContent=""
   window.location.href=""
    }
    else{
        alert("voiture vide!!")
    }
}

function gere_indice(){
    return localStorage.length+1
}
function afficher()
{  var tbody=document.getElementsByClassName("table")[0].children[1]
    for( var i=1;i<=localStorage.length;i++)
    {
    tbody.innerHTML+='<tr> <td>'+i+'</td><td>'+localStorage.getItem(i)+'</td><td> <i  onclick="supprimer(this)" class="fas fa-trash-alt"></i></td></tr>'
   
    }
    console.log(localStorage.getItem(i))
  

}
/*-----------------------------operation supp--------------------------*/
function supprimer(el){
    var x=el.parentElement.parentElement.children[0].textContent
    if(confirm("est ce que vous etes sur!!"))
    { 
      localStorage.removeItem(x)
      window.location.href=""
    }
}
