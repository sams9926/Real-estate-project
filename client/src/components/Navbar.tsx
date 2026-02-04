import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Properties", href: "#properties" },
    { name: "Virtual Tours", href: "#tours" },
    { name: "Estate Finder", href: "#finder" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-gold-gradient">AURUM</span>
            <span className="text-sm text-muted-foreground tracking-widest hidden sm:inline">ESTATES</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 border border-primary/50 text-foreground text-sm tracking-wide hover:bg-primary/10 hover:border-primary transition-all duration-300">
              Schedule Tour
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors tracking-wide py-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-4 px-6 py-3 border border-primary/50 text-foreground text-sm tracking-wide hover:bg-primary/10 transition-all">
                Schedule Tour
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
