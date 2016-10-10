window.addEventListener("load", iniciar);
var mensaje = document.getElementById("mensajes");
var listaMensaje = document.getElementById("chat");

function iniciar(){
	mensaje.addEventListener("keypress", enviar);
}
function enviar(e){
	if(e.keyCode == 13){
		var cajaUno = document.createElement("div");
		var cajaDos = document.createElement("div");
		var parrafo = document.createElement("p");
		var hora = document.createElement("div");
		var hm = new Date().toLocaleTimeString(navigator.language, {hour: "2-digit", minute:"2-digit"});
		cajaUno.classList.add("w-message", "w-message-out");
		cajaDos.classList.add("w-message-text");
		hora.classList.add("time");

		parrafo.innerText = this.value;
		hora.innerText = hm;
		
		cajaDos.appendChild(parrafo);
		cajaDos.appendChild(hora);
		cajaUno.appendChild(cajaDos);
		listaMensaje.appendChild(cajaUno);

		this.value="";
	}
}