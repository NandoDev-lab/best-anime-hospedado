
function piscar(){
    if (document.getElementById("shen").checked) {
        document.getElementById("piscante").innerText='Faça sua escolha';
        document.getElementById("piscante").style.zIndex="4";
        document.getElementById("piscante").style.marginLeft='120px';
        document.getElementById("piscante").style.animationPlayState='running';
        document.getElementById("shenlong").style.animationPlayState="running";
        document.getElementById("shenlong").style.animationIterationCount="1";
    
      
    }else {
        document.getElementById("piscante").innerText='Clique para fazer o pedido';
        document.getElementById("piscante").style.marginLeft='80px';
        document.getElementById("piscante").style.display="inherit";
        document.getElementById("piscante").style.animationPlayState='running';
        document.getElementById("shenlong").style.animationPlayState="running";
        document.getElementById("shenlong").style.animationIterationCount="infinite";
    }
    
};

function ampliarConteudo(){
    var assistindo=document.getElementsByClassName("embed-responsive");
    var texto=document.getElementById("mainframe").innerText;
    if (assistindo.onclick){
        document.texto.innerText="Assistindo Agora";
    }
}
