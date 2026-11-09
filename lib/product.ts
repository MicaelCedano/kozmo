export const modelNames = {
  pad: "KOZMO Pad",
  ultra: "KOZMO Pad Ultra",
} as const;

export const product = {
  name: modelNames.pad,
  boxImage: "/images/kozmo/box-studio.webp" as string | null,
  boxAccessories: ["Cargador", "Cable", "Adaptador OTG", "Manual"] as string[],
  highlights: [
    { value: "Android 15", description: "Una experiencia actualizada." },
    { value: "3 GB", description: "Memoria RAM." },
    { value: "32 GB", description: "Almacenamiento interno." },
    { value: "4G LTE", description: "Conectividad móvil." },
  ],
  specifications: [
    { label: "Modelos", value: "KOZMO Pad y KOZMO Pad Ultra" },
    { label: "Sistema operativo", value: "Android 15" },
    { label: "Memoria RAM", value: "3 GB" },
    { label: "Almacenamiento", value: "32 GB" },
    { label: "Conectividad móvil", value: "4G LTE" },
    { label: "Alto aproximado", value: "245 mm" },
    { label: "Ancho aproximado", value: "165 mm" },
    { label: "Grosor aproximado", value: "7,5 mm" },
    { label: "Conector", value: "USB-C" },
    { label: "Colores", value: "Blue, Black, Silver, Orange" },
  ],
  // Las variantes se editan por separado para cada modelo; los tonos pueden diferir del producto físico.
  colors: [
    { id: "blue", name: "Blue", spanish: "Azul", padImage: "/images/kozmo/colors/blue.webp", ultraImage: "/images/kozmo/normal-azul.png" },
    { id: "black", name: "Black", spanish: "Negro", padImage: "/images/kozmo/colors/black.webp", ultraImage: "/images/kozmo/colors/pad-black.webp" },
    { id: "silver", name: "Silver", spanish: "Plata", padImage: "/images/kozmo/colors/silver.webp", ultraImage: "/images/kozmo/colors/pad-silver.webp" },
    { id: "orange", name: "Orange", spanish: "Naranja", padImage: "/images/kozmo/colors/orange.webp", ultraImage: "/images/kozmo/colors/pad-orange.webp" },
  ] as { id: string; name: string; spanish: string; padImage: string | null; ultraImage: string | null }[],
} as const;







