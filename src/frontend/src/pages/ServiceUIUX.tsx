import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Eye,
  Globe,
  Layers,
  MessageCircle,
  Monitor,
  Palette,
  Pencil,
  Repeat2,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "../data/sampleData";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WHAT_WE_PROVIDE = [
  {
    icon: <Users className="w-5 h-5" />,
    label: "User Research & Persona Creation",
    detail:
      "In-depth interviews, surveys, and analysis to understand exactly who you're designing for",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    label: "Information Architecture",
    detail:
      "Logical content structure and navigation flows that make sense to real users",
  },
  {
    icon: <Pencil className="w-5 h-5" />,
    label: "Wireframing & User Flows",
    detail:
      "Lo-fi and hi-fi wireframes mapping every user journey before visual design begins",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    label: "High-Fidelity UI Design (Web & Mobile)",
    detail:
      "Pixel-perfect, brand-aligned visuals for websites and iOS/Android applications",
  },
  {
    icon: <Monitor className="w-5 h-5" />,
    label: "Interactive Prototypes",
    detail:
      "Clickable Figma prototypes that feel real — for stakeholder sign-off and user testing",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    label: "User Testing & Feedback",
    detail:
      "Moderated test sessions with real users to validate designs before development",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    label: "Design System & Component Library Handoff",
    detail:
      "Organised Figma files with tokens, components, and developer specs for seamless handoff",
  },
];

const ADVANTAGES = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "User-Centered",
    desc: "Designs built around how users actually think, not how we assume they do.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Higher Conversions",
    desc: "Intuitive flows and clear CTAs reduce drop-off and guide users to act.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Consistent Branding",
    desc: "Design system approach ensures every screen feels cohesive and on-brand.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Accessibility",
    desc: "Inclusive design principles ensuring every user can access your product.",
  },
  {
    icon: <Repeat2 className="w-6 h-6" />,
    title: "Faster Development",
    desc: "Clean, annotated design specs mean developers can build without constant back-and-forth.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Better Retention",
    desc: "Delightful experiences that users remember and return to.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Modern Aesthetic",
    desc: "Trendy yet timeless visual style that positions your brand as premium and trustworthy.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Cross-Platform",
    desc: "Designs optimised for web, iOS, and Android from a single, coherent vision.",
  },
];

const PROCESS = [
  {
    step: 1,
    icon: <BookOpen className="w-6 h-6" />,
    title: "Research & Discovery",
    desc: "User interviews, competitor audits, and heuristic reviews to uncover real pain points.",
  },
  {
    step: 2,
    icon: <Pencil className="w-6 h-6" />,
    title: "Wireframes & IA",
    desc: "Structural blueprints and user flow mapping before any visual design.",
  },
  {
    step: 3,
    icon: <Palette className="w-6 h-6" />,
    title: "UI Design",
    desc: "High-fidelity visuals with your brand, typography, colour, and component library.",
  },
  {
    step: 4,
    icon: <Monitor className="w-6 h-6" />,
    title: "Prototype & Test",
    desc: "Clickable prototype delivered to real users — feedback loops that refine the design.",
  },
  {
    step: 5,
    icon: <Globe className="w-6 h-6" />,
    title: "Handoff",
    desc: "Developer-ready Figma files with specs, tokens, and a complete component library.",
  },
];

export default function ServiceUIUX() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent("Hi! I'm interested in UI/UX Design services. Can we discuss?")}`;
  const waGeneralHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div>
      {/* ── HERO ── */}
      <section
        data-ocid="uiux.hero.section"
        className="relative overflow-hidden bg-card border-b border-border"
        aria-labelledby="uiux-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/3 w-[500px] h-[400px] rounded-full opacity-15 blur-3xl gradient-primary" />
          <div
            className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full opacity-10 blur-3xl"
            style={{ background: "oklch(var(--primary) / 0.6)" }}
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
              data-ocid="uiux.breadcrumb.services_link"
            >
              <ArrowLeft className="w-4 h-4" /> Services
            </Link>
            <ChevronRight className="w-4 h-4 opacity-50" />
            <span className="text-foreground font-medium">UI/UX Design</span>
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
                  className="mb-4 border-primary/40 text-primary font-body text-xs tracking-widest uppercase px-4 py-1"
                >
                  Design
                </Badge>
              </motion.div>
              <motion.h1
                id="uiux-hero-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                UI/UX <span className="gradient-text">Design</span>
              </motion.h1>
              <motion.p
                className="font-display text-xl sm:text-2xl font-semibold text-primary mb-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Designs users love, interfaces that convert
              </motion.p>
              <motion.p
                className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                Great design is invisible — it simply feels right. Our UX-first
                approach starts with deep user research and ends with interfaces
                that are visually stunning and effortlessly intuitive, for web
                and mobile alike.
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
                    data-ocid="uiux.hero.whatsapp_button"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us
                  </Button>
                </a>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold px-8 h-12 border-border hover:bg-muted transition-smooth"
                    data-ocid="uiux.hero.contact_button"
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
              <div className="rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 p-1 shadow-elevated">
                <div className="rounded-xl bg-card p-8 flex flex-col items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-elevated">
                    <Palette className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="text-center">
                    <p className="font-display font-bold text-2xl text-foreground">
                      UI/UX
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Web · iOS · Android
                    </p>
                  </div>
                  {[
                    { label: "Design Tools", value: "Figma" },
                    { label: "Avg. Conversion Lift", value: "+35%" },
                    { label: "Apps Designed", value: "30+" },
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
        data-ocid="uiux.provide.section"
        className="bg-background py-20 md:py-28"
        aria-labelledby="uiux-provide-heading"
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
              className="mb-4 border-primary/40 text-primary text-xs tracking-widest uppercase px-4 py-1"
            >
              What We Provide
            </Badge>
            <h2
              id="uiux-provide-heading"
              className="font-display text-3xl sm:text-4xl font-bold mb-5"
            >
              End-to-End <span className="gradient-text">Design Services</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We cover the full design lifecycle — from first-principles user
              research to pixel-perfect UI and developer handoff — so your
              product is both beautiful and usable.
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
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-glow hover:-translate-y-1 hover:bg-primary/5 border-glow transition-smooth group"
                data-ocid={`uiux.provide.item.${i + 1}`}
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white icon-bounce transition-smooth">
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
                All designs delivered with organised Figma files, style guide
                documentation, and unlimited revision rounds until you're 100%
                satisfied.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section
        data-ocid="uiux.advantages.section"
        className="bg-muted/30 py-20 md:py-28"
        aria-labelledby="uiux-advantages-heading"
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
              className="mb-4 border-accent/40 text-accent text-xs tracking-widest uppercase px-4 py-1"
            >
              Why Choose Us
            </Badge>
            <h2
              id="uiux-advantages-heading"
              className="font-display text-3xl sm:text-4xl font-bold mb-4"
            >
              The <span className="gradient-text">Advantages</span> of Working
              with Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Eight reasons why product teams choose Agency Studio for UI/UX
              design.
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
                data-ocid={`uiux.advantage.item.${i + 1}`}
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
        data-ocid="uiux.process.section"
        className="bg-background py-20 md:py-28"
        aria-labelledby="uiux-process-heading"
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
              className="mb-4 border-primary/40 text-primary text-xs tracking-widest uppercase px-4 py-1"
            >
              How It Works
            </Badge>
            <h2
              id="uiux-process-heading"
              className="font-display text-3xl sm:text-4xl font-bold mb-4"
            >
              Our <span className="gradient-text">5-Step Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A research-driven process that produces designs grounded in user
              behaviour, not guesswork.
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
                  data-ocid={`uiux.process.item.${i + 1}`}
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
        data-ocid="uiux.cta.section"
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
              Let's design an experience your users will love and your
              competitors will envy. Free consultation, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waGeneralHref} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground border-0 font-semibold text-base px-8 h-12 transition-smooth hover:shadow-glow hover:scale-[1.03] btn-shine shadow-elevated"
                  data-ocid="uiux.cta.whatsapp_button"
                >
                  <MessageCircle className="mr-2 w-5 h-5" /> Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-base px-8 h-12 border-border hover:bg-muted hover:border-primary/40 hover:shadow-glow-sm hover:scale-[1.02] transition-smooth"
                  data-ocid="uiux.cta.contact_button"
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
