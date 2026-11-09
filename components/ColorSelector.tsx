"use client";
import { useState } from "react";
import Image from "next/image";
import { modelNames, product } from "@/lib/product";

type Model = keyof typeof modelNames;
export function ColorSelector() {
  const [model, setModel] = useState<Model>("ultra");
  const [colorId, setColorId] = useState("blue");
  const selected = product.colors.find(color => color.id === colorId) ?? product.colors[0];
  const modelName = modelNames[model];
  const image = model === "pad" ? selected.padImage : selected.ultraImage;
  return <section className="colors-section dark section-pad" id="colores" aria-labelledby="colors-title">
    <div data-reveal><span className="index">COLORES</span><h2 id="colors-title">Un estilo para cada personalidad.</h2><p className="colors-subtitle">Elige tu tableta y descubre sus colores.</p></div>
    <div className="model-switch" role="group" aria-label="Selecciona una tableta">
      <button type="button" aria-pressed={model === "ultra"} onClick={() => setModel("ultra")}>{modelNames.ultra}</button>
      <button type="button" aria-pressed={model === "pad"} onClick={() => setModel("pad")}>{modelNames.pad}</button>
    </div>
    <div className="colors-stage" aria-live="polite" aria-atomic="true">
      {image ? <Image key={`${model}-${selected.id}`} src={image} alt={`${modelName} en ${selected.spanish}`} fill sizes="(max-width: 700px) 90vw, 520px" className="colors-image" /> : <div className="colors-pending"><span>{modelName}</span><p>Imagen de {selected.spanish.toLowerCase()} pendiente.</p></div>}
    </div>
    <p className="colors-disclaimer">Imágenes editadas: el tono real puede variar.</p><div className="colors-controls"><p className="colors-current" aria-live="polite">{modelName} <span>· {selected.name} — {selected.spanish}</span></p><div className="swatches" role="group" aria-label={`Selecciona un color de ${modelName}`}>{product.colors.map((color) => <button key={color.id} type="button" className={`swatch swatch-${color.id}`} onClick={() => setColorId(color.id)} aria-label={`${color.name}, ${color.spanish}`} aria-pressed={selected.id === color.id}><span aria-hidden="true" /></button>)}</div></div>
  </section>;
}
