import { Typography } from '@/components/ui/common/Typography';

interface BadgeProps {
	className?: string;
	icon?: React.ReactNode;
	children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({className = '', children, icon}) => {
	return (
		<div className={`flex border items-center border-alter25-black-c border-opacity-20 rounded-[4px] px-3 py-1 gap-2 w-fit ${className}`}>
			{icon && icon}
			<Typography>{children}</Typography>
		</div>
	)
}
