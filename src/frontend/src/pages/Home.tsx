import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  Compass,
  HeartHandshake,
  Layers,
  PenTool,
  Rocket,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  PORTFOLIO_ITEMS,
  PROCESS_STEPS,
  SERVICES,
  WHY_CHOOSE_US,
} from "../data/sampleData";
import type {
  PortfolioItem,
  ProcessStep,
  Service,
  WhyChooseUsItem,
} from "../types";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Code2,
  Layers,
  ShoppingBag,
  Zap,
  Target,
  Sparkles,
  HeartHandshake,
  Compass,
  PenTool,
  Rocket,
};

const CATEGORY_BADGE: Record<string, string> = {
  "E-commerce": "bg-primary/20 text-primary border-primary/30",
  "UI/UX": "bg-accent/20 text-accent border-accent/30",
  Ads: "bg-muted text-foreground border-border",
  Website: "bg-secondary text-secondary-foreground border-border",
};

const HERO_SERVICES = [
  {
    icon: TrendingUp,
    label: "Digital Marketing",
    desc: "Meta Ads · Growth",
    color: "from-primary/20 to-primary/5 border-primary/30",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    href: "/services/digital-marketing" as const,
  },
  {
    icon: Code2,
    label: "Website Development",
    desc: "React · Full-Stack",
    color: "from-accent/20 to-accent/5 border-accent/30",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
    href: "/services/website-design" as const,
  },
  {
    icon: PenTool,
    label: "UI/UX Design",
    desc: "Web · Mobile Apps",
    color: "from-primary/15 to-accent/10 border-primary/25",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    href: "/services/ui-ux-design" as const,
  },
  {
    icon: ShoppingBag,
    label: "E-commerce Solutions",
    desc: "Shopify · WordPress",
    color: "from-accent/15 to-primary/10 border-accent/25",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    href: "/services/ecommerce-development" as const,
  },
] as const;

const SERVICE_DETAIL_ROUTES: Record<string, string> = {
  "digital-marketing": "/services/digital-marketing",
  "web-development": "/services/website-design",
  "uiux-design": "/services/ui-ux-design",
  ecommerce: "/services/ecommerce-development",
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICON_MAP[service.icon] ?? TrendingUp;
  const detailHref = SERVICE_DETAIL_ROUTES[service.id] ?? "/services";
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      data-ocid={`services.item.${index + 1}`}
      className="group border-glow"
    >
      <Card className="h-full bg-card border-border shadow-card hover:shadow-glow transition-smooth hover:border-primary/40">
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-elevated">
            <Icon className="w-6 h-6 text-primary-foreground icon-spin" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-smooth">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
          <Link
            to={detailHref}
            className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-smooth group/link"
            data-ocid={`services.link.${index + 1}`}
          >
            Learn more{" "}
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-smooth" />
          </Link>
        </CardContent>
      </Card>
    </motion.article>
  );
}

function WhyCard({ item, index }: { item: WhyChooseUsItem; index: number }) {
  const Icon = ICON_MAP[item.icon] ?? Sparkles;
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 },
      }}
      className="flex gap-4 items-start group cursor-default"
      data-ocid={`why.item.${index + 1}`}
    >
      <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center transition-smooth group-hover:bg-primary group-hover:border-primary group-hover:shadow-glow-sm">
        <Icon className="w-5 h-5 text-primary group-hover:text-white icon-spin" />
      </div>
      <div>
        <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-smooth">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function PortfolioCard({
  item,
  index,
}: { item: PortfolioItem; index: number }) {
  const badgeClass =
    CATEGORY_BADGE[item.category] ??
    "bg-secondary text-secondary-foreground border-border";
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
      data-ocid={`portfolio.item.${index + 1}`}
      className="group"
    >
      <Card className="overflow-hidden bg-card border-border shadow-card hover:shadow-glow hover:border-primary/30 transition-smooth">
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            loading="lazy"
          />
          {/* Slide-up overlay */}
          <div className="portfolio-overlay">
            <p className="text-white font-display font-semibold text-sm leading-tight">
              {item.title}
            </p>
            <p className="text-white/80 text-xs mt-0.5 line-clamp-2">
              {item.description}
            </p>
          </div>
          <Badge
            className={`absolute top-3 left-3 text-xs font-medium border backdrop-blur-sm ${badgeClass}`}
          >
            {item.category}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-display font-semibold text-foreground text-base mb-1 group-hover:text-primary transition-smooth">
            {item.title}
          </h3>
          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </CardContent>
      </Card>
    </motion.article>
  );
}

function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  const Icon = ICON_MAP[step.icon] ?? Compass;
  const isLast = index === 3;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      className="relative flex flex-col items-center text-center group"
      data-ocid={`process.item.${index + 1}`}
    >
      {!isLast && (
        <motion.div
          className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
          style={{
            background:
              "linear-gradient(90deg, oklch(var(--primary) / 0.5) 0%, transparent 100%)",
            transformOrigin: "left",
          }}
          aria-hidden="true"
        />
      )}
      <motion.div
        whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative z-10 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-elevated mb-4 group-hover:shadow-glow transition-smooth"
      >
        <Icon className="w-7 h-7 text-primary-foreground" />
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-primary text-primary text-xs font-bold font-display flex items-center justify-center group-hover:animate-pulse-glow">
          {step.step}
        </span>
      </motion.div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-2">
        {step.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden gradient-hero"
        aria-label="Hero"
      >
        {/* Floating orbs */}
        {!prefersReducedMotion && (
          <>
            <div
              className="floating-orb w-[500px] h-[500px] opacity-25"
              style={{
                top: "5%",
                right: "10%",
                background: "oklch(var(--primary) / 0.6)",
              }}
              aria-hidden="true"
            />
            <div
              className="floating-orb floating-orb-2 w-72 h-72 opacity-15"
              style={{
                bottom: "15%",
                right: "25%",
                background: "oklch(var(--accent) / 0.7)",
              }}
              aria-hidden="true"
            />
            <div
              className="floating-orb floating-orb-3 w-48 h-48 opacity-15"
              style={{
                top: "40%",
                left: "5%",
                background: "oklch(var(--primary) / 0.4)",
              }}
              aria-hidden="true"
            />
          </>
        )}

        <div
          className="absolute inset-0 bg-center bg-cover opacity-20 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bg.dim_1400x800.jpg')",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                className="mb-6 border border-primary/40 bg-primary/10 text-primary font-medium px-3 py-1"
                data-ocid="hero.badge"
              >
                🚀 Digital Growth Agency
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6"
              data-ocid="hero.heading"
            >
              Elevate Your{" "}
              <span className="text-shimmer">Digital Presence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
              data-ocid="hero.subheading"
            >
              We craft cutting-edge digital solutions — from Meta Ads and UI/UX
              design to full-stack web and e-commerce development — that drive
              growth for ambitious businesses.
            </motion.p>

            {/* ── HERO SERVICE CARDS ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
              data-ocid="hero.services"
            >
              {HERO_SERVICES.map((svc, i) => (
                <Link
                  key={svc.label}
                  to={svc.href}
                  data-ocid={`hero.service.${i + 1}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                    whileHover={{
                      y: -6,
                      rotateX: 4,
                      rotateY: 4,
                      scale: 1.04,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      },
                    }}
                    style={{
                      perspective: "600px",
                      transformStyle: "preserve-3d",
                    }}
                    className={`group relative rounded-xl border bg-gradient-to-br ${svc.color} p-3.5 cursor-pointer border-glow`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg ${svc.iconBg} border border-current/10 flex items-center justify-center mb-2.5`}
                    >
                      <svc.icon
                        className={`w-4 h-4 ${svc.iconColor} icon-spin`}
                      />
                    </div>
                    <p className="font-display font-semibold text-foreground text-sm leading-tight mb-0.5 group-hover:text-primary transition-smooth">
                      {svc.label}
                    </p>
                    <p className="text-muted-foreground text-xs">{svc.desc}</p>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground font-semibold font-display px-8 py-3 rounded-xl shadow-elevated hover:shadow-glow hover:scale-[1.04] transition-smooth border-0 btn-shine"
                  data-ocid="hero.primary_button"
                >
                  Book a Free Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold font-display px-8 py-3 rounded-xl border-border hover:border-primary/50 hover:bg-primary/10 hover:shadow-glow-sm hover:scale-[1.02] transition-smooth"
                  data-ocid="hero.secondary_button"
                >
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "30+", label: "Happy Clients" },
                { value: "3×", label: "Average ROI" },
              ].map((stat, si) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + si * 0.1 }}
                  whileHover={{ scale: 1.08, transition: { type: "spring" } }}
                  className="flex flex-col cursor-default"
                >
                  <span className="font-display text-3xl font-bold gradient-text">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section
        id="services"
        className="py-20 lg:py-28 bg-muted/30"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 border border-accent/40 bg-accent/10 text-accent font-medium px-3 py-1">
              What We Do
            </Badge>
            <h2
              id="services-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4"
            >
              Our <span className="text-shimmer">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Full-spectrum digital services designed to grow your brand,
              attract customers, and drive measurable results.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="services.list"
          >
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-center mt-10"
          >
            <Link to="/services">
              <Button
                variant="outline"
                className="font-display font-semibold border-primary/40 hover:bg-primary/10 hover:border-primary hover:shadow-glow-sm hover:scale-[1.02] transition-smooth btn-shine"
                data-ocid="services.view_all_button"
              >
                Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section
        id="why-us"
        className="py-20 lg:py-28 bg-background"
        aria-labelledby="why-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 border border-primary/40 bg-primary/10 text-primary font-medium px-3 py-1">
                Why Us
              </Badge>
              <h2
                id="why-heading"
                className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-5"
              >
                Built for Results,{" "}
                <span className="gradient-text">Not Just Looks</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We don&apos;t just deliver beautiful work — we deliver
                measurable outcomes. Every strategy, design, and line of code is
                crafted with one goal: growing your business.
              </p>
              <Link to="/contact">
                <Button
                  className="gradient-primary text-primary-foreground font-display font-semibold border-0 hover:shadow-glow hover:scale-[1.03] transition-smooth btn-shine"
                  data-ocid="why.cta_button"
                >
                  Start a Project <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              data-ocid="why.list"
            >
              {WHY_CHOOSE_US.map((item, i) => (
                <WhyCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section
        id="portfolio"
        className="py-20 lg:py-28 bg-muted/30"
        aria-labelledby="portfolio-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-14"
          >
            <Badge className="mb-4 border border-accent/40 bg-accent/10 text-accent font-medium px-3 py-1">
              Our Work
            </Badge>
            <h2
              id="portfolio-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A curated selection of projects we&apos;ve shipped — from growth
              campaigns to pixel-perfect digital products.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="portfolio.list"
          >
            {PORTFOLIO_ITEMS.map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link to="/portfolio">
              <Button
                variant="outline"
                className="font-display font-semibold border-primary/40 hover:bg-primary/10 hover:border-primary hover:shadow-glow-sm hover:scale-[1.02] transition-smooth btn-shine"
                data-ocid="portfolio.view_all_button"
              >
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        id="process"
        className="py-20 lg:py-28 bg-background"
        aria-labelledby="process-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 border border-primary/40 bg-primary/10 text-primary font-medium px-3 py-1">
              How We Work
            </Badge>
            <h2
              id="process-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4"
            >
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven four-step framework that takes your project from idea to
              live in weeks, not months.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative"
            data-ocid="process.list"
          >
            {PROCESS_STEPS.map((step, i) => (
              <ProcessCard key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        id="cta"
        className="py-20 lg:py-28 bg-background"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative rounded-3xl overflow-hidden p-[1px] shadow-elevated"
            style={{
              background:
                "linear-gradient(135deg, oklch(var(--primary)) 0%, oklch(var(--accent)) 100%)",
            }}
          >
            <div className="bg-card rounded-[calc(1.5rem-1px)] px-8 py-16 sm:py-20 text-center relative overflow-hidden">
              {/* Animated orbs inside CTA */}
              {!prefersReducedMotion && (
                <>
                  <div
                    className="floating-orb w-64 h-64 opacity-15"
                    style={{
                      top: "-20%",
                      left: "10%",
                      background: "oklch(var(--primary) / 0.8)",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="floating-orb floating-orb-2 w-48 h-48 opacity-10"
                    style={{
                      bottom: "-10%",
                      right: "15%",
                      background: "oklch(var(--accent) / 0.8)",
                    }}
                    aria-hidden="true"
                  />
                </>
              )}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(var(--primary)) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <h2
                id="cta-heading"
                className="relative font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5"
              >
                Ready to{" "}
                <span className="text-shimmer">Grow Your Business?</span>
              </h2>
              <p className="relative text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Let&apos;s build something extraordinary together. Book a free
                strategy call and discover how we can transform your digital
                presence.
              </p>
              <div className="relative flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="gradient-primary text-primary-foreground font-display font-semibold px-10 py-3 rounded-xl border-0 shadow-elevated hover:shadow-glow hover:scale-[1.04] transition-smooth btn-shine"
                    data-ocid="cta.primary_button"
                  >
                    Book a Free Call <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-display font-semibold px-10 py-3 rounded-xl border-border hover:border-primary/50 hover:bg-primary/10 hover:shadow-glow-sm hover:scale-[1.02] transition-smooth"
                    data-ocid="cta.secondary_button"
                  >
                    See Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
