interface Types {
  children: React.ReactNode;
}

export const ParagraphComp = ({ children }: Types) => {
  return (
    <p className="text[15px] paragraph home-text-color leading-[30px] font-normal font-lora xl:text-[17px]">
      {children}
    </p>
  );
};
