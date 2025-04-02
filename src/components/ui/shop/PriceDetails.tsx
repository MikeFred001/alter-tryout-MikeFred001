import { Typography } from '@/components/ui/common/Typography';

interface PriceDetailsProps {
  price: number;
  discountedPrice?: number;
  discount?: number;
}

export const PriceDetails: React.FC<PriceDetailsProps> = ({ price, discountedPrice, discount }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 text-[2rem] font-light leading-[1.2]">
        {discount && <Typography className="text-alter25-red">-{discount}%</Typography>}
        {discountedPrice ? (
          <Typography>${discountedPrice.toFixed(0)}</Typography>
        ) : (
          <Typography>${price.toFixed(0)}</Typography>
        )}
      </div>
      {price && (
        <Typography className="opacity-80 font-light">
          Regular Price: <span className="line-through">{price.toFixed(2)}</span>
        </Typography>
      )}
    </div>
  );
};
