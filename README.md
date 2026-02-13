# Burger House — Sitio Web Estático

Proyecto web estático para el restaurante Burger House. Implementa un landing con navegación lateral, hero, menú filtrable, paquetes, feedback y FAQ, utilizando Tailwind CSS vía CDN y JavaScript modular.

## Características
- Diseño responsive y compatible con navegadores modernos
- Paleta y tipografías configuradas con Tailwind CDN
- Menú dinámico con filtrado por categorías
- Formulario de opinión con validación accesible
- Código separado en HTML, CSS y JS

## Estructura de carpetas
```
web estaticas/
├─ burger.html
├─ css/
│  └─ burger.css
├─ js/
│  ├─ burger.js
│  └─ tailwind-config.js
├─ assets/
│  ├─ hero.png
│  └─ portada.png
└─ docs/
   └─ api.md
```

## Instalación y uso
1. No requiere instalación. Abra `burger.html` en su navegador.
2. Para servir localmente, use cualquier servidor estático (por ejemplo, `npx serve`).
3. Asegúrese de mantener la estructura de carpetas para que las rutas funcionen.

## Personalización
- Colores y fuentes: edite `js/tailwind-config.js`.
- Estilos adicionales: agregue reglas en `css/burger.css`.
- Productos del menú: edite el arreglo `products` en `js/burger.js`.

## Documentación de API (JS)
Consulte [`docs/api.md`](docs/api.md) para los detalles de las funciones expuestas (renderizado, filtrado y menú).

## Accesibilidad
- Controles de calificación con roles ARIA
- Validaciones con mensajes visibles y navegables por teclado

## Compatibilidad
Probado con las últimas versiones de Chrome, Firefox y Edge. En Safari, el soporte de `backdrop-filter` puede variar.

## Licencia
Uso interno para Burger House.
