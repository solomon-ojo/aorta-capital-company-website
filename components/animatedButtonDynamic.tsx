interface Types {
  title: string;
}

export default function AnimatedButtonDynamic({ title }: Types) {
  return (
    <button className="relative rounded-full dynamic-button group border-1 border-[#6E6F7A] w-full text-black md:w-[120px] h-[45px] font-semibold overflow-hidden transition-all duration-300">
      {/* Background layer */}
      <span className="absolute inset-0 bg-[#000000] transition-all duration-400 transform -translate-x-full group-hover:translate-x-0"></span>

      {/* Text layer */}
      <span className="relative font-lora text-[12px] text-[#39393b] font-medium z-10 transition-colors duration-300 group-hover:text-white">
        {title}
      </span>
    </button>
  );
}
