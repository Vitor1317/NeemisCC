import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "../components/Button";
import { HackerRoom } from "../components/HackerRoom";
import { HeroCamera } from "../components/HeroCamera";
import { JavaLogo } from "../components/JavaLogo";
import { CanvasLoader } from "../components/Loading";
import { ReactLogo } from "../components/ReactLogo";
import { calculateSizes } from "../constants";

export function Hero() {
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTable = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const sizes = calculateSizes(isSmall, isMobile, isTable);

	return (
		<section className="min-h-screen w-full flex flex-col relative">
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
				<p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
					Olá, nós somos o grupo do Neemias{" "}
					<span className="waving-hand">🖐️</span>
				</p>
				<p className="hero_tag text-gray_gradient">
					Paradigma Orientado a Objetos
				</p>
			</div>
			<div className="mt-10 w-full h-full absolute inset-0">
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 30]} />
						<HeroCamera isMobile={isMobile}>
							<HackerRoom
								scale={sizes.deskScale}
								position={[0, -10, 0]}
								rotation={[0.4, 3.3, 0]}
							/>
						</HeroCamera>

						<group>
							<JavaLogo scale={1.25} position={[-20, -5, 0]} />
							<ReactLogo scale={1} position={[20, -5, 0]} />
						</group>
						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>

			<div className="absolute -bottom-28 left-0 right-0 w-full z-10 c-space">
				<a href="" className="w-fit ">
					<Button
						name="Conheça o conteúdo👌"
						isBeam={true}
						containerClass="sm:w-fit w-full sm:min-w-96/"
					/>
				</a>
			</div>
		</section>
	);
}
