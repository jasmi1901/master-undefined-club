const scheduleItems = [
  {
    title: "Cricket Training",
    date: "Mon, 20 May 2027",
    time: "06:00 PM – 08:00 PM",
    location: "Norsborg Ground",
  },
  {
    title: "Badminton Training",
    date: "Tue, 29 sep 2026",
    time: "06:30 PM – 08:30 PM",
    location: "Botkyrka Rackethall",
  },
  {
    title: "Cricket Match",
    date: "Sun, 26 May 2027",
    time: "09:00 AM – 01:00 PM",
    location: "Norsborg Ground",
  },
  {
    title: "Badminton Match",
    date: "Sun, 22 oct 2026",
    time: "02:00 PM – 05:00 PM",
    location: "Botkyrka Rackethall",
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-wide text-slate-900 sm:text-3xl">
              UPCOMING SCHEDULE
            </h2>
            <div className="mt-3 h-1 w-10 bg-blue-600" />
          </div>

          <a
            href="#schedule"
            className="hidden text-sm font-semibold text-blue-600 transition hover:text-blue-500 md:inline-flex"
          >
            View Full Schedule →
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {scheduleItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                ⏱
              </div>

              <h3 className="text-xl font-bold text-blue-600">{item.title}</h3>
              <p className="mt-4 text-sm font-semibold text-slate-700">{item.date}</p>
              <p className="mt-2 text-sm text-slate-600">{item.time}</p>
              <p className="mt-2 text-sm text-slate-600">{item.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;