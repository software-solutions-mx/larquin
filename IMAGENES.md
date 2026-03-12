# 📝 Guía Rápida: Actualizar Nombres de Imágenes

Si tus imágenes tienen nombres diferentes a los esperados, sigue estos pasos:

## Paso 1: Identificar tus imágenes

Coloca todas tus imágenes en la carpeta `public/` y anota sus nombres exactos.

## Paso 2: Actualizar las rutas en los componentes

### Hero Section (Imagen de fondo)
**Archivo**: `src/components/sections/Hero.css`  
**Línea**: ~3-8

Busca:
```css
background-image: url('/foto-larquin-53-BWy_t8sGGUfQbR-7.webp');
```

Reemplaza con el nombre de tu imagen:
```css
background-image: url('/MI-IMAGEN-HERO.jpg');
```

---

### Navbar (Logo)
**Archivo**: `src/components/layout/Navbar.jsx`  
**Línea**: ~20

Busca:
```jsx
src="/logotipo-larquin-extendido-m6LwPrKMgKuwo13v.png"
```

Reemplaza con:
```jsx
src="/MI-LOGO.png"
```

---

### Footer (Logo)
**Archivo**: `src/components/layout/Footer.jsx`  
**Línea**: ~10

Busca:
```jsx
src="/logotipo-larquin-extendido-m6LwPrKMgKuwo13v.png"
```

Reemplaza con:
```jsx
src="/MI-LOGO.png"
```

---

### Projects (3 imágenes de proyectos)
**Archivo**: `src/components/sections/Projects.jsx`  
**Líneas**: ~6-24

Busca el array de `projects` y actualiza cada `image`:

```jsx
const projects = [
  {
    image: '/MI-PROYECTO-1.jpg',  // ← Actualiza aquí
    title: 'Residencia Estilo Americano',
    // ...
  },
  {
    image: '/MI-PROYECTO-2.jpg',  // ← Actualiza aquí
    title: 'Remodelación Integral',
    // ...
  },
  {
    image: '/MI-PROYECTO-3.jpg',  // ← Actualiza aquí
    title: 'Construcción Residencial',
    // ...
  }
];
```

---

## Paso 3: Verificar que funciona

1. Guarda todos los cambios
2. El navegador se refrescará automáticamente (Hot Module Replacement)
3. Verifica que las imágenes se muestren correctamente

## Notas Importantes

- ✅ Los nombres de archivo **distinguen mayúsculas/minúsculas**
- ✅ Coloca las imágenes directamente en `public/`, no en subcarpetas
- ✅ Las rutas deben empezar con `/` (ej: `/mi-imagen.jpg`)
- ✅ Formatos soportados: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`

## Ejemplo Completo

Si tienes estas imágenes en `public/`:
```
public/
├── logo-larquin.png
├── hero-construccion.jpg
├── proyecto-casa-1.jpg
├── proyecto-casa-2.jpg
└── proyecto-casa-3.jpg
```

Actualiza así:

**Hero.css**:
```css
background-image: url('/hero-construccion.jpg');
```

**Navbar.jsx & Footer.jsx**:
```jsx
src="/logo-larquin.png"
```

**Projects.jsx**:
```jsx
image: '/proyecto-casa-1.jpg'
image: '/proyecto-casa-2.jpg'
image: '/proyecto-casa-3.jpg'
```

---

**¿Necesitas ayuda?** Revisa el README.md principal para más detalles.
