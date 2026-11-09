import { ProductImage } from "@/components/product-image";
export function ProductGallery() {
 return <section className="gallery light section-pad"><div className="gallery-heading" data-reveal><span className="index">06 / GALERÍA</span><h2>Una nueva forma<br />de mirar.</h2></div><div className="gallery-grid"><div data-reveal><ProductImage name="front" sizes="(max-width: 700px) 100vw, 48vw" /><p className="caption">De frente.</p></div><div className="gallery-offset" data-reveal><ProductImage name="side" sizes="(max-width: 700px) 100vw, 38vw" /><p className="caption">Desde otra perspectiva.</p></div></div></section>;
}
