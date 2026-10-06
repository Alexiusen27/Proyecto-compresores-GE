# Guía de intervención GA 75 (PWA)

App instalable con el modelo 3D del compresor Atlas Copco GA 75, sus partes, chequeos y herramientas.

## Archivos
- index.html: la app
- manifest.webmanifest: nombre, colores e íconos
- sw.js: modo sin conexión
- icon-192.png, icon-512.png, icon-maskable-512.png: íconos

## Cómo publicarla
Sube la carpeta completa a un servidor web con **HTTPS** (obligatorio para instalarla, salvo en localhost). Opciones: el servidor de la empresa (IIS, Apache, Nginx) o un servicio de páginas estáticas como GitHub Pages o Netlify.
Para probar en tu computador: abre una terminal en la carpeta y ejecuta `python3 -m http.server 8000`, luego entra a http://localhost:8000

## Cómo instalarla
- Android (Chrome): abre la dirección y toca "Instalar app" o el menú ⋮ > Instalar aplicación.
- iPhone/iPad (Safari): botón Compartir > Agregar a pantalla de inicio.
- Computador (Chrome o Edge): ícono de instalación en la barra de direcciones.

## Modo sin conexión
Abre la app **una vez con internet**: así guarda también las librerías 3D (Three.js, exportador y JSZip, que se cargan de cdnjs y jsdelivr). Después funciona sin señal.

## Actualizaciones
Cuando cambies index.html, edita en sw.js la línea `const V="ga75-v2";` (por ejemplo a ga75-v3) para que los dispositivos descarguen la versión nueva.

## Datos
Las ediciones y los chequeos se guardan en cada dispositivo (localStorage). Para llevarlos a otro equipo usa Exportar/Importar en la pestaña Ficha. Compartirlos automáticamente requiere una base de datos propia.

## Exportar a Blender
El botón "Exportar a Blender" descarga un zip con el modelo en formato .glb (Archivo > Importar > glTF 2.0 en Blender).
