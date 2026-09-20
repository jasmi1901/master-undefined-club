import cricketImage from "../assets/cricket.jpeg";
import badmintonImage from "../assets/badminton.jpg";

const sports = [
  {
    title: "CRICKET",
    description: "Batting, Bowling, Fielding, Match Preparation and more.",
    image: cricketImage,
    button: "Explore Cricket",
    id: "cricket",
  },
  {
    title: "BADMINTON",
    description: "Singles, Doubles, Footwork, Smashes, Tactics and more.",
    image: badmintonImage,
    button: "Explore Badminton",
    id: "badminton",
  },
];

const Sports = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black uppercase tracking-wide text-slate-900">
            OUR SPORTS
          </h2>
          <div className="mx-auto mt-3 h-1 w-10 bg-blue-600" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sports.map((sport) => (
            <article
              key={sport.title}
              className="group relative min-h-64 overflow-hidden rounded-[20px] border border-slate-200 bg-slate-900 px-5 py-7 text-white shadow-xl sm:px-6 sm:py-8 md:min-h-70"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(15,23,42,0.8), rgba(15,23,42,0.3)), url(${sport.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative z-10 flex h-full flex-col justify-end">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/10 text-xl text-white">
                    {sport.title === "CRICKET" ? "🏏" : "🏸"}
                  </div>
                  <h3 className="text-[1.7rem] font-black tracking-wide sm:text-[2rem]">{sport.title}</h3>
                </div>

                <p className="max-w-md text-base text-slate-100">{sport.description}</p>

                <a
                  href={`#${sport.id}`}
                  className="mt-6 inline-flex w-fit rounded-md border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  {sport.button} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sports;