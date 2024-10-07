import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Suspense } from "react";
import { DemoComputer } from "../components/DemoComputer";
import { CanvasLoader } from "../components/Loading";
import { myProjects } from "../constants";

const projectCount = myProjects.length - 1;

export function About() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const currentProject = myProjects[selectedIndex];

	function handleNavigation(direction) {
		setSelectedIndex((prevIndex) => {
			if (direction == "previous") {
				return prevIndex === 0 ? projectCount : prevIndex - 1;
			} else {
				return prevIndex === projectCount ? 0 : prevIndex + 1;
			}
		});
	}

	return (
		<section id="about" className="c-space my-20">
			<p className="head-text mt-44">Sobre nosso trabalho</p>
			<div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
				<div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
					<div className="absolute top-0 right-0">
						<img
							className="w-full h-96 object-cover rounded-xl"
							src={currentProject.spotlight}
							alt=""
						/>
					</div>

					<div
						className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
						style={currentProject.logoStyle}
						alt=""
					>
						<img
							className="w-10 h-10 shadow-sm"
							src={currentProject.logo}
							alt=""
						/>
					</div>

					<div className="flex flex-col gap-5 text-white-600 my-5">
						<p className="text-amber-400 text-2xl font-semibold animatedText">
							{currentProject.title}
						</p>
						<p className="animatedText text-white-100">{currentProject.desc}</p>
						<p className="animatedText text-white-100">
							{currentProject.subdesc}
						</p>
					</div>
					<div className="flex items-center justify-between flex-wrap gap-5">
						<div className="flex items-center gap-3">
							{currentProject.tags.map((tag, i) => (
								<div key={i} className="tech-logo">
									<img src={tag.path} alt="" />
								</div>
							))}
						</div>

						<a
							className="flex items-center gap-2 cursor-pointer text-white-600"
							href=""
							target="_blank"
							rel="noreferrer"
						>
							<p>Ver conteúdo</p>
							<img className="w-3 h-3" src="/assets/arrow-up.png" alt="" />
						</a>
					</div>
					<div className="flex justify-between items-center mt-7">
						<button
							className="arrow-btn"
							onClick={() => handleNavigation("previous")}
						>
							<img className="w-4 h-4" src="/assets/left-arrow.png" alt="" />
						</button>

						<button
							className="arrow-btn"
							onClick={() => handleNavigation("next")}
						>
							<img className="w-4 h-4" src="/assets/right-arrow.png" alt="" />
						</button>
					</div>
				</div>
				<div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
					<Canvas>
						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 5]} />

						<Center>
							<Suspense fallback={<CanvasLoader />}>
								<group scale={2} position={[0, -3, 0]} rotation={[0, -0, 1, 0]}>
									<DemoComputer texture={currentProject.texture} />
								</group>
							</Suspense>
						</Center>
						<OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
					</Canvas>
				</div>
			</div>
		</section>
	);
}
