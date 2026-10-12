Soy Matthew McCrea Steele, developer fullstack (.NET/C#/ASP.NET/SQL Server), y estoy armando
"McCrea Digital", mi estudio freelance de desarrollo web para pymes locales en Buenos Aires,
Argentina (páginas web y landing pages).

Te adjunto un archivo HTML (McCrea_Digital_-_Landing.dc.html) que es el diseño ya aprobado de
mi landing page, hecho con una herramienta de diseño. Quiero que lo uses como referencia de
contenido, estructura y estilo visual, pero necesito que lo reconstruyas como código estático
limpio y production-ready (HTML + CSS + JS vanilla, sin frameworks pesados) porque el archivo
original tiene dependencias de esa herramienta de diseño (componentes <image-slot>, un
design system bundle, scripts propios) que no sirven fuera de ahí.

Qué necesito que hagas:
1. Recrear la landing en HTML semántico + CSS propio (separado en su archivo), manteniendo
   el contenido, secciones y jerarquía visual del diseño adjunto: header sticky con logo,
   hero, sección de trabajos/casos, proceso (4 pasos), planes (3 tarjetas de precio), sobre mí,
   y contacto con formulario.
2. Reemplazar los <image-slot> del original por placeholders simples (divs con fondo de color
   y texto tipo "Foto próximamente" o similar) que yo pueda reemplazar después por imágenes reales.
3. El logo es un SVG simple (dos chevrones: uno azul marino #0E2A47 arriba, uno verde #24A87A
   abajo) — está en el HTML original, usalo tal cual.
4. Paleta de marca: azul marino #0E2A47 (base), verde #24A87A (acento), verde profundo #1C7E5C
   (texto sobre blanco), niebla #F2F6FA (fondos claros), gris acero #6B7B86 (texto secundario),
   verde claro #4FD6A8 (solo sobre azul marino).
5. Tipografía: Sora (títulos, pesos 500/600) y Figtree (texto), cargadas desde Google Fonts.
6. Responsive mobile-first — la mayoría de mis clientes van a entrar desde el celular.
7. El formulario de contacto (nombre, negocio, email/WhatsApp) tiene que quedar preparado para
   Netlify Forms: atributo data-netlify="true" en el <form>, un input hidden name="form-name"
   con el mismo valor que el atributo name del form, y un campo honeypot oculto para evitar spam
   (siguiendo la documentación estándar de Netlify Forms). No hace falta backend propio.
8. Metadata básica: title, meta description, favicon simple con el símbolo de la marca,
   Open Graph tags básicos (título, descripción) para que se vea bien si comparto el link.
9. Optimizado para deploy directo en Netlify: estructura simple (index.html en la raíz, /css,
   /js, /assets), sin build step si es posible (o con uno mínimo si hace falta).

Deploy:
Esto lo voy a hostear gratis en Netlify. Dejame la estructura de carpetas lista para hacer
deploy por drag & drop en app.netlify.com/drop, y decime también cómo conectarlo a un
repositorio de GitHub para que haga deploy automático en cada push (tengo cuenta de GitHub,
organización "M&M Technologies").

Dominio: a futuro voy a conectar un dominio propio (mccreadigital.com o similar) — dejalo
preparado para eso pero no es bloqueante ahora, puedo arrancar con el subdominio gratuito
de Netlify.

Repo de GitHub:
- Nombre: mccrea-digital-landing
- Descripción: Landing page de McCrea Digital — estudio freelance de desarrollo web para
  pymes en Buenos Aires. HTML/CSS/JS estático, deploy en Netlify.

README.md (usalo como base, completalo con la URL real de producción una vez deployado):

# McCrea Digital — Landing Page

Landing page de McCrea Digital, estudio freelance de desarrollo web especializado en
páginas web y landing pages para pymes locales de Buenos Aires, Argentina.

Sitio en producción: [completar URL de Netlify]

## Stack
- HTML5 + CSS3 + JavaScript vanilla (sin frameworks)
- Sin build step — sitio estático puro
- Formulario de contacto vía Netlify Forms
- Fuentes: Sora y Figtree (Google Fonts)
- Deploy y hosting: Netlify (plan gratuito)

## Estructura
├── index.html
├── css/styles.css
├── js/main.js
└── assets/ (logo, íconos, imágenes)

## Desarrollo local
Sitio estático — alcanza con abrir index.html, o servirlo localmente con: npx serve .

## Deploy
Deploy automático en Netlify con cada push a main. Para deploy manual, arrastrar la
carpeta a app.netlify.com/drop.

## Marca
Azul marino #0E2A47 como color base, verde #24A87A como acento.

## Contacto
Matthew McCrea Steele — hola@mccreadigital.com — @mccreadigital

© 2026 McCrea Digital. Todos los derechos reservados.
