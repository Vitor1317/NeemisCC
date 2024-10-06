import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useState } from "react";
import { Davi } from "../avatar/Davi";
import { Guilherme } from "../avatar/Guilherme";
import { Neemias } from "../avatar/Neemias";
import { Pedro } from "../avatar/Pedro";
import { Ricardo } from "../avatar/Ricardo";
import { Vitor } from "../avatar/Vitor";
import { CanvasLoader } from "../components/Loading";
import { workExperiences } from "../constants";

export function Members() {
	const [animationName, setAnimationName] = useState("idle");
	const [slider, setSlider] = useState(0);

	const avatars = [
		<Vitor key={1} animationName={animationName} position-y={-3} scale={3} />,
		<Guilherme
			key={2}
			animationName={animationName}
			position-y={-3}
			scale={3}
		/>,
		<Neemias key={3} animationName={animationName} position-y={-3} scale={3} />,
		<Ricardo key={4} animationName={animationName} position-y={-3} scale={3} />,
		<Davi key={5} animationName={animationName} position-y={-3} scale={3} />,
		<Pedro key={6} animationName={animationName} position-y={-3} scale={3} />,
	];

	function handleSwapAvatar() {
		setSlider((state) => {
			console.log(state);
			if (state === avatars.length - 1) {
				return 0;
			}

			return state + 1;
		});
	}

	return (
		<section className="c-space my-20">
			<div className="w-full text-white-600">
				<h3 className="head-text">Membros</h3>

				<div className="work-container">
					<div className="work-canvas">
						<Canvas
							onClick={handleSwapAvatar}
							onPointerOver={() => setAnimationName(null)}
						>
							<ambientLight intensity={7} />
							<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
							<directionalLight position={[10, 10, 10]} intensity={1} />
							<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

							<Suspense fallback={<CanvasLoader />}>{avatars[slider]}</Suspense>
						</Canvas>
					</div>

					<div className="work-content">
						<div className="sm:py-10 py-5 sm:px-5 px-2.5">
							{workExperiences.map((item) => (
								<div
									onPointerOver={() =>
										setAnimationName(item.animation.toLowerCase())
									}
									onPointerOut={() => setAnimationName("idle")}
									key={item.id}
									className="work-content_container group"
								>
									<div className="flex flex-col h-full justify-start items-center py-2">
										<div className="work-content_logo">
											<img className="w-full h-full" src={item.icon} alt="" />
										</div>
										<div className="work-content_bar" />
									</div>

									<div className="sm:p-5 px-2.5 py-5">
										<p className="font-bold text-white-800">{item.name}</p>
										<p className="text-sm mb-5">
											{item.pos} -- {item.duration}
										</p>
										<p className="group-hover:text-white transition-all ease-in-out duration-500">
											{item.title}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
