import { Typography } from '@/components/ui/common/Typography';
import { OwnerSignature } from '@/components/ui/reviews/OwnerSignature';

export const OwnerReview: React.FC = () => {
  return (
    <div className="flex-col gap-6 border border-alter25-black-c border-opacity-20 rounded-lg p-6 md:flex hidden">
      <Typography className="text-alter-black text-lg">
        Easy process for so many insights
      </Typography>
      <Typography className="text-alter-black font-light">
        Loved the Alter DNA kit experience. The swab process and mailing it back was straightforward
        and simple.
        <span className="p-1 rounded bg-gradient-to-r from-highlight-green-fade-in to-highlight-green-fade-out">
          The results were fascinating and actionable.
        </span>{' '}
        Having someone to walk through the report with me was ideal so I could ask questions real
        time, but the report itself was very easy to understand.
      </Typography>

      <OwnerSignature ownerName="Kathryn S." verified />
    </div>
  );
};
