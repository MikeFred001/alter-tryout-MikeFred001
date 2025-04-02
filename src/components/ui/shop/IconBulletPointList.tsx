import { Dumbbell } from '@/components/icons/Dumbbell';
import { PotFood } from '@/components/icons/PotFood';
import { ChartSine } from '@/components/icons/ChartSine';
import { Bed } from '@/components/icons/Bed';
import { CircleIcon } from '@/components/ui/common/CircleIcon';
import { IconBulletPoint } from '@/components/ui/common/IconBulletPoint';

export const IconBulletPointList: React.FC = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-3">
      <IconBulletPoint
        icon={<CircleIcon icon={<Dumbbell />} />}
        text="Your best type of exercise"
      />
      <IconBulletPoint
        icon={<CircleIcon icon={<PotFood />} />}
        text="Your unique nutritional needs"
      />
      <IconBulletPoint icon={<CircleIcon icon={<ChartSine />} />} text="Your weight loss roadmap" />
      <IconBulletPoint icon={<CircleIcon icon={<Bed />} />} text="Your recovery tendencies" />
    </div>
  );
};
