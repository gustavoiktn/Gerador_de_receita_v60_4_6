{    
    var desp1 = window.document.getElementById("desp1");
    var desp2 = window.document.getElementById("desp2");
    var desp3 = window.document.getElementById("desp3");
    var desp4 = window.document.getElementById("desp4");
    var desp5 = window.document.getElementById("desp5");
    var mensErro = 'ERRO ;-;<p>Cheque se todas as caixas de texto estão preenchidas corretamente e gere nova receita.</p>';
    var qnt = window.document.getElementById("qnti");
    var sensorial = window.document.getElementById("sensorial");
    var corpo = window.document.getElementById("corpo");
    var pe = window.document.getElementById('pe');
    var info = window.document.querySelectorAll('.info');

    /* info.addEventListener('click', abrirsec4)
    info.addEventListener('mouseenter', passar)
    info.addEventListener('mouseout', tirar) */
}
function carregar(){
    sec2.style.display = 'none'
    sec3.style.display = 'block'
    sec4.style.display = 'none'
}
function calcular(){
   sec2.style.display='block'
   sec3.style.display='none'

    var qntN = Number(qnt.value)
    var sen = sensorial.value
    var cor = corpo.value
    var agua = qntN * 15
    var pct1 = 40/100*(agua)
    var pct2 = 60/100*(agua)

    if (qntN <= 0){
        sec2.style.display = 'none'
        sec3.style.display = 'block'
        sec3.innerHTML = mensErro
    }else{
        desp2.innerHTML = pct1 + " mL"
        if (sen == "Equilibrado"){
            desp1.innerHTML= pct1/2 + " mL"
        }else if(sen == 'Ácido'){
            desp1.innerHTML= 70/300*(agua) + " mL"
        } else if(sen == 'Doce'){
            desp1.innerHTML = 50/300*(agua) + " mL"
        } else {
            sec2.style.display = 'none'
            sec3.style.display = 'block'
            sec3.innerHTML = mensErro
        }

        var dd4 = window.document.getElementById("dd4");
        var dd5 = window.document.getElementById("dd5");

        if (cor == 'Mais Corpo'){
            desp3.innerHTML = pct1 + pct2/3 + " mL"
            desp4.innerHTML = pct1 + (pct2/3)*2 + " mL"
            desp5.innerHTML = pct1 + pct2 + " mL"
            dd4.style.display = "block"
            dd5.style.display = "block"
        }else if (cor == 'Equilibrado'){
            desp3.innerHTML = pct1 + pct2/2 + " mL"
            desp4.innerHTML = pct1 + pct2 + " mL"          
            dd4.style.display = "block"
            dd5.style.display = "none"
        }else if (cor == 'Menos Corpo'){
            desp3.innerHTML = pct1 + pct2 + " mL"
            dd4.style.display = "none"
            dd5.style.display = "none"
        }else {
            sec2.style.display = 'none'
            sec3.style.display = 'block'
            sec3.innerHTML = mensErro
        }
    }
}
function passar(e){  
    var c = info  
    c.forEach((v, i) => {
        /* v.style.color= "aquamarine"
        v.style.cursor='pointer'  */ 
        c[i].style.cursor='pointer'
       switch(e){
            case 0:
                c[0].style.color="aquamarine"     
                break
            case 1:
                c[1].style.color= "red"
                break
            case 2:
                c[2].style.color= "green"              
                break
            case 3:
                c[3].style.color= "orange"
                break
            case 4:
                c[4].style.color= "black"
                break    
            default:
                c[i].style.color= "blue"
                break
        }  
    })       
}
function tirar(){
    info.forEach(e => {
    e.style.color= "blue"
    })     
}
function abrelink(link){
    switch(link){
        case 1:
            window.open("https://www.youtube.com/watch?v=qPOXSEfiKTs", "_blank")          
            break
        case 2:
            window.open("https://www.youtube.com/watch?v=wmCW8xSWGZY", "_blank")      
            break    
        case 3:
             window.open("https://buenavistacafe.com.br/blog/2018/11/20/domine-seu-cafe-com-o-metodo-46/", "_blank")        
            break 
    }    
}
function passar2(a){
    a.classList.add('aa2')
    a.classList.remove('aa')            
}
function tirar2(a){
    a.classList.remove('aa2')
    a.classList.add('aa')            
}
function abrirsec4(){
    duvidas.style.display= 'none'
    sec4.style.display= "block"
}