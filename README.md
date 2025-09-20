# amigo-secreto


Mini-app en JavaScript para jugar Amigo Secreto. Escribo los nombres, doy clic en Sortear amigo y aparece un ganador con efecto de “ruleta”. Puedo eliminar nombres uno por uno o vaciar toda la lista.

¿Qué hace?

Añadir participantes (obliga Nombre Apellido). <img width="950" height="940" alt="image" src="https://github.com/user-attachments/assets/f574aa45-08c6-48d9-be99-3e3cec2c6911" />

Evita duplicados (normaliza mayúsculas/espacios). <img width="946" height="953" alt="image" src="https://github.com/user-attachments/assets/6aee6892-f873-451a-839f-f2a802a37465" />

Ruleta visual al sortear y muestra el ganador.
Botón × para borrar un nombre.
Botón Vaciar lista para empezar de cero.
Soporta tecla Enter para añadir rápido.

Cómo correrlo

Clona o descarga este repo.
Abre la carpeta en VS Code.
(Opcional, recomendado) Instala la extensión Live Server.
Abre index.html con Live Server

Cómo usarlo

Escribe Nombre Apellido en el input y presiona Añadir (o Enter).
Repite hasta completar la lista.
Presiona Sortear amigo → se muestra el ganador.
Usa × para eliminar un nombre puntual o Vaciar lista para limpiar todo.

Reglas de validación

No acepta vacíos ni una sola palabra: debe ser Nombre Apellido.

Solo letras (admite acentos/ñ, guion y apóstrofo dentro de la palabra).
No permite duplicados (normaliza “ANA lópez” → “Ana López”).
<img width="929" height="901" alt="image" src="https://github.com/user-attachments/assets/0c469581-d909-4c0c-9378-92cfcc1b98ea" />
