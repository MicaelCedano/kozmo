import { modelNames } from "./product";

// Las variantes de color son imágenes editadas a partir de las fotografías suministradas.
// Orden del ciclo: Blue, Black, Silver, Orange.
export const heroModels = [
  { name: modelNames.pad, className: "hero-pro", photos: [
    { src: "/images/kozmo/colors/blue.webp", color: "azul", light: "#193557" },
    { src: "/images/kozmo/colors/black.webp", color: "negro", light: "#202126" },
    { src: "/images/kozmo/colors/silver.webp", color: "plata", light: "#44474c" },
    { src: "/images/kozmo/colors/orange.webp", color: "naranja", light: "#58301a" },
  ] },
  { name: modelNames.ultra, className: "", photos: [
    { src: "/images/kozmo/normal-azul.png", color: "azul", light: "#193557" },
    { src: "/images/kozmo/colors/pad-black.webp", color: "negro", light: "#202126" },
    { src: "/images/kozmo/colors/pad-silver.webp", color: "plata", light: "#44474c" },
    { src: "/images/kozmo/colors/pad-orange.webp", color: "naranja", light: "#58301a" },
  ] },
] as const;
