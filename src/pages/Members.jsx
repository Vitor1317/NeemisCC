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
		{
			avatar: (
				<Vitor
					key={1}
					animationName={animationName}
					position-y={-3}
					scale={3}
				/>
			),
			content0:
				"Classes e objetos são fundamentais na POO, pois permitem a criação de código modular, reutilizável e sustentável, facilitando a manutenção e evolução dos sistemas",
			content1:
				"O ecossistema Java é robusto, com uma vasta biblioteca padrão, frameworks como Spring e Hibernate, e ferramentas como Maven e Gradle. Ele oferece um ambiente completo para desenvolvimento, execução e manutenção de aplicações escaláveis e seguras",
			content2:
				"A POO é aplicada no desenvolvimento de software para criar sistemas modulares e reutilizáveis. Facilita a manutenção, promove a reutilização de código e permite a criação de soluções complexas de forma organizada e eficiente, usando conceitos como herança e polimorfismo.",
		},
		{
			avatar: (
				<Guilherme
					key={2}
					animationName={animationName}
					position-y={-3}
					scale={3}
				/>
			),
			content0:
				"A Programação Orientada a Objetos (POO) surgiu na década de 1960 com a linguagem Simula 67, criada por Ole-Johan Dahl e Kristen Nygaard. Alan Kay popularizou o termo com a linguagem Smalltalk nos anos 1970",
			content1: "Sem conteúdo sobre",
			content2: "Sem conteúdo sobre",
		},
		{
			avatar: (
				<Neemias
					key={3}
					animationName={animationName}
					position-y={-3}
					scale={3}
				/>
			),
			content0: "Sem conteúdo sobre",
			content1:
				"Java foi criado em 1991 por James Gosling e sua equipe na Sun Microsystems. Originalmente chamado de Oak, foi lançado como Java em 1995, revolucionando a programação com seu lema 'write once, run anywhere'.",
			content2: "Sem conteúdo sobre",
		},
		{
			avatar: (
				<Ricardo
					key={4}
					animationName={animationName}
					position-y={-3}
					scale={3}
				/>
			),
			content0:
				"As características da POO incluem abstração, encapsulamento, herança e polimorfismo. Esses pilares permitem criar sistemas modulares, reutilizáveis e fáceis de manter, promovendo organização e eficiência no desenvolvimento de software",
			content1: "Sem conteúdo sobre",
			content2: "Sem conteúdo sobre",
		},
		{
			avatar: (
				<Davi key={5} animationName={animationName} position-y={-3} scale={3} />
			),
			content0:
				"Os fundamentos da POO incluem abstração, encapsulamento, herança e polimorfismo. Esses conceitos permitem a criação de sistemas modulares, reutilizáveis e fáceis de manter, promovendo a organização e eficiência no desenvolvimento de software.",
			content1:
				"A sintaxe Java é rigorosa e baseada em C/C++. Utiliza chaves {} para blocos de código, ponto e vírgula ; para terminar instruções, e suporta orientação a objetos com classes, métodos e atributos, promovendo clareza e organização no código.",
			content2:
				"A POO é aplicada no desenvolvimento de software para criar sistemas modulares e reutilizáveis. Facilita a manutenção, promove a reutilização de código e permite a criação de soluções complexas de forma organizada e eficiente, usando conceitos como herança e polimorfismo.",
		},
		{
			avatar: (
				<Pedro
					key={6}
					animationName={animationName}
					position-y={-3}
					scale={3}
				/>
			),
			content0:
				"As principais linguagens orientadas a objetos incluem Java, C++, Python, C#, e Ruby. Essas linguagens são amplamente utilizadas devido à sua capacidade de criar sistemas modulares, reutilizáveis e fáceis de manter",
			content1: "Sem conteúdo sobre",
			content2: "Sem conteúdo sobre",
		},
	];

	function handleSwapAvatar() {
		setSlider((state) => {
			if (state === avatars.length - 1) {
				return 0;
			}

			return state + 1;
		});
	}

	return (
		<section id="members" className="c-space my-20">
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

							<Suspense fallback={<CanvasLoader />}>
								{avatars[slider].avatar}
							</Suspense>
						</Canvas>
					</div>

					<div className="work-content">
						<div className="sm:py-10 py-5 sm:px-5 px-2.5">
							{workExperiences.map((item, index) => (
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
										<p className="font-bold text-amber-400">{item.name}</p>
										<p className="text-amber-100 text-sm mb-5">
											{item.pos} -- {item.duration}
										</p>
										<p className="group-hover:text-white transition-all ease-in-out duration-500">
											{avatars[slider]["content" + index]}
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
