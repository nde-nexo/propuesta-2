# API JavaScript

Funciones expuestas globalmente para interacción desde el HTML.

## toggleMenu()
Abre/cierra el menú lateral y sincroniza el overlay.

## filterMenu(category)
Renderiza productos de una categoría y actualiza el estado visual de los botones.
- Parámetros: `category` = 'all' | 'burger' | 'chicken' | 'hotdog' | 'extras'

## renderProducts(filter = 'all')
Construye tarjetas en el grid `#menu-grid`. No está expuesta globalmente; úsela desde `burger.js`.

## initFeedbackForm()
Inicializa la interacción de estrellas y la validación del formulario de feedback.
