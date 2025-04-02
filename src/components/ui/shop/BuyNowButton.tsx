
interface BuyNowButtonProps {
	className?: string
}

export const BuyNowButton: React.FC<BuyNowButtonProps> = ({className}) => {
	return (
		<button className={`bg-alter-black text-alter25-button-light text-lg py-[1.25rem] w-full rounded-full ${className}`}>
			Buy Now
		</button>
	)
}
