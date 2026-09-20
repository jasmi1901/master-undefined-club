import logo from "../assets/logo.png";
import heroCricket from "../assets/hero-cricket.jpg";
import heroBadminton from "../assets/hero-badminton.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[28rem] overflow-hidden bg-[#031b3d] sm:min-h-[32rem] lg:min-h-[37.5rem]">
      <div className="absolute inset-0">
        <div
          className="absolute left-0 top-0 h-1/2 w-full bg-cover bg-center sm:h-full sm:w-1/2"
          style={{ backgroundImage: `url(${heroCricket})` }}
        />
        <div
          className="absolute bottom-0 right-0 h-1/2 w-full bg-cover bg-center sm:h-full sm:w-1/2"
          style={{ backgroundImage: `url(${heroBadminton})` }}
        />
        <div className="absolute inset-0 bg-[#031b3d]/80" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[28rem] max-w-7xl items-center justify-center px-4 py-12 text-center text-white sm:min-h-[32rem] sm:px-6 sm:py-14 lg:min-h-[37.5rem]">
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center justify-center sm:mb-6">
            <img src={logo} alt="Masters Undefined Club logo" className="h-20 w-20 object-contain sm:h-24 sm:w-24" />
          </div>

          <h1 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-6xl">
            ONE CLUB.
            <br />
            TWO SPORTS.
            <br />
            <span className="text-blue-400">ENDLESS POSSIBILITIES.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-200 sm:mt-6 sm:text-base sm:leading-normal md:text-lg">
            Masters Undefined Club is a community built on passion, discipline and
            sportsmanship. Cricket or Badminton – this is where you grow.
          </p>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;