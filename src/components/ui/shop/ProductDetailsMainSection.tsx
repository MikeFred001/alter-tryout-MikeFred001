import { Typography } from '@/components/ui/common/Typography';
import { IncludedList } from '@/components/ui/shop/IncludedList';
import { IconBulletPointList } from '@/components/ui/shop/IconBulletPointList';
import { BuyNowButton } from '@/components/ui/shop/BuyNowButton';

export const ProductDetailsMainSection: React.FC = () => {
	return (
		<div className="flex flex-col gap-8">
			<Typography className="font-light md:block hidden">
				Created by experts from Stanford University, the NBA, and Mayo Clinic. This is where the guesswork ends. Find out what your body needs through your DNA in the comfort of your own home.
			</Typography>
			<IncludedList />
			<Typography className="font-light">
				Our <span className="font-normal ">CLIA-certified, CAP-accredited</span> Lab analyzes <span className="font-normal">60 polymorphisms</span> to identify <span className="font-normal">13 key traits</span> that create your personalized wellness plan. You’ll find out:
			</Typography>
			<IconBulletPointList />
			<BuyNowButton className="hidden lg:block"/>
		</div>
	)
}
