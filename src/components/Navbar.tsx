import Container from "./Container";
import Button from "./buttons/Button";
import Logo from "./Logo";

const Navbar = () => {
		const navItems: string[] = ["Services", "About Us", "Case Studies", "Blog", "FAQ"];

		return (
				<nav>
						<Container className="flex justify-between items-center mt-[clamp(24px,calc(24px+26*((100vw-375px)/905)),50px)]">
								<Logo />
								<div className="hidden 2lg:flex items-center gap-10">
										{navItems.map((item, i) => (
												<p
														key={i}
														className="nav-items text-[16px] xl:text-[18px] 2xl:text-[20px]"
												>
														{item}
												</p>
										))}
								</div>
								<Button text="Get started" />
						</Container>
				</nav>
		);
};

export default Navbar;