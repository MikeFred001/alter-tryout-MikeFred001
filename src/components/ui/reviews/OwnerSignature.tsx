import { Typography } from '@/components/ui/common/Typography';
import { Badge } from '@/components/ui/common/Badge';
import { CircleCheck } from '@/components/icons/CircleCheck';

interface OwnerSignatureProps {
  ownerName: string;
  verified?: boolean;
}

export const OwnerSignature: React.FC<OwnerSignatureProps> = ({ ownerName, verified = true }) => {
  return (
    <div className="flex flex-col justify-center gap-3">
      <Typography>{ownerName}</Typography>
      {verified && (
        <Badge icon={<CircleCheck className="text-checkmark-green" />}>
          Verified <span className="font-light">Owner</span>
        </Badge>
      )}
    </div>
  );
};

