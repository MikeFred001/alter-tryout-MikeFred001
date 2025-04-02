interface CircleIconProps {
  className?: string;
  icon?: React.ReactNode;
}

export const CircleIcon: React.FC<CircleIconProps> = ({ icon, className }) => {
  return (
    <div
      className={`size-12 border border-alter25-black-c border-opacity-20 rounded-full flex items-center justify-center ${className}`}
    >
      {icon}
    </div>
  );
};
