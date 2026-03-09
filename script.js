const determinaciones = [
  // SECTOR HEMATOLOGÍA
 { nombre: "Eritrosedimentación", area: "Hematología", muestra: "Sangre entera con EDTA", tubo: "Lila (EDTA)", toma: "Ayuno 8hs", urgencia: "Media", procesamiento: "Dentro de las 4hs", obs: "Temperatura ambiente." },
  { nombre: "Hemograma", area: "Hematología", muestra: "Sangre entera con EDTA", tubo: "Lila (EDTA)", toma: "Ayuno 8hs", urgencia: "Alta", procesamiento: "Dentro de las 4hs", obs: "Temperatura ambiente." },
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

function render() {
    const list = document.getElementById("examList");
    const search = document.getElementById("searchInput").value.toLowerCase();
    const areaFilter = document.getElementById("areaSelect").value;
    
    list.innerHTML = "";

    // No mostrar nada si no hay búsqueda activa
    if (search.trim() === "" && areaFilter === "") return;

    const filtered = determinaciones.filter(d => {
        const matchText = d.nombre.toLowerCase().includes(search);
        const matchArea = areaFilter === "" || d.area === areaFilter;
        return matchText && matchArea;
    });

    filtered.forEach(d => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
                <strong style="color:#2c3e50">${d.nombre}</strong><br>
                <small style="color:#3498db">${d.area}</small>
            </div>
            <i class="fas fa-chevron-right" style="color:#bdc3c7"></i>
        `;
        li.onclick = () => mostrarDetalle(d);
        list.appendChild(li);
    });
}

function mostrarDetalle(d) {
    const modal = document.getElementById("modal");
    const modalData = document.getElementById("modalData");
    
    modalData.innerHTML = `
        <h2 style="color:#3498db; margin-top:0">${d.nombre}</h2>
        <p><strong>Sector:</strong> ${d.area}</p>
        <p><strong>Muestra:</strong> ${d.muestra}</p>
        <p><strong>Tubo:</strong> ${d.tubo}</p>
        <p><strong>Toma de muestra:</strong> ${d.toma}</p>
        <p><strong>Estabilidad:</strong> ${d.procesamiento}</p>
        <hr>
        <p style="background:#f9f9f9; padding:10px; border-radius:8px; font-style:italic">
            <strong>Obs:</strong> ${d.obs}
        </p>
    `;
    modal.style.display = "block";
}

// Cerrar modal
document.querySelector(".close").onclick = () => document.getElementById("modal").style.display = "none";
window.onclick = (event) => {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
}

// Listeners
document.getElementById("searchInput").addEventListener("input", render);
document.getElementById("areaSelect").addEventListener("change", render);
