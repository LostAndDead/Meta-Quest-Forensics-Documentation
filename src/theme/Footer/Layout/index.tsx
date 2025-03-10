import FontToggle from "@site/src/components/fontToggle";
import type { Props } from "@theme/Footer/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

export default function FooterLayout({
	style,
	links,
	logo,
	copyright,
}: Props): ReactNode {
	return (
		<footer
			className={clsx("footer", {
				"footer--dark": style === "dark",
			})}
		>
			<div className="container container-fluid">
				{links}
				{(logo || copyright) && (
					<div className="footer__bottom text--center">
						{logo && <div className="margin-bottom--sm">{logo}</div>}
						{copyright}
				    <FontToggle />
					</div>
				)}
			</div>
			
		</footer>
	);
}
