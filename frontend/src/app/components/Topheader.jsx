export default function Topheader() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-center bg-[url('/assets/bg/header_bg_2.jpg')] bg-cover bg-center bg-no-repeat p-6 text-white"
      aria-label="Top header"
    >
      <div aria-hidden="true" className="absolute inset-0 z-10 bg-black/75" />
      <div className="relative z-30 mx-auto flex w-full max-w-[85vw] flex-col items-center gap-4">
        <img src="/assets/icon/Logo.svg" alt="" aria-hidden="true" className="" />
        <h1 className="text-2xl tracking-widest "> HAVE A GOOD TIME </h1>
        <img src="/assets/bottom_line2.png" alt="" />
        <div className="flex flex-row">
          <a href="/eventsdetail" className="m-4 p-4 outline outline-white">
            VIEW EVENTS
          </a>
          <a
            href="/eventspage"
            className="relative overflow-hidden
   m-4 p-4 tracking-wider text-white
  bg-gradient-to-r from-[#f21b75] to-[#a915b5]
  border-t-2 border-r-2 border-[#f5b5e4]
  shadow-[0_0_25px_rgba(231,20,160,0.35)]
  transition-all duration-300
  hover:shadow-[0_0_35px_rgba(231,20,160,0.65)]
  hover:brightness-110"
          >
            BOOK TABLE
          </a>
        </div>
      </div>
    </section>
  );
}
