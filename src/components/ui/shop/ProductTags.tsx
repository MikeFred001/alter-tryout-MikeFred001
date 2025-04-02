import { Badge } from "@/components/ui/common/Badge";
import { CircleCheck } from "@/components/icons/CircleCheck";
import { Bolt } from "@/components/icons/Bolt";

export const ProductTags = () => {
	return (
		<div className="flex gap-2">
			<Badge
				className="text-xs"
				icon={<CircleCheck />}
			>
				HSA/FSA <span className="font-light">Eligible</span>
			</Badge>
			<Badge
				className="text-xs"
				icon={<Bolt />}
			>
				200,000+<span className="font-light">Traits in 2024</span>
			</Badge>
		</div>
	)
}
