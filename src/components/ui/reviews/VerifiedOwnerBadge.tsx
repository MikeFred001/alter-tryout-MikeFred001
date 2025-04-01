import { CircleCheck } from '@/components/icons/CircleCheck';
import { Typography } from '@/components/ui/common/Typography';

export const VerifiedOwnerBadge: React.FC = () => {
	return (
		<div className="flex border items-center border-alter25-black-c border-opacity-20 rounded-[4px] px-3 py-1 gap-2 w-fit">
			<CircleCheck className="text-checkmark-green" />
			<Typography>Verfied <span className='font-light'>Owner</span></Typography>
		</div>
	)
}
