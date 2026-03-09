let pedidoActual = [];
const determinaciones = [
  // SECTOR HEMATOLOGÍA
 { nombre: "Eritrosedimentación", area: "Hematología", muestra: "Sangre entera con EDTA", tubo: "Lila (EDTA)", toma: "Ayuno 8hs", urgencia: "Media", procesamiento: "Dentro de las 4hs", obs: "Temperatura ambiente." },
  { nombre: "Hemograma", area: "Hematología", muestra: "Sangre entera con EDTA", tubo: "Lila (EDTA)", toma: "Ayuno 8hs", urgencia: "Alta", procesamiento: "Dentro de las 4hs", obs: "Conservación Temperatura ambiente." },
  { nombre: "Gota Gruesa", area: "Hematología", muestra: "Punción capilar", tubo: "Extendido", toma: "Ayuno 8hs", urgencia: "Alta", procesamiento: "Inmediato", obs: "Enviar en recipiente seco (sin hielo)." },
  { nombre: "Recuento de reticulocitos", area: "Hematología", muestra: "Sangre entera con EDTA", tubo: "Lila (EDTA)", toma: "Ayuno 8hs", urgencia: "Media", procesamiento: "Antes de 1h", obs: "Procesar en el momento o antes de la hora de extracción." },
  
  // SECTOR HEMOSTASIA
  { nombre: "Tiempo de Protrombina (TP)", area: "Hemostasia", muestra: "Plasma citratado", tubo: "Celeste (Citrato)", toma: "Ayuno 8hs", urgencia: "Alta", procesamiento: "Antes 5hs", obs: "Centrifugar y separar en tubo de plástico. Volver a centrifugar." },
  { nombre: "KPTT", area: "Hemostasia", muestra: "Plasma citratado", tubo: "Celeste (Citrato)", toma: "Ayuno 8hs", urgencia: "Alta", procesamiento: "Antes 5hs", obs: "Temperatura ambiente." },
  { nombre: "Dímeros D", area: "Hemostasia", muestra: "Plasma citratado", tubo: "Celeste (Citrato)", toma: "Ayuno 8hs", urgencia: "Alta", procesamiento: "Antes 5hs", obs: "Centrifugar y separar en tubo de plástico." },
  { nombre: "Fibrinógeno", area: "Hemostasia", muestra: "Plasma citratado", tubo: "Celeste (Citrato)", toma: "Ayuno 8hs", urgencia: "Media", procesamiento: "Diario", obs: "Temperatura ambiente." },
  { nombre: "Anticoagulante Lúpico", area: "Hemostasia", muestra: "Plasma citratado Pobre en Plaquetas", tubo: "Celeste (Citrato)", toma: "Ayuno 8hs", urgencia: "Baja", procesamiento: "Especial", obs: "Centrifugar dos veces para eliminar plaquetas." },
  
  // SECTOR QUÍMICA CLÍNICA
  { nombre: "Glucemia", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
  { nombre: "Uremia", area: "Química clínica", muestra: "Suero o Plasma", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
  { nombre: "Creatinina Sérica", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
  { nombre: "Ionograma Sérico", area: "Química clínica", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Alta", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Diario", obs: "Temperatura ambiente." },
  { nombre: "Hemoglobina Glicosilada", area: "Química clínica", muestra: "Sangre entera", tubo: "Lila (EDTA)", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Temperatura ambiente." },

  // SECTOR SEROLOGÍA
  { nombre: "VDRL Cualitativa", area: "Serología", muestra: "Suero / LCR", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Media", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Temperatura ambiente o refrigerar 4ºC." },
  { nombre: "HIV Elisa", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Extracción por la mañana. Refrigerar 4ºC." },
  { nombre: "Hepatitis B (HBsAg)", area: "Serología", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Punción venosa", urgencia: "Baja", ayuno: "8 hs", centrifugar: "Sí", separar: "Sí", procesamiento: "Mañana", obs: "Extracción por la mañana." },

  // SECTOR ORINA Y MATERIA FECAL
  { nombre: "Orina Completa", area: "Orina", muestra: "Orina (chorro medio)", tubo: "Frasco limpio", toma: "Higiene previa", urgencia: "Media", ayuno: "Ayuno 8 hs", centrifugar: "No", separar: "No", procesamiento: "2 hs", obs: "Primera orina de la mañana. Procesar en el día o refrigerar." },
  { nombre: "Parasitológico Directo", area: "Parasitología", muestra: "Materia fecal", tubo: "Frasco limpio", toma: "Muestra espontánea", urgencia: "Baja", ayuno: "No", centrifugar: "No", separar: "No", procesamiento: "Diario", obs: "Sin conservantes. Temperatura ambiente." },
  
  // SECTOR ENDOCRINOLOGÍA
  { nombre: "Cortisol", area: "Endocrino", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "8:00 AM EXACTA", urgencia: "Baja", procesamiento: "Especial", obs: "Previo ayuno 8hs. Consignar medicación. Refrigerado hasta 48hs." },
  { nombre: "PTHi (Parathormona)", area: "Endocrino", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Antes de las 9 AM", urgencia: "Baja", procesamiento: "Centrifugar ya", obs: "Centrifugar inmediatamente. Refrigerar hasta 48hs." },
  { nombre: "Prolactina", area: "Endocrino", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "8:00 AM / Reposo", urgencia: "Baja", procesamiento: "Especial", obs: "Día 3-5 del ciclo. No estrés, no alcohol, no sexo 48hs antes." },
  { nombre: "TSH / T3 / T4", area: "Endocrino", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Antes de las 9 AM", urgencia: "Baja", procesamiento: "Diario", obs: "Consignar medicación. Previo ayuno 8hs." },
  
  // SECTOR MICROBIOLOGÍA
  { nombre: "Urocultivo (Chorro Medio)", area: "Microbiología", muestra: "Orina", tubo: "Frasco Estéril", toma: "Higiene previa, descartar primer chorro", urgencia: "Media", procesamiento: "2 hs", obs: "Si demora >2hs, refrigerar a 4°C. Máximo 24hs." },
  { nombre: "Hisopado de Fauces", area: "Microbiología", muestra: "Secreción faríngea", tubo: "Medio de transporte (Stuart/Amies)", toma: "Ayuno, sin higiene bucal ni gárgaras", urgencia: "Media", procesamiento: "12 hs", obs: "No usar antisépticos bucales antes de la toma." },
  { nombre: "Hemocultivo (Adultos/Pedriátrico)", area: "Microbiología", muestra: "Sangre entera", tubo: "Frasco de cultivo específico", toma: "Asepsia estricta con clorhexidina", urgencia: "Alta", procesamiento: "Inmediato", obs: "No refrigerar. Mantener a temperatura ambiente o 37°C." },
  { nombre: "Coprocultivo", area: "Microbiología", muestra: "Materia fecal", tubo: "Frasco limpio", toma: "Muestra fresca (tamaño nuez)", urgencia: "Media", procesamiento: "Inmediato", obs: "Elegir zonas con moco o sangre. No usar laxantes." },
  { nombre: "Baciloscopía (BK) de Esputo", area: "Microbiología", muestra: "Esputo (Expectoración profunda)", tubo: "Frasco estéril de boca ancha", toma: "3 muestras (una por día)", urgencia: "Media", procesamiento: "24 hs", obs: "No es saliva. Primera mañana en ayunas es ideal." },
  { nombre: "Exudado Vaginal / Endocervical", area: "Microbiología", muestra: "Secreción vaginal", tubo: "Hisopo con medio de transporte", toma: "48 hs sin relaciones ni óvulos", urgencia: "Baja", procesamiento: "12 hs", obs: "No realizar higiene profunda previa." }
];

// Inyectar el contenedor del pedido dinámicamente si no existe
if (!document.getElementById('pedido-status')) {
    const pedidoHTML = `
        <div id="pedido-status" class="pedido-container">
            <span><i class="fas fa-list"></i> Pedido: <strong id="contador-pedido">0</strong></span>
            <div>
                <button onclick="enviarWhatsApp()" class="btn-ws"><i class="fab fa-whatsapp"></i> Enviar</button>
                <button onclick="vaciarPedido()" class="btn-clear"><i class="fas fa-trash"></i></button>
            </div>
        </div>`;
    document.querySelector('.search-section').insertAdjacentHTML('beforebegin', pedidoHTML);
}

function render() {
    const list = document.getElementById("examList");
    const search = document.getElementById("searchInput").value.toLowerCase();
    const areaFilter = document.getElementById("areaSelect").value;
    list.innerHTML = "";

    if (search.trim() === "" && areaFilter === "") return;

    const filtered = determinaciones.filter(d => {
        const matchText = d.nombre.toLowerCase().includes(search);
        const matchArea = areaFilter === "" || d.area === areaFilter;
        return matchText && matchArea;
    });

    filtered.forEach(d => {
        const li = document.createElement("li");
        
        // 1. Lógica de colores de tubos (Visual)
        let codigoColor = "#bdc3c7"; // Gris por defecto
        const tubo = d.tubo.toLowerCase();
        if (tubo.includes("lila")) codigoColor = "#9b59b6";
        if (tubo.includes("celeste")) codigoColor = "#3498db";
        if (tubo.includes("rojo") || tubo.includes("amarillo")) codigoColor = "#e74c3c";
        if (tubo.includes("estéril") || tubo.includes("verde")) codigoColor = "#2ecc71";
        if (tubo.includes("gris")) codigoColor = "#7f8c8d";

        // 2. Lógica de Urgencia (Semaforización)
        // Usamos d.urgencia porque así lo tenés en tu objeto
        const nivelUrgencia = d.urgencia ? d.urgencia.toLowerCase() : "baja";
        const claseUrgencia = `urgencia-${nivelUrgencia}`;

        li.innerHTML = `
            <div style="display: flex; align-items: center;">
                <div class="tubo-color" style="background-color: ${codigoColor}"></div>
                <div>
                    <strong>${d.nombre}</strong>
                    <span class="badge ${claseUrgencia}">${d.urgencia || 'Rutina'}</span>
                    <br><small style="color:#7f8c8d">${d.area}</small>
                </div>
            </div>
            <i class="fas fa-chevron-right" style="color:#eee"></i>
        `;
        li.onclick = () => mostrarDetalle(d);
        list.appendChild(li);
    });
}

function mostrarDetalle(d) {
    const modal = document.getElementById("modal");
    const modalData = document.getElementById("modalData");
    
    // Preparar los datos técnicos para la tarjeta visual
    const centrifugado = d.centrifugar ? d.centrifugar : "No requiere / No especifica";
    const separacion = d.separar ? d.separar : "No requiere / No especifica";

    modalData.innerHTML = `
        <h2 style="color:#3498db; margin:0 0 10px 0">${d.nombre}</h2>
        <p><strong>Sector:</strong> ${d.area}</p>
        <p><strong>Tubo:</strong> <span style="background:#eee; padding:2px 6px; border-radius:4px; font-weight:bold;">${d.tubo}</span></p>
        <p><strong>Muestra:</strong> ${d.muestra}</p>
        
        <div style="background:#f8f9fa; padding:12px; border-radius:10px; margin:10px 0; font-size:0.9em; border-left: 4px solid #3498db;">
            <p style="margin:0 0 5px 0"><strong>⚙️ PROCESAMIENTO TÉCNICO:</strong></p>
            <p><strong>Centrifugar:</strong> ${centrifugado}</p>
            <p><strong>Separar:</strong> ${separacion}</p>
            <p><strong>Estabilidad:</strong> ${d.procesamiento}</p>
        </div>

        <div style="background:#fff3cd; padding:10px; border-radius:10px; margin:10px 0; font-size:0.9em;">
            <p style="margin:0"><strong>📋 PREPARACIÓN PACIENTE:</strong></p>
            <p style="margin:5px 0 0 0">${d.toma} ${d.ayuno || ''}</p>
        </div>

        <p style="font-size:0.85em; color:#e67e22"><strong>⚠️ Obs:</strong> ${d.obs}</p>
        
        <button onclick='agregarAlPedido(${JSON.stringify(d)})' style="width:100%; background:#3498db; color:white; border:none; padding:12px; border-radius:10px; font-weight:bold; margin-top:10px; cursor:pointer;">
            + Agregar al Pedido
        </button>
    `;
    modal.style.display = "block";
}

function agregarAlPedido(estudio) {
    if (!pedidoActual.some(e => e.nombre === estudio.nombre)) {
        pedidoActual.push(estudio);
        actualizarInterfaz();
    }
    cerrarModal();
}

function actualizarInterfaz() {
    const status = document.getElementById("pedido-status");
    document.getElementById("contador-pedido").innerText = pedidoActual.length;
    status.style.display = pedidoActual.length > 0 ? "flex" : "none";
}

function vaciarPedido() { pedidoActual = []; actualizarInterfaz(); }

function enviarWhatsApp() {
    if (pedidoActual.length === 0) return;

    let mensaje = "*INDICACIONES PARA TU ESTUDIO DE LABORATORIO* 🔬\n";
    mensaje += "================================\n\n";
    mensaje += "Hola, para que podamos realizar tus análisis correctamente, por favor seguí estas instrucciones:\n\n";

    pedidoActual.forEach((est, index) => {
        mensaje += `✅ *${est.nombre.toUpperCase()}*\n`;
        
        // Solo enviamos preparación y recolección
        mensaje += `• *Preparación:* ${est.toma} ${est.ayuno || ''}\n`;
        
        // Si hay observaciones (donde solemos poner cómo recolectar), las sumamos
        if(est.obs) mensaje += `• *Importante:* ${est.obs}\n`;
        
        mensaje += "--------------------------------\n";
    });

    mensaje += "\n📍 *Posadas, Misiones*\n";
    mensaje += "_Por favor, recordá traer tu DNI y la orden médica._";

    // Codificar y abrir WhatsApp
    const textoCodificado = encodeURIComponent(mensaje);
    window.open(`https://wa.me/?text=${textoCodificado}`, '_blank');
}

function cerrarModal() { document.getElementById("modal").style.display = "none"; }

// Cerrar con la X o haciendo clic fuera
document.querySelector(".close").onclick = cerrarModal;
window.onclick = (e) => { if (e.target == document.getElementById("modal")) cerrarModal(); };

// Listeners
document.getElementById("searchInput").addEventListener("input", render);
document.getElementById("areaSelect").addEventListener("change", render);
