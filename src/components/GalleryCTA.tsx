import gallery1 from "../assets/gallery-1.jpeg";
import gallery2 from "../assets/gallery-2.jpeg";
import gallery3 from "../assets/gallery-3.jpeg";
import gallery4 from "../assets/gallery-4.jpeg";

const galleryImages = [gallery1, gallery2, gallery3, gallery4];

const GalleryCTA = () => {
  return (
    <section className="bg-[#031b3d] py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid grid-cols-2 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="h-52 overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-lg"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
            BE PART OF OUR
            <br />
            <span className="text-blue-400">GROWING FAMILY</span>
          </h2>

          <p className="mt-5 max-w-lg text-base text-slate-300">
            Build skills. Make friends. Create memories. Let&apos;s achieve greatness together!
          </p>

          <a
            href="#membership"
            className="mt-6 inline-flex w-fit rounded-md bg-blue-600 px-7 py-3 text-base font-semibold text-white transition hover:bg-blue-500"
          >
            Join the Club →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryCTA;