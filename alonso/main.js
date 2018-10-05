function saluda (){
    alert("hola, como estas");
    
    }
    function agregarcomentario() {
        console.log("agregando comentario");
    
    var texNuevoComentario = document.getElementById("nuevo-comentario"); 
    console.log("elemento de nuevo comentario");
    
    var comentarioIngreseado =texNuevoComentario.value;
    console.log(comentarioIngreseado)
    
    //crear comentario
    var comentario = document.createElement("p");
    comentario.textContent = comentarioIngreseado;
    console.log(comentario)
    
    //mostrando en  el sitio
    var seccionComentario = document.getElementById("seccion-comentarios");
    console.log(seccionComentario);
    seccionComentario.appendChild(comentario);
    
    texNuevoComentario.value = null;
    }