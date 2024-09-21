export default function AnimatedButtonTeams({ title }: any) {
  return (
    <button className="relative home-button group border-1 border-white w-full text-black h-[35px] font-semibold overflow-hidden transition-all duration-1000">
      {/* Background layer */}
      <span className="absolute inset-0 bg-[#22c55e] transition-all duration-1000 transform -translate-x-full group-hover:translate-x-0"></span>

      {/* Text layer */}
      <span className="relative font-lora text-[12px] text-white font-medium z-10 transition-colors duration-1000 group-hover:text-white">
        {title}
      </span>
    </button>
  );
}
