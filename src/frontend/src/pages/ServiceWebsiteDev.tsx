import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  FileCode,
  Globe,
  HeartHandshake,
  Layout,
  Lock,
  MessageCircle,
  Pencil,
  Rocket,
  Search,
  Settings,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "../data/sampleData";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WHAT_WE_PROVIDE = [
  {
    icon: <Layout className="w-5 h-5" />,
    label: "Custom Website Design (from scratch)",
    detail:
      "Bespoke designs that reflect your brand — no templates, no shortcuts",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    label: "Responsive Mobile-First Development",
    detail: "Pixel-perfect layouts across all screen sizes from day one",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    label: "Performance & Speed Optimization",
    detail: "Sub-2s load times with Core Web Vitals tuned for top scores",
  },
  {
    icon: <Search className="w-5 h-5" />,
    label: "On-Page SEO Setup",
    detail:
      "Semantic HTML, meta tags, schema markup, and sitemap configuration",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    label: "CMS Integration",
    detail:
      "WordPress, Webflow, or headless CMS so you can update content easily",
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    label: "Website Maintenance & Support",
    detail:
      "Ongoing updates, security patches, and performance monitoring post-launch",
  },
];

const ADVANTAGES = [
  {
    icon: <Pencil className="w-6 h-6" />,
    title: "Unique Design",
    desc: "Stand out from every competitor — every site we build is custom, never cloned.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-First",
    desc: "Perfect on every device. More than 60% of traffic is mobile — we start there.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Loading",
    desc: "Optimised assets, lazy-loading, and CDN delivery for lightning-fast experiences.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO-Ready",
    desc: "Built to rank higher on Google from the very first line of code.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Secure & Reliable",
    desc: "SSL, security best practices, and regular audits to protect your site and users.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Easy to Manage",
    desc: "CMS integration means you control your content without touching code.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Scalable",
    desc: "Architecture that grows with your business — add pages, features, and integrations effortlessly.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Ongoing Support",
    desc: "We stay with you after launch — fixes, updates, and new features whenever needed.",
  },
];

const PROCESS = [
  {
    step: 1,
    icon: <FileCode className="w-6 h-6" />,
    title: "Discovery & Brief",
    desc: "We learn your brand, goals, competitors, and user expectations to craft a clear brief.",
  },
  {
    step: 2,
    icon: <Pencil className="w-6 h-6" />,
    title: "Design Mockup",
    desc: "High-fidelity wireframes and full UI designs for review and approval before any code.",
  },
  {
    step: 3,
    icon: <Code2 className="w-6 h-6" />,
    title: "Development",
    desc: "Clean, performant code with accessibility, SEO, and mobile-first built in.",
  },
  {
    step: 4,
    icon: <Globe className="w-6 h-6" />,
    title: "Testing & QA",
    desc: "Cross-browser and cross-device testing, performance audits, and bug fixes.",
  },
  {
    step: 5,
    icon: <Rocket className="w-6 h-6" />,
    title: "Launch",
    desc: "Seamless deployment with DNS, SSL, and post-launch monitoring in place.",
  },
];

export default function ServiceWebsiteDev() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent("Hi! I'm interested in Website Design & Development. Can we discuss?")}`;
  const waGeneralHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div>
      {/* ── HERO ── */}
      <section
        data-ocid="web.hero.section"
        className="relative overflow-hidden bg-card border-b border-border"
        aria-labelledby="web-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full opacity-12 blur-3xl gradient-primary" />
          <div
            className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
            style={{ background: "oklch(var(--accent) / 0.5)" }}
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              to="/services"
              className="hover:text-primary transition-smooth flex items-center gap-1"
              data-ocid="web.breadcrumb.services_link"
            >
              <ArrowLeft className="w-4 h-4" /> Services
            </Link>
            <ChevronRight className="w-4 h-4 opacity-50" />
            <span className="text-foreground font-medium">
              Website Development
            </span>
          </motion.nav>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <Badge
                  variant="outline"
                  className="mb-4 border-accent/40 text-accent font-body text-xs tracking-widest uppercase px-4 py-1"
                >
                  Build
                </Badge>
              </motion.div>
              <motion.h1
                id="web-hero-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                Website Design &{" "}
                <span className="gradient-text">Development</span>
              </motion.h1>
              <motion.p
                className="font-display text-xl sm:text-2xl font-semibold text-accent mb-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Beautiful, fast websites that convert visitors into clients
              </motion.p>
              <motion.p
                className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                We design and develop high-performance websites that look
                stunning on every device — engineered to build trust, rank on
                Google, and turn visitors into paying customers.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.35 }}
              >
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="gradient-primary text-primary-foreground border-0 font-semibold px-8 h-12 transition-smooth hover:shadow-glow hover:scale-[1.03] btn-shine shadow-elevated"
                    data-ocid="web.hero.whatsapp_button"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us
                  </Button>
                </a>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold px-8 h-12 border-border hover:bg-muted transition-smooth"
                    data-ocid="web.hero.contact_button"
                  >
                    Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Hero panel */}
            <motion.div
              className="flex-shrink-0 w-full lg:w-64 xl:w-72"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 p-1 shadow-elevated">
                <div className="rounded-xl bg-card p-8 flex flex-col items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-elevated">
                    <Globe className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="text-center">
                    <p className="font-display font-bold text-2xl text-foreground">
                      Web Dev
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Design · Build · Launch
                    </p>
                  </div>
                  {[
                    { label: "Avg. Load Time", value: "<2s" },
                    { label: "PageSpeed Score", value: "95+" },
                    { label: "Sites Delivered", value: "40+" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="w-full flex justify-between items-center py-2 border-t border-border"
                    >
                      <span className="text-muted-foreground text-xs">
                        {stat.label}
                      </span>
                      <span className="font-display font-bold text-primary text-sm">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE PROVIDE ── */}
      <section
        data-ocid="web.provide.section"
        className="bg-background py-20 md:py-28"
        aria-labelledby="web-provide-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-12"
          >
            <Badge
              variant="outline"
              className="mb-4 border-accent/40 text-accent text-xs tracking-widest uppercase px-4 py-1"
            >
              What We Provide
            </Badge>
            <h2
              id="web-provide-heading"
              className="font-display text-3xl sm:text-4xl font-bold mb-5"
            >
              Full-Spectrum <span className="gradient-text">Web Services</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From first pixel to post-launch support — we handle every aspect
              of building your online presence with no corners cut and no
              compromises on quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHAT_WE_PROVIDE.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-glow hover:-translate-y-1 hover:bg-accent/5 border-glow transition-smooth group"
                data-ocid={`web.provide.item.${i + 1}`}
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:border-accent group-hover:text-white icon-bounce transition-smooth">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-foreground leading-snug mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: WHAT_WE_PROVIDE.length * 0.07,
              }}
              className="md:col-span-2 flex items-center gap-3 p-5 rounded-xl bg-primary/8 border border-primary/25"
            >
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="font-body text-sm text-foreground">
                Every project includes a dedicated project manager, milestone
                reviews, and a 30-day post-launch warranty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section
        data-ocid="web.advantages.section"
        className="bg-muted/30 py-20 md:py-28"
        aria-labelledby="web-advantages-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge
              variant="outline"
              className="mb-4 border-primary/40 text-primary text-xs tracking-widest uppercase px-4 py-1"
            >
              Why Choose Us
            </Badge>
            <h2
              id="web-advantages-heading"
              className="font-display text-3xl sm:text-4xl font-bold mb-4"
            >
              The <span className="gradient-text">Advantages</span> of Working
              with Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Eight reasons why businesses trust Agency Studio to build their
              online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ADVANTAGES.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                data-ocid={`web.advantage.item.${i + 1}`}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/35 hover:shadow-glow hover:-translate-y-1 border-glow transition-smooth"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground mb-4 group-hover:shadow-glow icon-spin transition-smooth shadow-card">
                  {adv.icon}
                </div>
                <h3 className="font-display font-bold text-foreground text-base mb-2">
                  {adv.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        data-ocid="web.process.section"
        className="bg-background py-20 md:py-28"
        aria-labelledby="web-process-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="mb-4 border-accent/40 text-accent text-xs tracking-widest uppercase px-4 py-1"
            >
              How It Works
            </Badge>
            <h2
              id="web-process-heading"
              className="font-display text-3xl sm:text-4xl font-bold mb-4"
            >
              Our <span className="gradient-text">5-Step Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              From brief to live — a predictable, transparent process with zero
              surprises.
            </p>
          </motion.div>

          <div className="relative">
            <div
              className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px"
              style={{
                background:
                  "linear-gradient(90deg, oklch(var(--primary) / 0.3), oklch(var(--accent) / 0.3))",
              }}
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {PROCESS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                  data-ocid={`web.process.item.${i + 1}`}
                >
                  <div className="relative w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground shadow-elevated mb-4 z-10">
                    {step.icon}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-primary text-primary text-xs font-bold font-display flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        data-ocid="web.cta.section"
        className="relative overflow-hidden bg-card border-t border-border py-20 md:py-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full gradient-primary opacity-10 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Let's build a website that works as hard as you do. Free
              consultation, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waGeneralHref} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground border-0 font-semibold text-base px-8 h-12 transition-smooth hover:shadow-glow hover:scale-[1.03] btn-shine shadow-elevated"
                  data-ocid="web.cta.whatsapp_button"
                >
                  <MessageCircle className="mr-2 w-5 h-5" /> Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-base px-8 h-12 border-border hover:bg-muted hover:border-primary/40 hover:shadow-glow-sm hover:scale-[1.02] transition-smooth"
                  data-ocid="web.cta.contact_button"
                >
                  Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
