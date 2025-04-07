export default function AnimatedButton() {
  return (
    <button className="relative flex items-center justify-center home-button group border-1 border-[#6E6F7A] w-full text-black md:w-[160px] h-[45px] font-semibold overflow-hidden transition-all duration-300">
      {/* Background layer */}
      <span className="absolute inset-0 bg-[#22c55e] transition-all duration-400 transform -translate-x-full group-hover:translate-x-0"></span>

      {/* Text layer */}
      <span className="relative font-lora text-[12px] text-[#39393b] font-medium z-10 transition-colors duration-300 group-hover:text-white">
        Read our mission
      </span>
    </button>
  );
}
