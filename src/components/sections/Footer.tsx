export default function Footer() {
    return (
      <footer className="bg-[var(--surface)] py-12 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[var(--accent)] rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="text-[var(--text)] font-bold text-xl tracking-tight">ForexAcademy</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-[var(--text-muted)]">
            <a href="#" className="hover:text-[var(--text)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--text)] transition-colors">Terms</a>
            <a href="#contact" className="hover:text-[var(--text)] transition-colors">Contact</a>
          </div>
          
          <p className="text-[var(--text-muted)] text-sm font-light">
            &copy; {new Date().getFullYear()} ForexAcademy.
          </p>
        </div>
      </footer>
    );
  }