window.addEventListener("load", iniciar);
var mensaje = document.getElementById("mensajes");
var listaMensaje = document.getElementById("chat");
/*var lastMessage = document.getElementById("mensaje");
var lastDate = document.getElementById("hora");*/
var lista = document.getElementById("cabecera");
var fotoPerfil = document.getElementById("perfil");

var horaMinuto = new Date().toLocaleTimeString(navigator.language, {hour: "2-digit", minute:"2-digit"});

function iniciar(){
	mensaje.addEventListener("keypress", enviar);
	var imagen = document.querySelectorAll(".w-recent-chats li .avatar");
	for(var i = 0; i<imagen.length;i++){
		imagen[i].addEventListener("click", cambiarUsuario);
	}
}
function enviar(e){
	if(e.keyCode == 13){
		var cajaUno = document.createElement("div");
		var cajaDos = document.createElement("div");
		var parrafo = document.createElement("p");
		var hora = document.createElement("div");
		
		cajaUno.classList.add("w-message", "w-message-out");
		cajaDos.classList.add("w-message-text");
		hora.classList.add("time");

		parrafo.innerText = this.value;
		hora.innerText = horaMinuto;
		
		cajaDos.appendChild(parrafo);
		cajaDos.appendChild(hora);
		cajaUno.appendChild(cajaDos);
		listaMensaje.appendChild(cajaUno);

		/*lastMessage.innerText = this.value;
		lastDate.innerText = horaMinuto;*/

		this.value="";
	}
}
function cambiarUsuario(){
	var foto = this.children[0].getAttribute("src");
	fotoPerfil.setAttribute("src", foto);
	var nombre = this.children[1].textContent;
	var nomUsuario = document.getElementById("contactName");
	nomUsuario.textContent = nombre;
	//listaMensaje.textContent = this.children[2].textContent;
	//var ultimoMensaje = this.children[2].textContent;
	var text = document.createTextNode(this.children[2].textContent);
	var mensajeIn = document.createElement("div");
	var mensajeText = document.createElement("div");
	var chatParrafo = document.createElement("p");
	
	mensajeIn.classList.add("w-message", "w-message-in");
	mensajeText.classList.add("w-message-text");

	chatParrafo.appendChild(text);
	mensajeText.appendChild(chatParrafo);
	mensajeIn.appendChild(mensajeText);
	listaMensaje.appendChild(mensajeIn).textContent;
}