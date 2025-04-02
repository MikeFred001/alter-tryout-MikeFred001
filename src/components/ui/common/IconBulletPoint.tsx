import { Typography } from './Typography';

interface IconBulletPointProps {
	icon: React.ReactNode;
	text: string;
}

export const IconBulletPoint: React.FC<IconBulletPointProps> = ({icon, text}) => {
	return (
		<div className="flex gap-2 items-center font-light">
			{icon}
			<Typography>{text}</Typography>
		</div>
	)
}

