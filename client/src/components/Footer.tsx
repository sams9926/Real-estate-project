const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif font-bold text-gold-gradient mb-4">AURUM</h3>
            <p className="text-muted-foreground max-w-md mb-6">
              Curating extraordinary properties for discerning clients worldwide. 
              Where luxury meets legacy.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              <span className="text-sm text-muted-foreground tracking-widest">ESTATES</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Properties", "Virtual Tours", "Estate Finder", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>Beverly Hills, CA 90210</li>
              <li>+1 (310) 555-GOLD</li>
              <li>inquiries@aurum-estates.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 AURUM Estates. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
