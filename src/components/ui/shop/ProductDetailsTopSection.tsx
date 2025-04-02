import { Typography } from '@/components/ui/common/Typography';
import { ProductTags } from '@/components/ui/shop/ProductTags';
import { PriceDetails } from '@/components/ui/shop/PriceDetails';
import { BuyNowButton } from '@/components/ui/shop/BuyNowButton';

export const ProductDetailsTopSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Typography className="text-[40px] font-light leading-[1.2]">
        DNA Fitness & Health Report
      </Typography>
      <ProductTags />
      <PriceDetails price={100} discountedPrice={49} discount={50} />
      <Typography>
        1,100 bought <span className="font-light">in past month</span>
      </Typography>
      <BuyNowButton className="md:block lg:hidden" />
    </div>
  );
};
