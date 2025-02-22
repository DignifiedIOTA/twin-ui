import { Meta, StoryObj } from "@storybook/react";
import { HiClock, HiCheck, HiOutlineX } from "react-icons/hi";
import { RiNumber1 } from "react-icons/ri";
import { Badge } from "flowbite-react";

const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	component: Badge,
	argTypes: {
		color: {
			options: ["gray", "failure", "success", "warning", "blue"],
			control: { type: "inline-radio" }
		},
		size: {
			options: ["xs", "sm"],
			control: { type: "inline-radio" }
		},
		icon: {
			control: { type: "boolean" }
		}
	}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AllTextBadges: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			{["gray", "failure", "warning", "success", "blue"].map(color => (
				<Badge key={color} color={color} size="sm">
					Badge
				</Badge>
			))}
		</div>
	)
};

export const AllIconBadges: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			{["gray", "failure", "warning", "success", "blue"].map(color => (
				<Badge key={color} color={color} icon={HiClock} size="sm">
					Badge
				</Badge>
			))}
		</div>
	)
};
export const AllTextMDBadges: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			{["gray", "failure", "warning", "success", "blue"].map(color => (
				<Badge key={color} color={color} size="md">
					Badge
				</Badge>
			))}
		</div>
	)
};
export const AllIconMDBadges: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			{["gray", "failure", "warning", "success", "blue"].map(color => (
				<Badge key={color} color={color} size="md" icon={HiClock}>
					Badge
				</Badge>
			))}
		</div>
	)
};
export const AllIconSMRightBadges: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			{["gray", "failure", "warning", "success", "blue"].map(color => (
				<Badge key={color} color={color} size="sm">
					Badge
					<HiOutlineX className="ml-2" />
				</Badge>
			))}
		</div>
	)
};
export const AllIconMDRightBadges: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			{["gray", "failure", "warning", "success", "blue"].map(color => (
				<Badge key={color} color={color} size="md">
					Badge
					<HiOutlineX className="ml-2" />
				</Badge>
			))}
		</div>
	)
};
export const IconBadges: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			{["gray", "failure", "warning", "success", "blue"].map(color => (
				<Badge key={color} color={color} size="sm" icon={HiCheck} />
			))}
		</div>
	)
};

export const BadgesNumberSmall: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			{["gray", "failure", "warning", "success", "blue"].map(color => (
				<Badge key={color} color={color} size="md" icon={RiNumber1}></Badge>
			))}
		</div>
	)
};
