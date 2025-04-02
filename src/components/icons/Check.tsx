interface CheckProps {
  className?: string;
}

export const Check = ({ className = '' }: CheckProps) => {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M13.7812 0.218726C14.075 0.512476 14.075 0.987475 13.7812 1.2781L5.53123 9.53123C5.23748 9.82498 4.76248 9.82498 4.47185 9.53123L0.218726 5.28123C-0.0750244 4.98748 -0.0750244 4.51248 0.218726 4.22185C0.512476 3.93123 0.987476 3.9281 1.2781 4.22185L4.99685 7.9406L12.7187 0.218726C13.0125 -0.0750244 13.4875 -0.0750244 13.7781 0.218726H13.7812Z"
        fill="#33912E"
      />
    </svg>
  );
};
