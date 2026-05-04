// 1. Función para el botón de pánico
function revelar() {
    const msg = document.getElementById('mensaje-secreto'); 
    if(msg) {
        msg.style.display = 'block';
        msg.scrollIntoView({ behavior: 'smooth' });
    }
    alert("¡Hey! Deja de pensar bobadas. ¡Eres una tesa!");
}

// 2. Función para el termómetro de humor
function mood(tipo) {
    const res = document.getElementById('mood-response');
    const text = document.getElementById('mood-text');
    res.style.display = 'block';
    
    // Tu número de WhatsApp (Ponlo sin el signo +)
    const miNumero = "573004124213";

    let mensajeWhatsApp = "";
    let respuestaPantalla = "";

    switch(tipo) {
        case 'triste':
            respuestaPantalla = "Oye... deja la tristeza. Eres una tesa y no dejes que nada te apague el brillo. ¿Quieres que hablemos o te recojo y nos divertimos para olvidarlo todo?";
            mensajeWhatsApp = "Hola Joseph... me siento un poco triste hoy. ¿Podemos hablar o me recoges?";
            break;
        case 'brava':
            respuestaPantalla = "Uff, código rojo. 🚨 Prometo no decirte 'mi vida' hasta que se te pase, pero sepa que aquí estoy firme. ¿Un heladito para calmar los humores?";
            mensajeWhatsApp = "Joseph, ¡estoy brava! Tráeme un helado o algo para que se me pase. 😂";
            break;
        case 'hambre':
            respuestaPantalla = "¡Peligro! Una Yuli con hambre es peligrosa. ¿Pedimos algo o qué? (Esta vez no me como las sobras, tranqui jaja).";
            mensajeWhatsApp = "¡Joseph, tengo mucha hambre! Pide algo rico ya mismo.";
            break;
        case 'fea':
            respuestaPantalla = "¡ERROR 404! Esa belleza no se encuentra ni en Google. Deja de decir bobadas que usted es la más linda de Bogotá.";
            mensajeWhatsApp = "Joseph, hoy me siento 'fea'... dime algo bonito.";
            break;
    }

    // Creamos el botón de WhatsApp dinámicamente
    const botonWA = `<br><br><a href="https://wa.me/${miNumero}?text=${encodeURIComponent(mensajeWhatsApp)}" target="_blank" style="text-decoration:none;">
        <button style="background-color: #25d366; color: white; border: none; padding: 12px; border-radius: 10px; font-weight: bold; width: 100%; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
            💬 Decirle a Joseph
        </button>
    </a>`;

    text.innerHTML = "<b>Respuesta del sistema:</b><br><br>" + respuestaPantalla + botonWA;
    res.scrollIntoView({ behavior: 'smooth' });
}

// 3. Función para la música
function toggleMusic() {
    const player = document.getElementById('spotify-player');
    const btn = document.getElementById('btn-musica'); 
    
    if (player && btn) {
        if (player.style.display === 'none' || player.style.display === '') {
            player.style.display = 'block';
            btn.innerText = "⏸️ Pausar momento meloso";
            player.scrollIntoView({ behavior: 'smooth' });
        } else {
            player.style.display = 'none';
            btn.innerText = "🎵 Escuchar 'Esa' canción";
        }
    }
}

// 4. LÓGICA DEL CONTADOR
const fechaObjetivo = new Date("May 6, 2026 00:00:00").getTime();

function actualizarReloj() {
    const ahora = new Date().getTime();
    const distancia = fechaObjetivo - ahora;

    if (distancia < 0) {
        clearInterval(actualizador);
        const contenedor = document.getElementById("countdown");
        if(contenedor) contenedor.innerHTML = "<h3>¡LLEGÓ EL DÍA! 🏍️🔥</h3>";
        return;
    }

    const d = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const h = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distancia % (1000 * 60)) / 1000);

    // Actualizar el HTML
    const dayEl = document.getElementById("days");
    const hourEl = document.getElementById("hours");
    const minEl = document.getElementById("minutes");
    const secEl = document.getElementById("seconds");

    if(dayEl) dayEl.innerText = d < 10 ? "0" + d : d;
    if(hourEl) hourEl.innerText = h < 10 ? "0" + h : h;
    if(minEl) minEl.innerText = m < 10 ? "0" + m : m;
    if(secEl) secEl.innerText = s < 10 ? "0" + s : s;
}

// Lanzar el intervalo
const actualizador = setInterval(actualizarReloj, 1000);

// Ejecutar al cargar
actualizarReloj();