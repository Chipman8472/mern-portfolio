export default function NavBar() {
  const items = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/20 backdrop-blur border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-bold text-lg text-white">Justin • Portfolio</a>
        <nav className="flex gap-6 text-sm">
          {items.map(it => (
            <a key={it.href} href={it.href} className="text-gray-200 hover:text-space-accent">
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
