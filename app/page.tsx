import Image from "next/image";
import { MotionDirector } from "@/components/motion-director";
import { ProductImage } from "@/components/product-image";
import { InTheBox } from "@/components/InTheBox";
import { UniverseSky } from "@/components/UniverseSky";
import { HeroShowcase } from "@/components/HeroShowcase";
import { ColorSelector } from "@/components/ColorSelector";
import { ProductSpecifications } from "@/components/ProductSpecifications";
import { modelNames, product } from "@/lib/product";

export default function Home() {
  return <main id="inicio">
    <MotionDirector />
    <header className="nav"><a className="brand-logo" href="#inicio" aria-label="KOZMO, inicio"><Image src="/images/kozmo/logo-original.png" width={58} height={55} alt="" priority /></a><nav aria-label="Navegación principal"><a href="#pantalla">Pantalla</a><a href="#especificaciones">Detalles</a></nav><a className="nav-link" href="#contacto">Consultar <span aria-hidden="true">↗</span></a></header>
    <section className="hero dark universe-hero">
      <UniverseSky />
      <div className="hero-copy"><h1 className="hero-title hero-intro" aria-label="KOZMO PAD"><span className="hero-title-arc" aria-hidden="true" /><span className="hero-title-word" aria-hidden="true"><span className="hero-initial hero-initial-k" data-letter="K">K</span><span className="hero-title-rest hero-title-rest-first">OZMO</span></span><span className="hero-title-word" aria-hidden="true"><span className="hero-initial hero-initial-p" data-letter="P">P</span><span className="hero-title-rest hero-title-rest-second">AD</span></span></h1><p className="hero-sub hero-intro">Dos tabletas. Una nueva forma de verlo todo.</p></div>
      <HeroShowcase />
      <a className="discover hero-intro" href="#presentacion">Descubrir <span aria-hidden="true">↓</span></a>
    </section>
    <section id="presentacion" className="intro light section-pad"><div className="section-heading" data-reveal><span className="index">01 / PRESENTACIÓN</span><h2>Dos maneras<br />de destacar.</h2></div><div className="intro-models" data-reveal><figure><div className="model-photo model-photo-pro"><Image src="/images/kozmo/pro-gris.png" alt={`${modelNames.pad} gris`} fill sizes="(max-width: 700px) 45vw, 45vw" /></div><figcaption>{modelNames.pad}</figcaption></figure><figure><div className="model-photo"><Image src="/images/kozmo/normal-azul.png" alt={`${modelNames.ultra} azul`} fill sizes="(max-width: 700px) 45vw, 45vw" /></div><figcaption>{modelNames.ultra}</figcaption></figure></div><p className="caption" data-reveal>Una nueva perspectiva, desde cualquier ángulo.</p></section>
    <section id="pantalla" className="display-story dark"><div className="display-sticky"><div className="display-copy" data-reveal><span className="index">03 / PANTALLA</span><h2>Todo merece<br />verse así.</h2></div><ProductImage name="display" className="display-photo" /></div></section>
    <ColorSelector />
    <InTheBox />
    <ProductSpecifications />
    <section className="models dark section-pad" aria-labelledby="models-title">
      <div data-reveal><span className="index">KOZMO / MODELOS</span><h2 id="models-title">Dos modelos.<br />Una misma visión.</h2></div>
      <div className="models-grid">
        <figure data-reveal><div className="model-photo model-photo-pro"><Image src="/images/kozmo/pro-gris.png" alt={`Vista posterior de ${modelNames.pad} gris`} fill sizes="(max-width: 700px) 100vw, 45vw" /></div><figcaption><span>{modelNames.pad}</span><span>Gris</span></figcaption></figure>
        <figure data-reveal><div className="model-photo"><Image src="/images/kozmo/normal-azul.png" alt={`Vista posterior de ${modelNames.ultra} azul`} fill sizes="(max-width: 700px) 100vw, 45vw" /></div><figcaption><span>{modelNames.ultra}</span><span>Azul</span></figcaption></figure>
      </div>
    </section>
    <section id="contacto" className="closing dark section-pad"><div data-reveal><span className="index">KOZMO PAD / KOZMO PAD ULTRA</span><h2>Una nueva forma<br />de verlo todo.</h2></div><ProductImage name="closing" className="closing-photo" /><div className="contact" data-reveal><h3>KOZMO PAD Y PAD ULTRA</h3><p>Próximamente podrás consultar por WhatsApp.</p><span className="disabled-button" aria-disabled="true">Consultar por WhatsApp <span aria-hidden="true">↗</span></span></div></section>
    <footer className="footer dark"><a className="brand-logo" href="#inicio" aria-label="KOZMO, inicio"><Image src="/images/kozmo/logo-original.png" width={58} height={55} alt="" /></a><span>{product.name.toUpperCase()}</span><a href="#inicio">Volver arriba ↑</a></footer>
  </main>;
}

















