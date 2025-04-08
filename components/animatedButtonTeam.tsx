export default function AnimatedButtonTeams({ title }: any) {
  return (
    <button className="relative flex items-center justify-center home-button group border-1 border-white w-full text-black h-[35px] font-semibold overflow-hidden transition-all duration-1000">
      {/* Background layer */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#ffde59] to-[#ff914d]  transition-all duration-1000 transform -translate-x-full group-hover:translate-x-0"></span>

      {/* Text layer */}
      <span className="relative font-lora text-[12px] text-white font-medium z-10 transition-colors duration-1000 group-hover:text-white">
        {title}
      </span>
    </button>
  );
}
