import LogoIcon from "../assets/icons/logo.png";

const Logo = () => {
		return (
				<div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
						<img
								className="size-[clamp(32px,calc(32px+10*((100vw-375px)/393)),42px)]"
								src={LogoIcon}
								alt="Pixel Logo"
						/>
						<p className="font-manrope font-medium text-[clamp(28px,calc(28px+10*((100vw-375px)/393)),38px)] tracking-[-3%] leading-[111%]">
								Pixel
						</p>
				</div>
		);
};

export default Logo;
