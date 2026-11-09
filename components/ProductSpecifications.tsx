import { product } from "@/lib/product";
export function ProductSpecifications() {
 return <section id="especificaciones" className="product-specs light section-pad" aria-labelledby="specs-title">
   <div data-reveal><span className="index">05 / ESPECIFICACIONES</span><h2 id="specs-title">Todo lo esencial.<br />En ambas.</h2><p className="shared-specs">KOZMO Pad y KOZMO Pad Ultra comparten estas especificaciones.</p></div>
   <div className="spec-highlights">{product.highlights.map(item => <div key={item.value} data-reveal><p>{item.value}</p><span>{item.description}</span></div>)}</div>
   <div className="technical" data-reveal><h3>Especificaciones técnicas</h3><dl>{product.specifications.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl><p>Las dimensiones son estimaciones basadas en fotografías y no son especificaciones oficiales.</p></div>
 </section>;
}


