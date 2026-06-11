export default function Footer() {
  return (
    <footer className="py-12 bg-primary text-white text-center">
      <div className="container mx-auto px-6">
        <p className="font-serif text-xl font-bold mb-4">Allisson Acioli Advocacia</p>
        <p className="text-sm text-slate-300 mb-6">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 text-sm text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
