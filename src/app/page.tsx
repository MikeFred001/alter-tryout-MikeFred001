import clsx from 'clsx';

import { ProductCarousel } from '@/components/ui/shop/ProductCarousel';
import { TopNav } from '@/components/ui/structural/TopNav';
import { OwnerReview } from '@/components/ui/reviews/OwnerReview';
import { ProductDetailsTopSection } from '@/components/ui/shop/ProductDetailsTopSection';
import { ProductDetailsMainSection } from '@/components/ui/shop/ProductDetailsMainSection';
import { Divider } from '@/components/ui/common/Divider';

export default function Home() {
  return (
    <>
      <TopNav />
      <div
        className={clsx(
          'mx-auto lg:my-10',
          'grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4'
        )}
      >
        <div id="swabKitLeftSide" className="md:container">
          <ProductCarousel />
					<OwnerReview />
        </div>
        <div id="swabKitRightSide" className="container">
					<ProductDetailsTopSection />
					<Divider className="opacity-0 my-4 md:opacity-20 md:my-8"/>
					<ProductDetailsMainSection />
				</div>
      </div>
    </>
  );
}
