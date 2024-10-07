export const navLinks = [
	{
		id: 1,
		name: "Principal",
		href: "#home",
	},
	{
		id: 3,
		name: "Sobre",
		href: "#about",
	},
	{
		id: 2,
		name: "Membros",
		href: "#members",
	},
	{
		id: 4,
		name: "Conteúdo",
		href: "#content",
	},
];

export const myProjects = [
	{
		title: "Paradigma orientado a objetos - POO",
		desc: "O paradigma orientado a objetos (POO) surgiu na década de 1960, com os primeiros conceitos sendo explorados na linguagem Simula, desenvolvida por Ole-Johan Dahl e Kristen Nygaard. Na década de 1970, a linguagem Smalltalk, criada por Alan Kay e sua equipe, popularizou a POO, introduzindo conceitos fundamentais como encapsulamento e herança. Nos anos 80 e 90, a POO ganhou impulso com linguagens como C++ e Java, que integraram esses conceitos em ambientes de programação amplamente utilizados.",
		subdesc:
			"Com o crescimento da complexidade dos sistemas, a POO se tornou um modelo dominante, influenciando o desenvolvimento de software e promovendo uma abordagem mais modular e reutilizável. Hoje, é um dos paradigmas mais adotados em diversas linguagens de programação.",
		href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
		texture: "/textures/project/project2.mp4",
		logo: "/assets/paradigma.png",
		logoStyle: {
			backgroundColor: "#13202F",
			border: "0.2px solid #17293E",
			boxShadow: "0px 0px 60px 0px #2F6DB54D",
		},
		spotlight: "/assets/spotlight2.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
			{
				id: 4,
				name: "Java",
				path: "/assets/javaico.png",
			},
		],
	},
	{
		title: "Java lang - java",
		desc: "Java foi criado por James Gosling e sua equipe na Sun Microsystems, com o primeiro lançamento em 1995. O objetivo era desenvolver uma linguagem de programação que fosse independente de plataforma, permitindo que os programas fossem executados em diferentes dispositivos sem necessidade de recompilação.",
		subdesc:
			"Java ganhou popularidade rapidamente, especialmente com o crescimento da internet.",
		href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
		texture: "/textures/project/project1.mp4",
		logo: "/assets/javalogo.png",
		logoStyle: {
			backgroundColor: "#2A1816",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
			{
				id: 4,
				name: "Java",
				path: "/assets/javaico.png",
			},
		],
	},
	// {
	// 	title: "CarePulse - Health Management System",
	// 	desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
	// 	subdesc:
	// 		"With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
	// 	href: "https://www.youtube.com/watch?v=lEflo_sc82g",
	// 	texture: "/textures/project/project3.mp4",
	// 	logo: "/assets/project-logo3.png",
	// 	logoStyle: {
	// 		backgroundColor: "#60f5a1",
	// 		background:
	// 			"linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
	// 		border: "0.2px solid rgba(208, 213, 221, 1)",
	// 		boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
	// 	},
	// 	spotlight: "/assets/spotlight3.png",
	// 	tags: [
	// 		{
	// 			id: 1,
	// 			name: "React.js",
	// 			path: "/assets/react.svg",
	// 		},
	// 		{
	// 			id: 2,
	// 			name: "TailwindCSS",
	// 			path: "assets/tailwindcss.png",
	// 		},
	// 		{
	// 			id: 3,
	// 			name: "TypeScript",
	// 			path: "/assets/typescript.png",
	// 		},
	// 		{
	// 			id: 4,
	// 			name: "Framer Motion",
	// 			path: "/assets/framer.png",
	// 		},
	// 	],
	// },
	// {
	// 	title: "Horizon - Online Banking Platform",
	// 	desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
	// 	subdesc:
	// 		"Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
	// 	href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
	// 	texture: "/textures/project/project4.mp4",
	// 	logo: "/assets/project-logo4.png",
	// 	logoStyle: {
	// 		backgroundColor: "#0E1F38",
	// 		border: "0.2px solid #0E2D58",
	// 		boxShadow: "0px 0px 60px 0px #2F67B64D",
	// 	},
	// 	spotlight: "/assets/spotlight4.png",
	// 	tags: [
	// 		{
	// 			id: 1,
	// 			name: "React.js",
	// 			path: "/assets/react.svg",
	// 		},
	// 		{
	// 			id: 2,
	// 			name: "TailwindCSS",
	// 			path: "assets/tailwindcss.png",
	// 		},
	// 		{
	// 			id: 3,
	// 			name: "TypeScript",
	// 			path: "/assets/typescript.png",
	// 		},
	// 		{
	// 			id: 4,
	// 			name: "Framer Motion",
	// 			path: "/assets/framer.png",
	// 		},
	// 	],
	// },
	// {
	// 	title: "Imaginify - AI Photo Manipulation App",
	// 	desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
	// 	subdesc:
	// 		"Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
	// 	href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
	// 	texture: "/textures/project/project5.mp4",
	// 	logo: "/assets/project-logo5.png",
	// 	logoStyle: {
	// 		backgroundColor: "#1C1A43",
	// 		border: "0.2px solid #252262",
	// 		boxShadow: "0px 0px 60px 0px #635BFF4D",
	// 	},
	// 	spotlight: "/assets/spotlight5.png",
	// 	tags: [
	// 		{
	// 			id: 1,
	// 			name: "React.js",
	// 			path: "/assets/react.svg",
	// 		},
	// 		{
	// 			id: 2,
	// 			name: "TailwindCSS",
	// 			path: "assets/tailwindcss.png",
	// 		},
	// 		{
	// 			id: 3,
	// 			name: "TypeScript",
	// 			path: "/assets/typescript.png",
	// 		},
	// 		{
	// 			id: 4,
	// 			name: "Framer Motion",
	// 			path: "/assets/framer.png",
	// 		},
	// 	],
	// },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		deskScale: isSmall ? 0.07 : isMobile ? 0.07 : isTablet ? 0.1 : 0.11,
		deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
		cubePosition: isSmall
			? [4, -5, 0]
			: isMobile
				? [5, -5, 0]
				: isTablet
					? [5, -5, 0]
					: [9, -5.5, 0],
		reactLogoPosition: isSmall
			? [3, 4, 0]
			: isMobile
				? [5, 4, 0]
				: isTablet
					? [5, 4, 0]
					: [12, 3, 0],
		ringPosition: isSmall
			? [-5, 7, 0]
			: isMobile
				? [-10, 10, 0]
				: isTablet
					? [-12, 10, 0]
					: [-24, 10, 0],
		targetPosition: isSmall
			? [-5, -10, -10]
			: isMobile
				? [-9, -10, -10]
				: isTablet
					? [-11, -7, -10]
					: [-13, -13, -10],
	};
};

export const workExperiences = [
	{
		id: 1,
		name: "Poo",
		pos: "Programação orientada a objetos",
		duration: "1968 - Presente",
		title:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et praesentium quis placeat, tempora sit asperiores officiis modi provident natus corrupti! Rem tempore sit ea expedita. Fugiat quasi blanditiis molestias?",
		icon: "/assets/paradigma2.png",
		animation: "victory",
	},
	{
		id: 2,
		name: "Java",
		pos: "Java lang",
		duration: "1994 - Presente",
		title:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et praesentium quis placeat, tempora sit asperiores officiis modi provident natus corrupti! Rem tempore sit ea expedita. Fugiat quasi blanditiis molestias?",
		icon: "/assets/java2.png",
		animation: "clapping",
	},
	{
		id: 3,
		name: "Aplicação",
		pos: "Utilidade do paradigma",
		duration: "1968 - Presente",
		title:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et praesentium quis placeat, tempora sit asperiores officiis modi provident natus corrupti! Rem tempore sit ea expedita. Fugiat quasi blanditiis molestias?",
		icon: "/assets/pratico.png",
		animation: "salute",
	},
];
