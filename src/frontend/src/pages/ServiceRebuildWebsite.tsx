import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FileSearch,
  Gauge,
  Globe,
  Layers,
  MessageCircle,
  MoveRight,
  Paintbrush,
  RefreshCw,
  Rocket,
  Search,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "../data/sampleData";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WHAT_WE_PROVIDE = [
  {
    icon: <FileSearch className="w-5 h-5" />,
    label: "Complete Site Audit & Analysis",
    detail:
      "Deep-dive review of your existing site — performance, SEO, UX, and conversion gaps identified",
  },
  {
    icon: <Paintbrush className="w-5 h-5" />,
    label: "Modern Responsive Redesign",
    detail:
      "Fresh, brand-aligned visuals built mobile-first with contemporary design systems",
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    label: "Performance Optimization",
    detail:
      "Sub-2s load times, Core Web Vitals tuning, and image compression for a blazing-fast experience",
  },
  {
    icon: <Search className="w-5 h-5" />,
    label: "SEO Improvements",
    detail:
      "On-page SEO restructure, schema markup, meta tags, and URL architecture overhaul",
  },
  {
    icon: <MoveRight className="w-5 h-5" />,
    label: "Content Migration",
    detail:
      "All existing pages, blog posts, products, and media migrated cleanly — zero data loss",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    label: "New Features & Functionality",
    detail:
      "Lead forms, booking systems, chat integrations, and custom tools added to your rebuilt site",
  },
];

const ADVANTAGES = [
  {
    icon: <Paintbrush className="w-6 h-6" />,
    title: "Fresh Modern Look",
    description:
      "Leave the outdated aesthetic behind. Your new site will reflect a premium, credible brand.",
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "Faster Load Times",
    description:
      "Every rebuilt site is speed-optimized. Slow pages cost you visitors — we fix that permanently.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Better SEO Rankings",
    description:
      "Restructured architecture, clean code, and proper markup help Google rank you higher.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-First Design",
    description:
      "Over 70% of traffic is mobile. Your rebuilt site will look perfect on every screen size.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Improved Conversions",
    description:
      "Strategic CTAs, optimized layouts, and trust signals that turn visitors into paying clients.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Future-Proof Tech",
    description:
      "Built on modern frameworks — easy to update, scale, and maintain as your business grows.",
  },
];

const PROCESS = [
  {
    step: 1,
    icon: <FileSearch className="w-5 h-5" />,
    title: "Audit",
    description:
      "We analyse your current site — speed, UX, SEO, and conversion opportunities — to build a clear rebuild roadmap.",
  },
  {
    step: 2,
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Strategy",
    description:
      "A detailed plan covering design direction, tech stack, feature list, content structure, and SEO approach.",
  },
  {
    step: 3,
    icon: <Paintbrush className="w-5 h-5" />,
    title: "Design",
    description:
      "High-fidelity mockups and prototypes reviewed and approved before a single line of code is written.",
  },
  {
    step: 4,
    icon: <Layers className="w-5 h-5" />,
    title: "Development",
    description:
      "Clean, scalable build with all content migrated, features implemented, and performance tuned.",
  },
  {
    step: 5,
    icon: <Rocket className="w-5 h-5" />,
    title: "Launch",
    description:
      "Seamless go-live with zero downtime, post-launch monitoring, and 30-day support included.",
  },
];

export default function ServiceRebuildWebsite() {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodedMessage}`;

  return (
    <div data-ocid="service_rebuild.page">
      {/* ── Hero ── */}
      <section
        aria-labelledby="rebuild-hero-heading"
        className="relative overflow-hidden gradient-hero py-24 md:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -left-40 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.68 0.22 155), transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full opacity-15 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.2 135), transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link
              to="/services"
              className="hover:text-primary transition-smooth flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Services
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <span className="text-foreground font-medium">
              Rebuild Your Website
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="max-w-3xl"
          >
            <Badge
              variant="outline"
              className="mb-5 border-primary/40 text-primary font-body text-sm"
            >
              Website Rebuild
            </Badge>
            <h1
              id="rebuild-hero-heading"
              className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              Rebuild Your <span className="gradient-text">Website</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Transform your outdated website into a modern, high-performing
              digital asset. We rebuild from the ground up — faster, smarter,
              and built to convert.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-primary-foreground font-display font-semibold px-8 shadow-elevated hover:shadow-glow hover:scale-[1.03] transition-smooth btn-shine"
                data-ocid="service_rebuild.hero.cta_button"
              >
                <Link to="/contact">
                  Start Your Rebuild{" "}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border/60 text-foreground hover:border-primary/50 hover:text-primary font-display font-semibold px-8 transition-smooth"
                data-ocid="service_rebuild.hero.secondary_button"
              >
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What We Provide ── */}
      <section
        aria-labelledby="rebuild-provide-heading"
        className="py-20 md:py-28 bg-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2
              id="rebuild-provide-heading"
              className="font-display text-3xl font-bold text-foreground sm:text-4xl"
            >
              What We <span className="gradient-text">Provide</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to transform an outdated site into a powerful
              growth engine — handled end to end.
            </p>
          </motion.div>

          <div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            data-ocid="service_rebuild.provide.list"
          >
            {WHAT_WE_PROVIDE.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="group rounded-2xl bg-card border border-border/60 p-6 shadow-card hover:border-primary/30 hover:shadow-glow transition-smooth"
                data-ocid={`service_rebuild.provide.item.${i + 1}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary mb-4 shadow-card group-hover:shadow-glow transition-smooth">
                  <span className="text-primary-foreground">{item.icon}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Advantages ── */}
      <section
        aria-labelledby="rebuild-advantages-heading"
        className="py-20 md:py-28 bg-muted/30 border-y border-border/40"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2
              id="rebuild-advantages-heading"
              className="font-display text-3xl font-bold text-foreground sm:text-4xl"
            >
              Key <span className="gradient-text">Advantages</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Why a professional website rebuild pays for itself — fast.
            </p>
          </motion.div>

          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            data-ocid="service_rebuild.advantages.list"
          >
            {ADVANTAGES.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
                className="group flex gap-5 rounded-2xl bg-card border border-border/60 p-6 shadow-card hover:border-primary/30 hover:shadow-glow transition-smooth"
                data-ocid={`service_rebuild.advantage.item.${i + 1}`}
              >
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shadow-card group-hover:shadow-glow transition-smooth">
                  <span className="text-primary-foreground">{adv.icon}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {adv.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Timeline ── */}
      <section
        aria-labelledby="rebuild-process-heading"
        className="py-20 md:py-28 bg-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2
              id="rebuild-process-heading"
              className="font-display text-3xl font-bold text-foreground sm:text-4xl"
            >
              Our Rebuild <span className="gradient-text">Process</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A clear, structured workflow from first audit to flawless launch.
            </p>
          </motion.div>

          <div
            className="relative max-w-3xl mx-auto"
            data-ocid="service_rebuild.process.list"
          >
            {/* connector line */}
            <div
              className="absolute left-7 top-10 bottom-10 w-px bg-border/60"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-8">
              {PROCESS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                  className="relative flex gap-6 items-start"
                  data-ocid={`service_rebuild.process.item.${i + 1}`}
                >
                  <div className="relative z-10 shrink-0 flex h-14 w-14 items-center justify-center rounded-full gradient-primary shadow-elevated">
                    <span className="text-primary-foreground">{step.icon}</span>
                  </div>
                  <div className="pt-3">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge
                        variant="outline"
                        className="border-primary/40 text-primary text-xs font-body"
                      >
                        Step {step.step}
                      </Badge>
                      <h3 className="font-display font-semibold text-foreground text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        aria-labelledby="rebuild-cta-heading"
        className="py-20 md:py-28 bg-muted/30 border-t border-border/40"
        data-ocid="service_rebuild.cta.section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative overflow-hidden rounded-2xl gradient-primary p-px shadow-elevated"
          >
            <div className="rounded-2xl bg-card/90 backdrop-blur-sm px-8 py-16 text-center relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-25"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.7 0.22 155 / 0.4), transparent 70%)",
                }}
              />
              <Globe
                className="relative mx-auto mb-5 h-10 w-10 text-primary"
                aria-hidden="true"
              />
              <h2
                id="rebuild-cta-heading"
                className="relative font-display text-3xl font-bold text-foreground sm:text-4xl"
              >
                Ready to <span className="gradient-text">Rebuild?</span>
              </h2>
              <p className="relative mt-4 max-w-xl mx-auto text-muted-foreground text-lg">
                Let&apos;s turn your outdated site into a modern conversion
                machine. Get a free audit and rebuild quote today.
              </p>
              <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gradient-primary text-primary-foreground font-display font-semibold px-8 shadow-elevated hover:shadow-glow hover:scale-[1.03] transition-smooth btn-shine"
                  data-ocid="service_rebuild.cta.primary_button"
                >
                  <Link to="/contact">
                    Get Free Audit{" "}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border/60 text-foreground hover:border-primary/50 hover:text-primary font-display font-semibold px-8 transition-smooth"
                  data-ocid="service_rebuild.cta.secondary_button"
                >
                  <a href={waHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle
                      className="mr-2 h-4 w-4"
                      aria-hidden="true"
                    />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Back to Services ── */}
      <div className="bg-background py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            data-ocid="service_rebuild.back_link"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all services
          </Link>
        </div>
      </div>
    </div>
  );
}
