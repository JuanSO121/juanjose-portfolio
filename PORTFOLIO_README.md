# Portafolio Profesional - Juan José Sánchez Ocampo

Portafolio web profesional, moderno y minimalista desarrollado con React, TypeScript y TailwindCSS.

## 🎨 Características

- **Diseño Minimalista**: Estilo elegante con mucho espacio en blanco
- **Paleta de Colores**: Azul oscuro (#0D1B2A) con acentos en verde esmeralda (#10B981)
- **Animaciones Suaves**: Transiciones y animaciones fade-in para mejor UX
- **Responsive**: Totalmente adaptable a dispositivos móviles
- **SEO Optimizado**: Meta tags y estructura semántica HTML

## 📋 Secciones

1. **Home/Hero** - Presentación principal con gradiente tecnológico
2. **Sobre mí** - Descripción profesional y destacados
3. **Competencias Técnicas** - Tecnologías organizadas por categorías
4. **Proyectos Destacados** - 3 proyectos principales con imágenes generadas por IA
5. **Formación** - Educación académica y certificaciones
6. **Contacto** - Formulario de contacto y enlaces sociales

## 🚀 Tecnologías Utilizadas

- React 18
- TypeScript
- TailwindCSS
- Vite
- Shadcn/ui Components
- Lucide Icons

## 📦 Instalación Local

\`\`\`bash
# Clonar el repositorio
git clone <tu-repositorio>

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
\`\`\`

## 🌐 Despliegue

### Opción 1: Lovable (Recomendado)
1. Click en "Publish" en la esquina superior derecha
2. Click en "Update" para actualizar cambios
3. Tu sitio estará en: `https://tu-proyecto.lovable.app`

### Opción 2: Vercel
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Opción 3: Netlify
1. Conecta tu repositorio de GitHub
2. Configura:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📝 Personalización

### Actualizar Información Personal
Edita los archivos en `src/components/portfolio/`:
- `ContactSection.tsx` - Información de contacto
- `AboutSection.tsx` - Descripción personal
- `ProjectsSection.tsx` - Proyectos destacados
- `EducationSection.tsx` - Formación académica

### Cambiar Colores
Edita `src/index.css` para modificar la paleta de colores:
```css
:root {
  --primary: 210 100% 12%;  /* Azul oscuro */
  --accent: 158 64% 52%;     /* Verde esmeralda */
}
```

### Agregar Más Proyectos
En `ProjectsSection.tsx`, añade objetos al array `projects`:
```typescript
{
  title: "Nuevo Proyecto",
  description: "Descripción",
  image: importedImage,
  tags: ["Tech1", "Tech2"],
}
```

## 📸 Imágenes

Las imágenes de los proyectos fueron generadas con IA y están en:
- `src/assets/hero-bg.jpg` - Fondo del hero
- `src/assets/project-plant-diagnosis.jpg`
- `src/assets/project-productivity.jpg`
- `src/assets/project-request.jpg`

Puedes reemplazarlas con tus propias capturas de pantalla.

## 📧 Contacto

- **Email**: juanjosesanchezocampo2@gmail.com
- **WhatsApp**: +57 316 447 5039
- **LinkedIn**: [linkedin.com/in/juan-jose-sánchez-a36036287](https://www.linkedin.com/in/juan-jose-sánchez-a36036287)
- **Ubicación**: Cali, Colombia

## 📄 Licencia

© 2025 Juan José Sánchez Ocampo. Todos los derechos reservados.

---

**Portafolio generado con estilo profesional para Juan José Sánchez Ocampo** ✨
