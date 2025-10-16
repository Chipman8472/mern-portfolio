export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur">
      <div className="container py-8 text-sm text-gray-300">
        <div>© {new Date().getFullYear()} Justin — All rights reserved.</div>
      </div>
    </footer>
  );
}
