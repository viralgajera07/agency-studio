import { Button } from "@/components/ui/button";
import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Moon, Sun, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/sampleData";

function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className={`h-9 w-9 rounded-md ${className}`} aria-hidden="true" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      data-ocid="header.theme_toggle"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:shadow-glow-sm ${className}`}
    >
      <Sun
        className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <Moon
        className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      />
    </button>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const router = useRouter();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return router.subscribe("onResolved", () => {
      setMenuOpen(false);
      setServicesOpen(false);
    });
  }, [router]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const SERVICE_ITEMS = [
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Web Development", href: "/services/website-design" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "E-commerce", href: "/services/ecommerce-development" },
    { label: "Rebuild Your Website", href: "/services/rebuild-website" },
  ];

  return (
    <header
      data-ocid="header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link
          to="/"
          data-ocid="header.logo_link"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm group"
          aria-label="Korvex — Home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary group-hover:scale-110 transition-smooth">
            <Zap
              className="h-4 w-4 text-white icon-bounce"
              aria-hidden="true"
            />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Kor<span className="gradient-text">vex</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = currentPath === link.href;
            const isServices = link.label === "Services";
            if (isServices) {
              return (
                <li key={link.href} className="relative">
                  <button
                    type="button"
                    data-ocid="header.nav_services"
                    className={`relative px-4 py-2 rounded-md text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring flex items-center gap-1 ${
                      currentPath.startsWith("/services")
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{
                          duration: 0.18,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute top-full left-0 mt-1 w-52 rounded-xl bg-card border border-border shadow-elevated overflow-hidden z-50"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        data-ocid="header.services_dropdown"
                      >
                        <ul className="py-1.5">
                          {SERVICE_ITEMS.map((item) => (
                            <li key={item.href}>
                              <Link
                                to={item.href}
                                data-ocid={`header.services_item_${item.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                                className={`block px-4 py-2.5 text-sm transition-smooth hover:bg-primary/10 hover:text-primary ${
                                  currentPath === item.href
                                    ? "text-primary bg-primary/10"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  data-ocid={`header.nav_${link.label.toLowerCase()}`}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring nav-underline ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contact">
            <Button
              data-ocid="header.cta_button"
              className="gradient-primary text-white font-semibold border-0 btn-shine hover:scale-[1.04] hover:shadow-glow transition-smooth"
            >
              Get a Free Quote
            </Button>
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            data-ocid="header.mobile_menu_toggle"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center justify-center h-10 w-10 rounded-md text-foreground hover:bg-muted/50 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            data-ocid="header.mobile_nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-card/98 backdrop-blur-md border-b border-border"
          >
            <ul className="container mx-auto flex flex-col py-4 px-4 gap-1">
              {NAV_LINKS.map((link, i) => {
                const isActive = currentPath === link.href;
                const isServices = link.label === "Services";
                if (isServices) {
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.07 }}
                    >
                      <button
                        type="button"
                        data-ocid="header.mobile_nav_services"
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                          currentPath.startsWith("/services")
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-expanded={mobileServicesOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.22,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden pl-4 mt-1 flex flex-col gap-0.5"
                            data-ocid="header.mobile_services_submenu"
                          >
                            {SERVICE_ITEMS.map((item) => (
                              <li key={item.href}>
                                <Link
                                  to={item.href}
                                  data-ocid={`header.mobile_service_${item.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                                  className={`block px-4 py-2.5 rounded-md text-sm transition-smooth hover:bg-primary/10 hover:text-primary ${
                                    currentPath === item.href
                                      ? "text-primary bg-primary/10"
                                      : "text-muted-foreground"
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                }
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.07 }}
                  >
                    <Link
                      to={link.href}
                      data-ocid={`header.mobile_nav_${link.label.toLowerCase()}`}
                      className={`block px-4 py-3 rounded-md text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                className="pt-2"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: NAV_LINKS.length * 0.07 }}
              >
                <Link to="/contact" className="block">
                  <Button
                    data-ocid="header.mobile_cta_button"
                    className="w-full gradient-primary text-white font-semibold border-0 btn-shine"
                  >
                    Get a Free Quote
                  </Button>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
