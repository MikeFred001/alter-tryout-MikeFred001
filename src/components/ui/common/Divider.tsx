interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={`h-[1px] bg-alter25-black-c my-8 ${className}`}></div>;
};
