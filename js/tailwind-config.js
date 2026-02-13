/* Configuración de Tailwind para el modo CDN */
/* Debe cargarse después del script de Tailwind y antes de usar las clases */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        bh: {
          dark: '#1F2937',
          gold: '#F2C94C',
          yellow: '#FFC107',
          olive: '#8A7F2D',
          red: '#9B2C2C',
        },
      },
      fontFamily: {
        head: ['Oswald', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
};
