import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
  Eye,
  Megaphone,
  MessageCircle,
  RefreshCw,
  Search,
  Settings,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "../data/sampleData";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WHAT_WE_PROVIDE = [
  {
    icon: <Megaphone className="w-5 h-5" />,
    label: "Facebook & Instagram Advertising (Meta Ads)",
    detail:
      "Precision-targeted paid campaigns reaching millions of users across Meta's platforms",
  },
  {
    icon: <Target className="w-5 h-5" />,
    label: "Campaign Strategy & Setup",
    detail:
      "Full-funnel strategy from awareness to conversion with complete campaign architecture",
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: "Audience Targeting & Retargeting",
    detail:
      "Custom audiences, lookalikes, and retargeting to reach high-intent prospects",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    label: "A/B Testing",
    detail:
      "Continuous split-testing of creatives, copy, and audiences to maximise results",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    label: "Ad Creative Direction",
    detail:
      "Compelling visuals and copy designed to stop the scroll and drive clicks",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    label: "Analytics & ROI Tracking",
    detail:
      "Pixel setup, conversion tracking, and real-time reporting dashboards",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    label: "Monthly Performance Reports",
    detail:
      "Detailed monthly reports with insights, wins, and next-month priorities",
  },
];

const ADVANTAGES = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Targeted Reach",
    desc: "Reach the exact audience by age, interest, location, and behaviour — no wasted spend.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "High ROI",
    desc: "Pay only for results. Every rupee is tracked against real business outcomes.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Results",
    desc: "Drive traffic, leads, and sales within hours of campaign launch.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Detailed Analytics",
    desc: "Real-time dashboards showing clicks, leads, ROAS, and conversion data.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Brand Awareness",
    desc: "Build lasting recognition with consistent exposure to your ideal customer.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Retargeting",
    desc: "Re-engage website visitors and warm leads with personalised follow-up ads.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Scalable Budgets",
    desc: "Start with any budget. Scale spend only on what's proven to work.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Management",
    desc: "Hands-off for you — we handle every aspect of your campaigns end-to-end.",
  },
];

const PROCESS = [
  {
    step: 1,
    icon: <Search className="w-6 h-6" />,
    title: "Discovery & Goals",
    desc: "We learn your business, target customer, competitors, and key KPIs to set clear objectives.",
  },
  {
    step: 2,
    icon: <Users className="w-6 h-6" />,
    title: "Audience Research",
    desc: "Deep demographic and interest research to build precise custom and lookalike audiences.",
  },
  {
    step: 3,
    icon: <Settings className="w-6 h-6" />,
    title: "Campaign Setup",
    desc: "Full account setup — pixel, creatives, ad copy, targeting, and campaign structure.",
  },
  {
    step: 4,
    icon: <Zap className="w-6 h-6" />,
    title: "Launch & Monitor",
    desc: "Campaign goes live with daily monitoring for performance and budget efficiency.",
  },
  {
    step: 5,
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Optimize & Report",
    desc: "Weekly optimisations and monthly reports keeping you informed and results growing.",
  },
];

export default function ServiceDigitalMarketing() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent("Hi! I'm interested in your Digital Marketing services. Can we discuss?")}`;
  const waGeneralHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div>
      {/* ── HERO ── */}
      <section
        data-ocid="dm.hero.section"
        className="relative overflow-hidden bg-card border-b border-border"
        aria-labelledby="dm-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl gradient-primary" />
          <div
            className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
            style={{ background: "oklch(var(--accent) / 0.6)" }}
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          {/* Breadcrumb */}
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
              data-ocid="dm.breadcrumb.services_link"
            >
              <ArrowLeft className="w-4 h-4" /> Services
            </Link>
            <ChevronRight className="w-4 h-4 opacity-50" />
            <span className="text-foreground font-medium">
              Digital Marketing
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
                  className="mb-4 border-primary/40 text-primary font-body text-xs tracking-widest uppercase px-4 py-1"
                >
                  Growth
                </Badge>
              </motion.div>
              <motion.h1
                id="dm-hero-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                Digital <span className="text-shimmer">Marketing</span>
              </motion.h1>
              <motion.p
                className="font-display text-xl sm:text-2xl font-semibold text-primary mb-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Grow faster with data-driven Meta Ads
              </motion.p>
              <motion.p
                className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                We craft precision Meta Ad campaigns on Facebook & Instagram
                that put your brand in front of the right audience — driving
                qualified leads, real sales, and measurable growth.
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
                    data-ocid="dm.hero.whatsapp_button"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us
                  </Button>
                </a>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold px-8 h-12 border-border hover:bg-muted transition-smooth"
                    data-ocid="dm.hero.contact_button"
                  >
                    Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Hero icon panel */}
            <motion.div
              className="flex-shrink-0 w-full lg:w-64 xl:w-72"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 p-1 shadow-elevated">
                <div className="rounded-xl bg-card p-8 flex flex-col items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-elevated">
                    <Megaphone className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="text-center">
                    <p className="font-display font-bold text-2xl text-foreground">
                      Meta Ads
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Facebook · Instagram
                    </p>
                  </div>
                  {[
                    { label: "Avg. CPL Reduction", value: "40%" },
                    { label: "Avg. ROAS", value: "4.2×" },
                    { label: "Campaigns Managed", value: "50+" },
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
        data-ocid="dm.provide.section"
        className="bg-background py-20 md:py-28"
        aria-labelledby="dm-provide-heading"
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
              id="dm-provide-heading"
              className="font-display text-3xl sm:text-4xl font-bold mb-5"
            >
              Everything You Need to{" "}
              <span className="gradient-text">Grow with Ads</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We manage every layer of your Meta advertising — from strategy and
              creative to targeting, optimisation, and reporting. You focus on
              your business; we bring the customers.
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
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-glow hover:-translate-y-1 transition-smooth hover:bg-primary/5 border-glow group"
                data-ocid={`dm.provide.item.${i + 1}`}
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white icon-bounce transition-smooth" />
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
            {/* last item full-width on md */}
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
                All campaigns include dedicated account manager, weekly
                check-ins, and transparent billing — no hidden fees.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section
        data-ocid="dm.advantages.section"
        className="bg-muted/30 py-20 md:py-28"
        aria-labelledby="dm-advantages-heading"
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
              id="dm-advantages-heading"
              className="font-display text-3xl sm:text-4xl font-bold mb-4"
            >
              The <span className="gradient-text">Advantages</span> of Working
              with Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Eight reasons why businesses choose Agency Studio for their Meta
              Ads campaigns.
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
                data-ocid={`dm.advantage.item.${i + 1}`}
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
        data-ocid="dm.process.section"
        className="bg-background py-20 md:py-28"
        aria-labelledby="dm-process-heading"
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
              id="dm-process-heading"
              className="font-display text-3xl sm:text-4xl font-bold mb-4"
            >
              Our <span className="gradient-text">5-Step Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A proven workflow that takes your brand from zero to scaling
              campaigns in weeks.
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
                  data-ocid={`dm.process.item.${i + 1}`}
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
        data-ocid="dm.cta.section"
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
              Let's build a Meta Ads strategy tailored to your business goals.
              Free consultation, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waGeneralHref} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground border-0 font-semibold text-base px-8 h-12 transition-smooth hover:shadow-glow hover:scale-[1.03] btn-shine shadow-elevated"
                  data-ocid="dm.cta.whatsapp_button"
                >
                  <MessageCircle className="mr-2 w-5 h-5" /> Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-base px-8 h-12 border-border hover:bg-muted hover:border-primary/40 hover:shadow-glow-sm hover:scale-[1.02] transition-smooth"
                  data-ocid="dm.cta.contact_button"
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
