import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Sports from "./components/Sports";
import Schedule from "./components/Schedule";
import GalleryCTA from "./components/GalleryCTA";
import Footer from "./components/Footer";

import redballImg from "./assets/redball head.jpeg";
import softballImg from "./assets/softballhead.jpeg";
import chairmanImg from "./assets/chairman.jpeg";
import secretaryImg from "./assets/secretary.jpeg";
import treasurerImg from "./assets/treasurer.jpeg";
import badmintonHead from "./assets/badminton head.jpg";
import teamPhoto from "./assets/cricket-team.jpeg";
import badmintonImage from "./assets/gallery-2.jpeg";

/* =========================================================
   SPORT INFORMATION PAGE
========================================================= */

const SportInfoPage = ({
  title,
  description,
  highlight,
  items,
  image,
}: {
  title: string;
  description: string;
  highlight: string;
  items: string[];
  image?: string;
}) => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-lg md:p-12">

        {image && (
          <div className="mb-6 overflow-hidden rounded-2xl shadow-lg">
            <img
              src={image}
              alt={`${title} image`}
              className="h-75 w-full object-cover md:h-125"
            />
          </div>
        )}

        {/* Header */}

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Club Sport
        </p>

        <h1 className="mt-4 text-4xl font-black uppercase text-slate-900 md:text-5xl">
          {title}
        </h1>

        {/* Description */}

        <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-white shadow-md">
          <p className="text-lg leading-8">
            {description}
          </p>
        </div>

        {/* Information */}

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          {/* Why this sport */}

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-xl font-bold text-blue-700">
              Why this sport?
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              {highlight}
            </p>
          </div>

          {/* What you will learn */}

          <div className="rounded-2xl border border-slate-200 bg-slate-100 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              What you will learn
            </h2>

            <ul className="mt-4 space-y-3 text-slate-700">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 text-blue-600">
                    ●
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Back button */}

        <a
          href="#"
          className="mt-8 inline-flex rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          Back to Home
        </a>

      </div>
    </div>
  );
};

/* =========================================================
   MEMBERSHIP PAGE
========================================================= */

const MembershipPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sport: "",
    message: "",
  });

  /* -------------------------
     FORM CHANGE
  ------------------------- */

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    // Hide success message when user starts a new application
    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      sport: "",
      message: "",
    });
  };

  /* -------------------------
     FORM SUBMIT
  ------------------------- */

  const boardMembers = [
    { name: "Fayas", role: "Chairman", image: chairmanImg },
    { name: "PrabhuRam", role: "Secretary", image: secretaryImg },
    { name: "Mansoor ilahi", role: "Treasurer", image: treasurerImg },
    { name: "Fazil", role: "Redball Head", image: redballImg },
    { name: "SivaPandiyan", role: "Softball Head", image: softballImg },
    { name: "Tharun Priyan", role: "Badminton Head", image: badmintonHead },
  ];

  /* -------------------------
     CLUB MEMBERS
  ------------------------- */

  const members = [
    {
      name: "Anbarasan Thamizharasan",
      sport: "Cricket",
    },
    {
      name: "Abiranjan",
      sport: "Cricket",
    },
    {
      name: "Arun",
      sport: "Badminton",
    },
    {
      name: "Kannan",
      sport: "Badminton",
    },
    {
      name: "Hemanathan",
      sport: "Cricket",
    },
    {
      name: "Jithin",
      sport: "Badminton",
    },
    {
      name: "Karthik",
      sport: "Cricket", 
    },
    { 
      name: "Susil kumar",
      sport: "Cricket",
    },
    {
      name: "Priya",
      sport: "Badminton",
    },
    {
      name: "Vaishnavi",
      sport: "Badminton",
    },
    {
      name: "Veera",
      sport: "Cricket",
    },
    {
      name: "Sowdeeswari",
      sport: "Badminton",
    },
    {
      name: "Saheena",
      sport: "Badminton",
    },

    
  ];

  return (
    <div className="bg-slate-50 py-16">

      <div className="mx-auto max-w-6xl px-6">

        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Club
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase text-slate-900 md:text-5xl">
            Membership
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Meet the people behind Master Undefined Club and
            discover our growing community of cricket and
            badminton players.
          </p>

        </div>

        {/* =================================================
            BOARD MEMBERS
        ================================================= */}

        <section className="mt-14">

          <div className="mb-6">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Leadership
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Board Members
            </h2>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {boardMembers.map((member) => (

              <div
                key={member.name}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* =================================================
                    MEMBER PHOTO
                ================================================= */}

                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-blue-100 bg-blue-50 shadow-md transition duration-300 group-hover:border-blue-300">

                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                </div>

                {/* Name */}

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {member.name}
                </h3>

                {/* Role */}

                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
                  {member.role}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* =================================================
            CLUB MEMBERS
        ================================================= */}

        <section className="mt-16">

          <div className="mb-6">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Community
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Club Members
            </h2>

          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">

            {/* Table Header */}

            <div className="grid grid-cols-2 bg-slate-900 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white">

              <span>
                Member Name
              </span>

              <span className="text-right">
                Sport
              </span>

            </div>

            {/* Members */}

            {members.map((member, index) => (

              <div
                key={member.name}
                className={`grid grid-cols-2 px-4 py-5 sm:px-6 ${
                  index !== members.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >

                <div className="flex items-center gap-3">

                  {/* Avatar */}

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">

                    {member.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}

                  </div>

                  <span className="text-sm font-semibold text-slate-800 sm:text-base">
                    {member.name}
                  </span>

                </div>

                <span className="self-center text-right text-sm font-medium text-slate-600">
                  {member.sport}
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* =================================================
            JOIN CLUB SECTION
        ================================================= */}

        <section className="mt-16">

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-lg md:p-12">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Become a Member
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase md:text-4xl">
                Join Master Undefined Club
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Interested in cricket or badminton? Send us
                your details and our team will get in touch
                with you.
              </p>

            </div>

            {/* =================================================
                MEMBERSHIP FORM
            ================================================= */}

            <form
              className="mt-8 space-y-4"
              onSubmit={handleSubmit}
            >

              {/* Name + Email */}

              <div className="grid gap-4 md:grid-cols-2">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

              {/* Sport */}

              <select
                name="sport"
                value={formData.sport}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              >

                <option value="" disabled>
                  Select sport
                </option>

                <option value="cricket">
                  Cricket
                </option>

                <option value="badminton">
                  Badminton
                </option>

              </select>

              {/* Message */}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about yourself or your goals"
                className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

              {/* Success Message */}

              {submitted && (

                <div className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-300">

                  Your application has been received. Our team
                  will contact you soon.

                </div>

              )}

              {/* Submit */}

              <button
                type="submit"
                className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 hover:shadow-lg"
              >
                {submitted
                  ? "Application Sent"
                  : "Join the Club"}
              </button>

            </form>

          </div>

        </section>

      </div>

    </div>
  );
};

/* =========================================================
   FULL SCHEDULE PAGE
========================================================= */

const FullSchedulePage = () => {

  const fullSchedule = [
    {
      sport: "Cricket",
      type: "Summer Match",
      day: "Saturday",
      date: "14 June 2027",
      time: "09:00 AM – 01:00 PM",
      note: "Club fixture against local rivals",
    },
    {
      sport: "Cricket",
      type: "Summer Match",
      day: "Saturday",
      date: "28 June 2027",
      time: "09:00 AM – 01:00 PM",
      note: "Friendly match and team rotation",
    },
    {
      sport: "Cricket",
      type: "Summer Match",
      day: "Saturday",
      date: "12 July 2027",
      time: "09:00 AM – 01:00 PM",
      note: "Performance match for selection training",
    },
    {
      sport: "Cricket",
      type: "Training",
      day: "Every Tuesday & Thursday",
      date: "Weekly",
      time: "06:00 PM – 08:00 PM",
      note: "Batting, bowling, fielding, and fitness drills",
    },
    {
      sport: "Badminton",
      type: "Training",
      day: "Every Monday & Wednesday",
      date: "Weekly",
      time: "06:30 PM – 08:30 PM",
      note: "Footwork, rallies, court movement, and conditioning",
    },
    {
      sport: "Badminton",
      type: "Match Play",
      day: "Sunday",
      date: "22 October 2026",
      time: "02:00 PM – 05:00 PM",
      note: "Club doubles and singles sessions",
    },
  ];

  return (
    <div className="bg-slate-50 py-16">

      <div className="mx-auto max-w-6xl px-6">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg md:p-12">

          {/* Header */}

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Schedule
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase text-slate-900 md:text-5xl">
            Full Schedule
          </h1>

          {/* Description */}

          <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-white shadow-md">

            <p className="text-lg leading-8">
              Cricket matches are available during the summer,
              while training sessions run every week to keep our
              players sharp, fit, and match-ready.
            </p>

          </div>

          {/* Schedule List */}

          <div className="mt-8 space-y-4">

            {fullSchedule.map((item) => (

              <div
                key={`${item.sport}-${item.date}-${item.type}`}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:shadow-md md:flex-row md:items-center md:justify-between"
              >

                <div>

                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                    {item.sport}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    {item.type}
                  </h2>

                </div>

                <div className="grid gap-2 text-sm text-slate-700 md:text-right">

                  <p>
                    <span className="font-semibold text-slate-900">
                      Day:
                    </span>{" "}
                    {item.day}
                  </p>

                  <p>
                    <span className="font-semibold text-slate-900">
                      Date:
                    </span>{" "}
                    {item.date}
                  </p>

                  <p>
                    <span className="font-semibold text-slate-900">
                      Time:
                    </span>{" "}
                    {item.time}
                  </p>

                  <p>
                    <span className="font-semibold text-slate-900">
                      Note:
                    </span>{" "}
                    {item.note}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Back */}

          <a
            href="#"
            className="mt-8 inline-flex rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Back to Home
          </a>

        </div>

      </div>

    </div>
  );
};



function App() {

  /* =======================================================
     ROUTE HANDLING
  ======================================================= */

  const getNormalizedRoute = () => {

    const hash = window.location.hash
      .replace("#", "")
      .trim()
      .toLowerCase();

    if (
      hash === "schedule-full" ||
      hash === "schedule"
    ) {
      return "schedule";
    }

    if (
      hash === "join" ||
      hash === "membership"
    ) {
      return "membership";
    }

    if (
      hash === "cricket"
    ) {
      return "cricket";
    }

    if (
      hash === "badminton"
    ) {
      return "badminton";
    }

    return hash || "home";
  };

  const [route, setRoute] = useState(
    getNormalizedRoute
  );

  /* =======================================================
     HASH CHANGE
  ======================================================= */

  useEffect(() => {

    const handleHashChange = () => {
      setRoute(getNormalizedRoute());
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };

  }, []);

  /* =======================================================
     CRICKET PAGE
  ======================================================= */

if (route === "cricket") {
  return (
    <>
      <Navbar />
       
      <SportInfoPage
        title="Cricket"
        image={teamPhoto}
        description="Masters Undefined Cricket is built on teamwork, passion, and a strong winning spirit. Our teams compete across T10, T15, T20 and gully cricket tournaments in Stockholm and Spånga."
        highlight="From league matches to finals, our players continue to show commitment, teamwork and fighting spirit. Every trophy is a result of the entire team's effort, supported by our families, friends and supporters."
        items={[
          "🥇 Multiple Tournament Champions — including T10, T15 and T20 titles",
          "🏆 5th title of the season with a 4-peat in Spånga",
          "🥈 Runner-Up — MU Stockholm Gully Cricket 2026",
          "🥉 3rd Place — SSK Independence Day Cup",
          "⭐ Man of the Tournament, MVP, Best Batter and Best Bowler awards",
          "🔥 Multiple Man of the Match performances throughout the season",
        ]}
      />

      <section className="bg-[#f5f7fa] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3">
            Our Cricket Journey
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#031b3d] mb-6">
            🏆 One Team. One Unit.
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            From league matches to finals, our players continue to show
            commitment, teamwork and fighting spirit. Every trophy is a result
            of the entire team's effort, supported by our families, friends
            and supporters.
          </p>

          <p className="mt-8 text-xl md:text-2xl font-bold text-[#031b3d]">
            More tournaments. More challenges. More to achieve. 🏏🏆
          </p>

        

        </div>
      </section>

      <Footer />
    </>
  );
}


  /* =======================================================
     BADMINTON PAGE
  ======================================================= */

  if (route === "badminton") {

    return (
      <>
        <Navbar />

        <SportInfoPage
          title="Badminton"
          image={badmintonImage}
          description="Badminton training at Master Undefined Club focuses on speed, agility, footwork, and precision. Every session is designed to improve court movement, reaction time, and shot execution for both singles and doubles play."
          highlight="Badminton is ideal for players who want quick reflexes, rhythm, stamina, and a fun high-energy format that sharpens focus and fitness."
          items={[
            "Footwork and court coverage",
            "Smash, drop, and net control",
            "Singles and doubles strategy",
            "Agility and stamina training",
          ]}
        />

        <Footer />
      </>
    );
  }

  /* =======================================================
     SCHEDULE PAGE
  ======================================================= */

  if (route === "schedule") {

    return (
      <>
        <Navbar />

        <FullSchedulePage />

        <Footer />
      </>
    );
  }

  /* =======================================================
     MEMBERSHIP PAGE
  ======================================================= */

  if (route === "membership") {

    return (
      <>
        <Navbar />

        <MembershipPage />

        <Footer />
      </>
    );
  }

  /* =======================================================
     HOME PAGE
  ======================================================= */

  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Features />

        <Sports />

        <Schedule />

        <GalleryCTA />

      </main>

      <Footer />
    </>
  );
}

export default App;