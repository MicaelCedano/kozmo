import Image from "next/image";
import { product } from "@/lib/product";

export function InTheBox() {
  return <section id="en-la-caja" className="box-section dark section-pad" aria-labelledby="box-title">
    <div className="box-heading" data-reveal><span className="index">EN LA CAJA</span><h2 id="box-title">Todo comienza aquí.</h2><p>{product.name}, desde el primer momento.</p></div>
    <div className="box-layout">
      <div className="box-visual" aria-label={product.boxImage ? undefined : "Fotografía del empaque pendiente"}>
        {product.boxImage ? <Image src={product.boxImage} alt={`Empaque original de ${product.name} con la inscripción KozmoPadUltra`} fill sizes="(max-width: 700px) 90vw, 55vw" className="box-product" /> : <div className="box-photo-pending"><span>{product.name.toUpperCase()}</span><p>Fotografía del empaque pendiente.</p></div>}
      </div>
      <div className="box-content" data-reveal><span className="index">LO QUE INCLUYE</span><h3>Contenido de la caja</h3><ul><li>{product.name}</li>{product.boxAccessories.map(item => <li key={item}>{item}</li>)}</ul>{product.boxAccessories.length === 0 && <p>Los accesorios incluidos están pendientes de confirmación.</p>}</div>
    </div>
  </section>;
}
