// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// ================== Config ==================
const MAX_NOMBRES = 50; // cámbialo si quieres

// Estado
const amigos = [];
const amigosIdx = new Set(); // para anti-duplicados (normalizado)

// Nodos
const $input = document.getElementById('amigo');
const $lista = document.getElementById('listaAmigos');
const $resultado = document.getElementById('resultado');

// ================== Utilidades ==================
// Título por palabras: "ana maria pérez" -> "Ana Maria Pérez"
function toTitleCase(str) {
  return str.replace(/\p{L}+/gu, m => m[0].toUpperCase() + m.slice(1).toLowerCase());
}

// Normaliza: recorta, colapsa espacios, título
function normalizaNombre(str) {
  return toTitleCase(str.trim().replace(/\s+/g, ' '));
}

// Valida que haya al menos 2 palabras compuestas SOLO por letras (acepta acentos y ñ)
// Permite guion o apóstrofo dentro de la palabra (ej: "María-José", "D'Angelo")
function esNombreYApellidoValido(nombre) {
  const partes = nombre.split(' ');
  if (partes.length < 2) return false;
  return partes.every(p => /^[\p{L}]+(?:[-'][\p{L}]+)*$/u.test(p));
}

function claveNormalizada(nombre) {
  // para comparar duplicados de forma robusta
  return nombre.toLowerCase();
}

function renderLista() {
  $lista.innerHTML = '';
  amigos.forEach((nombre, i) => {
    const li = document.createElement('li');
    li.className = 'name-item';
    li.textContent = nombre;

    // Botón eliminar individual
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'name-remove';
    btn.setAttribute('aria-label', `Eliminar ${nombre}`);
    btn.textContent = '×';
    btn.onclick = () => eliminarAmigo(i);

    li.appendChild(btn);
    $lista.appendChild(li);
  });
}

// ================== Acciones ==================
function agregarAmigo() {
  if (!$input) return;

  if (amigos.length >= MAX_NOMBRES) {
    alert(`Máximo permitido: ${MAX_NOMBRES} nombres.`);
    return;
  }

  const raw = $input.value;
  const limpio = normalizaNombre(raw);

  if (!limpio) {
    alert('Escribe un nombre.');
    return;
  }
  if (!esNombreYApellidoValido(limpio)) {
    alert('Debe ser nombre y apellido (solo letras). Ej: "Ana Pérez".');
    return;
  }

  const key = claveNormalizada(limpio);
  if (amigosIdx.has(key)) {
    alert('Ese nombre ya está en la lista.');
    return;
  }

  amigos.push(limpio);
  amigosIdx.add(key);
  $input.value = '';
  renderLista();
  $input.focus();
}

function eliminarAmigo(index) {
  const nombre = amigos[index];
  amigos.splice(index, 1);
  amigosIdx.delete(claveNormalizada(nombre));
  renderLista();
}

function vaciarLista() {
  if (!amigos.length) {
    alert('La lista ya está vacía.');
    return;
  }
  const ok = confirm('¿Vaciar toda la lista de nombres?');
  if (!ok) return;

  amigos.length = 0;
  amigosIdx.clear();
  $lista.innerHTML = '';
  $resultado.innerHTML = '';
  $input.value = '';
  $input.focus();
}

function sortearAmigo() {
  $resultado.innerHTML = '';

  if (amigos.length < 2) {
    alert('Añade al menos 2 nombres para sortear.');
    return;
  }

  const pool = [...amigos];
  const li = document.createElement('li');
  li.className = 'result-item';
  li.textContent = '🎡 Sorteando…';
  $resultado.appendChild(li);

  let i = 0;
  const intervalo = 70;   // ms
  const duracion = 2000;  // ms

  const id = setInterval(() => {
    li.textContent = pool[i % pool.length];
    i++;
  }, intervalo);

  setTimeout(() => {
    clearInterval(id);
    const ganador = pool[Math.floor(Math.random() * pool.length)];
    li.innerHTML = `🎉 El amigo secreto es: <strong>${ganador}</strong>`;
  }, duracion);
}

// Enter para añadir
if ($input) {
  $input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarAmigo();
  });
}

// Exponer a HTML (onclick)
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
window.vaciarLista = vaciarLista;

