# Construcción Americana Larquin - Sitio Web Moderno

Sitio web rediseñado para Construcción Americana Larquin, constructora especializada en construcción residencial al estilo americano con más de 20 años de experiencia en Delicias, Chihuahua.

## 🚀 Características

- **Diseño Moderno y Profesional**: Interfaz limpia y atractiva usando React + Bootstrap
- **Totalmente Responsive**: Se adapta perfectamente a todos los dispositivos (móvil, tablet, desktop)
- **Rendimiento Optimizado**: Construcción con Vite para tiempos de carga rápidos
- **Componentes Reutilizables**: Código organizado y mantenible
- **Orientado a Conversión**: CTAs estratégicos y flujo optimizado para captar clientes

## 📋 Estructura del Proyecto

```
larquin/
├── public/                    # Archivos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── components/
│   │   ├── layout/           # Componentes de estructura
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ...
│   │   ├── sections/         # Secciones de la página
│   │   │   ├── Hero.jsx
│   │   │   ├── ValueProposition.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Process.jsx
│   │   │   └── ...
│   │   └── common/           # Componentes comunes reutilizables
│   ├── assets/               # Assets procesados por Vite
│   │   └── images/
│   ├── App.jsx               # Componente principal
│   ├── App.css
│   ├── index.css             # Estilos globales
│   └── main.jsx             # Punto de entrada
├── package.json
└── vite.config.js
```

## 🛠️ Tecnologías Utilizadas

- **React 19.2.0**: Biblioteca principal para construcción de UI
- **Vite 7.3.1**: Herramienta de construcción y desarrollo
- **Bootstrap 5**: Framework CSS para diseño responsive
- **React-Bootstrap**: Componentes de Bootstrap para React
- **Bootstrap Icons**: Iconografía moderna

## 📦 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Navegar a la carpeta del proyecto**:
   ```bash
   cd /Users/alejandroballesteros/Development/React/larquin
   ```

2. **Instalar dependencias** (si aún no están instaladas):
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   - El servidor estará disponible en `http://localhost:5173` (o el puerto que Vite asigne)
   - Por defecto el puerto es 5173, pero si está ocupado usará el siguiente disponible

## 🖼️ Configuración de Imágenes

### ⚠️ IMPORTANTE: Imágenes Faltantes

El sitio actualmente tiene placeholders vacíos para las imágenes. **Necesitas agregar las imágenes reales** para que el sitio se vea correctamente.

### Imágenes Requeridas

Debes colocar las siguientes imágenes en la carpeta `public/`:

#### Logo:
- `logotipo-larquin-extendido-m6LwPrKMgKuwo13v.png` - Logo principal

#### Hero (Fondo):
- `foto-larquin-53-BWy_t8sGGUfQbR-7.webp` - Imagen de fondo del Hero

#### Proyectos:
- `foto-larquin-34-B2CPdQ_VrGOPLv2E.webp` - Proyecto 1
- `foto-larquin-35-C_d3Dl-KsQXMZG03.webp` - Proyecto 2
- `foto-larquin-37-Drs-CPEoYGBqHICt.webp` - Proyecto 3

### Opciones para Obtener las Imágenes:

1. **Del sitio anterior**: Si tienes acceso a las imágenes del sitio original, cópialas a `public/`

2. **Imágenes propias**: Usa tus propias fotos de proyectos y el logo de la empresa

3. **Placeholders temporales**: Mientras tanto puedes usar:
   - [Unsplash](https://unsplash.com) - Busca: "american house construction"
   - [Pexels](https://pexels.com) - Busca: "residential construction"
   - [Loremflickr](https://loremflickr.com) - Placeholders rápidos

4. **Actualizar nombres**: Si tus imágenes tienen nombres diferentes, actualiza las rutas en:
   - `src/components/sections/Hero.jsx` (línea con background-image)
   - `src/components/sections/Projects.jsx` (array de projects)
   - `src/components/layout/Navbar.jsx` (src del logo)
   - `src/components/layout/Footer.jsx` (src del logo)

## 🎨 Personalización

### Colores

Los colores principales se definen en `src/index.css`:

```css
:root {
  --primary-color: #007bff;      /* Azul principal */
  --secondary-color: #0056b3;    /* Azul oscuro */
  --dark-color: #333;             /* Texto oscuro */
  --light-color: #f8f9fa;         /* Fondo claro */
  --text-color: #666;             /* Texto general */
}
```

Para cambiar el esquema de colores, simplemente modifica estos valores.

### Fuentes

El sitio usa las mismas fuentes que el sitio original:
- **Hammersmith One**: Títulos y encabezados
- **Open Sans**: Texto general

Se cargan automáticamente desde Google Fonts en `src/index.css`.

### Secciones del Home

El sitio está dividido en las siguientes secciones:

1. **Hero**: Banner principal con mensaje impactante y CTAs
2. **Value Proposition**: 4 valores clave de la empresa (Experiencia, Soluciones, Innovación, Especialización)
3. **Services**: Grid de 12 servicios detallados
4. **Projects**: Showcase de 3 proyectos actuales en desarrollo
5. **Process**: Timeline de 5 etapas del proceso llave en mano
6. **Footer**: Información de contacto, navegación y redes sociales

Cada sección es un componente independiente que puedes editar en `src/components/sections/`.

## 📱 Responsive Design

El sitio es **100% responsive** con breakpoints optimizados:
- **Mobile**: < 768px
- **Tablet**: 768px - 991px  
- **Desktop**: > 992px

Cada componente tiene estilos específicos para cada tamaño de pantalla usando media queries.

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo con hot-reload

# Producción
npm run build        # Construye para producción en /dist
npm run preview      # Preview local del build de producción

# Linting
npm run lint         # Ejecuta ESLint para verificar código
```

## 📈 Próximos Pasos / Mejoras Futuras

- [ ] **URGENTE**: Agregar imágenes reales del sitio
- [ ] Crear página independiente de "Nosotros" con historia completa
- [ ] Expandir galería de proyectos con más ejemplos
- [ ] Implementar formulario de contacto funcional (backend)
- [ ] Agregar mapa de Google Maps con ubicación
- [ ] Sistema de blog para actualizaciones y noticias
- [ ] Integrar Google Analytics para métricas
- [ ] Optimizar imágenes (compresión, lazy loading)
- [ ] Agregar animaciones suaves con Framer Motion
- [ ] WhatsApp widget flotante para contacto rápido
- [ ] Sección de testimonios de clientes
- [ ] Certificaciones y reconocimientos

## 📞 Información de Contacto

**Construcción Americana Larquin**
- **Dirección**: Carretera Delicias-Meoqui Km 2, Cd. Delicias, Chihuahua
- **Teléfono**: [639 129 4600](tel:6391207930)
- **Email**: [contacto@construccionamericanalarquin.com](mailto:contacto@construccionamericanalarquin.com)
- **WhatsApp**: [+52 639 129 4600](https://wa.me/526391207930)

## 📝 Notas de Desarrollo

### Componentes Creados ✅

**Layout:**
- `Navbar.jsx` - Barra de navegación fija con logo y menú responsive
- `Footer.jsx` - Pie de página con información de contacto

**Sections:**
- `Hero.jsx` - Banner principal con imagen de fondo y CTAs
- `ValueProposition.jsx` - 4 valores clave con iconos animados
- `Services.jsx` - Grid de 12 servicios con descripciones
- `Projects.jsx` - Showcase de 3 proyectos con imágenes
- `Process.jsx` - Timeline visual de 5 etapas del proceso

### Características Implementadas ✅

- ✅ Scroll suave entre secciones (smooth scroll)
- ✅ Navbar fijo que permanece visible al hacer scroll
- ✅ Animaciones hover en todas las tarjetas
- ✅ Bootstrap Icons integrado (bi-*)
- ✅ Diseño responsive en todos los componentes
- ✅ Estilos consistentes con identidad de marca
- ✅ Navegación funcional entre secciones
- ✅ CTAs estratégicos para conversión
- ✅ Enlaces de contacto (teléfono, email, WhatsApp)

### Organización del Código ✅

- ✅ Componentes modulares y reutilizables
- ✅ Cada componente con su propio archivo CSS
- ✅ Estructura de carpetas clara (layout, sections, common)
- ✅ Variables CSS para colores y fuentes
- ✅ Código limpio y bien comentado

---

**Desarrollado para Construcción Americana Larquin** © 2025
