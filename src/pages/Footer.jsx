export function Footer() {
	return (
		<footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
			<div className="text-yellow-700 flex gap-2">
				<p className="hover:cursor-pointer">Termos & Condições</p>
				<p className="hover:cursor-pointer">|</p>
				<p className="hover:cursor-pointer">Política de privacidade</p>
			</div>
			<div className="flex gap-3">
				<a href="https://github.com/NeemisCC" className="social-icon">
					<img className="w-1/2 h-1/2" src="/assets/github.svg" alt="github" />
				</a>
			</div>
			<p className="text-yellow-700 hover:cursor-pointer">
				©2024 NeemisCC. Todos os direitos reservados.
			</p>
		</footer>
	);
}
