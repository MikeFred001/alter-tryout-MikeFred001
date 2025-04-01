
import { Typography } from '@/components/ui/common/Typography';
import { VerifiedOwnerBadge } from '@/components/ui/reviews/VerifiedOwnerBadge';

interface OwnerSignatureProps {
  ownerName: string;
  verified?: boolean;
}

export const OwnerSignature: React.FC<OwnerSignatureProps> = ({
  ownerName,
  verified = true,
}) => {
  return (
    <div className="flex flex-col justify-center gap-3">
      <Typography>{ownerName}</Typography>
     	{verified && <VerifiedOwnerBadge />}
    </div>
  );
};
