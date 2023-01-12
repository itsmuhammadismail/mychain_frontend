interface Props {
  type?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ type = "primary", onClick, className, children }: Props) => {
  return (
    <button
      className={`h-[3.75rem] px-[1rem] py-[0.5rem] rounded-[1.5rem] ${className} ${
        type == "primary"
          ? "bg-[#017EFC] text-white"
          : "border-2 border-[#017EFC] text-[#017EFC]"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
