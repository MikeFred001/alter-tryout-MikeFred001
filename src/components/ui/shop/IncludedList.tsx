import { Badge } from '@/components/ui/common/Badge';
import { Check } from '@/components/icons/Check';
import { Typography } from '@/components/ui/common/Typography';

export const IncludedList: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <Typography>Included:</Typography>
      <div className="flex flex-col gap-3 font-light">
        <Badge icon={<Check className="text-checkmark-green" />} border={false}>
          Medical grade at-home DNA swab
        </Badge>
        <Badge icon={<Check className="text-checkmark-green" />} border={false}>
          Free return shipping label
        </Badge>
        <Badge icon={<Check className="text-checkmark-green" />} border={false}>
          Comprehensive DNA fitness & health report with 13 key traits
        </Badge>
        <Badge icon={<Check className="text-checkmark-green" />} border={false}>
          Free personalized 1:1 walktrhough of health results with Fitness Expert
        </Badge>
      </div>
    </div>
  );
};
