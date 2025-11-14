import Masonry from "../../../ui/Masonry";
import photoAlbums from "../../../constants/life-at-spark/photoAlbum";
export default function PhotoAlbum() {
  return (
    <section className="min-h-screen container py-20">
      <Masonry
        items={photoAlbums}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </section>
  );
}
