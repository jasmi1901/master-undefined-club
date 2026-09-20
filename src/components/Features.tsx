const features = [
  { title: "Expert Coaches", text: "Learn from experienced and certified coaches.", icon: "◌" },
  { title: "All Skill Levels", text: "Programs for beginners to advanced players.", icon: "◫" },
  { title: "Competitive Spirit", text: "Regular matches and tournaments.", icon: "◎" },
  { title: "Fitness & Fun", text: "Stay active, build fitness and have fun.", icon: "✦" },
  { title: "Flexible Schedule", text: "Convenient training times for everyone.", icon: "☰" },
];

const Features = () => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:gap-5 sm:px-6 sm:grid-cols-2 xl:grid-cols-5">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-lg text-blue-600">
              {feature.icon}
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-600">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;