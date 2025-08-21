interface Props {
		text: string;
		green?: boolean;
		className?: string;
}

const Button = ({ text, green = false, className }: Props) => {
		return (
				<button
						className={`${green ? "bg-primary" : "bg-white"} ${className ?? ""} button text-black`}
				>
						{text}
				</button>
		);
};

export default Button;
