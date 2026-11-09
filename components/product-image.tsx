import Image from "next/image";
import { product } from "@/lib/product";

type ImageKey = "hero" | "front" | "back" | "side" | "cameras" | "display" | "details" | "closing";
// Activa cada imagen solo después de añadir la fotografía real correspondiente.
const images: Record<ImageKey, { ready: boolean; label: string }> = {
  hero: { ready: true, label: "Vista principal" }, front: { ready: true, label: "Vista frontal" },
  back: { ready: true, label: "Vista posterior" }, side: { ready: true, label: "Perfil" },
  cameras: { ready: true, label: "Detalle de cámaras" }, display: { ready: true, label: "Pantalla" },
  details: { ready: true, label: "Detalle de acabado" }, closing: { ready: true, label: "Vista final" },
};
export function ProductImage({ name, className = "", priority = false, sizes = "100vw" }: { name: ImageKey; className?: string; priority?: boolean; sizes?: string }) {
  const image = images[name];
  return <div className={`photo ${className}`}>
    {image.ready ? <Image src={`/images/kozmo/studio-${name}.webp`} alt={`${product.name}: ${image.label.toLowerCase()}`} fill sizes={sizes} priority={priority} className="photo-image" /> : <div className="photo-placeholder" aria-label={`Espacio reservado para fotografía: ${image.label}`}><span>KOZMO / {image.label}</span><span>Fotografía próximamente</span></div>}
  </div>;
}


