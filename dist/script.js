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
  { nombre: "TSH / T3 / T4", area: "Endocrino", muestra: "Suero", tubo: "Rojo/Amarillo", toma: "Antes de las 9 AM", urgencia: "Baja", procesamiento: "Diario", obs: "Consignar medicación. Previo ayuno 8hs." }
];

/**
 * Función principal para renderizar la lista lateral
 */
function render() {
  const list = document.getElementById("examList");
  const search = document.getElementById("searchInput").value.toLowerCase();
  list.innerHTML = "";

  // Filtrar por nombre o por área
  const filtered = determinaciones.filter(d => 
    d.nombre.toLowerCase().includes(search) || 
    d.area.toLowerCase().includes(search)
  );

  filtered.forEach(d => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <strong>${d.nombre}</strong><br>
          <small style="color:#7f8c8d">${d.area}</small>
        </div>
        <i class="fas fa-chevron-right" style="font-size:0.8em; color:#ddd"></i>
      </div>
    `;
    li.onclick = () => mostrarDetalle(d);
    list.appendChild(li);
  });
}

/**
 * Función para mostrar la tarjeta de detalles con animaciones
 */
function mostrarDetalle(d) {
  const card = document.getElementById("detailCard");
  card.classList.remove("hidden");

  // Inyectar datos en el DOM
  document.getElementById("d-name").textContent = d.nombre;
  document.getElementById("d-area").textContent = d.area;
  document.getElementById("d-muestra").textContent = d.muestra;
  document.getElementById("d-toma").textContent = d.toma;
  document.getElementById("d-ayuno").textContent = d.ayuno;
  document.getElementById("d-centrifugar").textContent = d.centrifugar;
  document.getElementById("d-separar").textContent = d.separar;
  document.getElementById("d-procesamiento").textContent = d.procesamiento;
  document.getElementById("d-obs").innerHTML = d.obs;

  // Lógica para etiquetas de Urgencia
  const urg = document.getElementById("d-urgencia");
  urg.textContent = d.urgencia;
  urg.className = "badge " + d.urgencia.toLowerCase();

  // Lógica para etiquetas de Tubos (Color dinámico)
  const tubo = document.getElementById("d-tubo");
  tubo.textContent = d.tubo;
  tubo.className = "tubo-badge"; // Reset clases
  
  const tStr = d.tubo.toLowerCase();
  if (tStr.includes("lila") || tStr.includes("edta")) tubo.classList.add("lila");
  else if (tStr.includes("celeste") || tStr.includes("citrato")) tubo.classList.add("celeste");
  else if (tStr.includes("rojo") || tStr.includes("amarillo") || tStr.includes("suero")) tubo.classList.add("rojo");
  else if (tStr.includes("frasco") || tStr.includes("estéril")) tubo.classList.add("estéril");
  else tubo.classList.add("gris"); // Color por defecto

  // Scroll suave hacia arriba en móviles al seleccionar
  if (window.innerWidth < 768) {
    card.scrollIntoView({ behavior: 'smooth' });
  }
}

// Event Listeners
document.getElementById("searchInput").addEventListener("input", render);

// Inicialización
render();