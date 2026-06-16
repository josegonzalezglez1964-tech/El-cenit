document.addEventListener('DOMContentLoaded', () => {
    const btnEncriptar = document.getElementById('btn-encriptar');
    const txtMensaje = document.getElementById('capsula-mensaje');
    const inputFecha = document.getElementById('capsula-fecha');
    const boxConsola = document.getElementById('consola-status');
    const textConsola = document.querySelector('.console-text');

    if (btnEncriptar) {
        btnGenerate = btnEncriptar; // Protección cruzada
        btnEncriptar.addEventListener('click', () => {
            const mensaje = txtMensaje.value.trim();
            const fecha = inputFecha.value;

            if (!mensaje || !fecha) {
                alert("Por favor, introduce tus voluntades digitales y una fecha válida para la custodia.");
                return;
            }

            // Iniciar protocolo de simulación premium
            boxConsola.style.display = 'block';
            btnEncriptar.disabled = true;
            btnEncriptar.textContent = "⚙️ CIFRANDO...";

            let pasos = [
                "> Conectando con los nodos de Canarias Nexus...",
                "> Generando hash de bloque criptográfico...",
                "> Aplicando cifrado cuántico asimétrico...",
                `> Cápsula fijada. Liberación autorizada para el: ${new Date(fecha).toLocaleDateString('es-ES')}`,
                "// CUSTODIA COMPLETADA CON ÉXITO EN EL CÉNIT. 🔒"
            ];

            let i = 0;
            textConsola.innerHTML = "";
            
            const interval = setInterval(() => {
                if (i < pasos.length) {
                    textConsola.innerHTML += pasos[i] + "<br>";
                    i++;
                } else {
                    clearInterval(interval);
                    btnEncriptar.disabled = false;
                    btnEncriptar.textContent = "⚡ Cifrar y Custodiar Legado";
                    txtMensaje.value = "";
                    inputFecha.value = "";
                }
            }, 1000);
        });
    }
});
