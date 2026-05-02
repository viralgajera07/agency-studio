import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Briefcase,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Smile,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { COMPANY_NAME } from "../data/sampleData";

// ── Data ──────────────────────────────────────────────────────────────────────

const SKILLS = [
  "Meta Ads",
  "Facebook Ads",
  "Instagram Marketing",
  "Lead Generation",
  "Campaign Strategy",
  "Web Design",
  "React",
  "WordPress",
  "Shopify",
  "ShopDeck",
  "SmartBiz",
  "WooCommerce",
  "UI Design",
  "UX Research",
  "Mobile App Design",
  "Figma",
  "Design Systems",
  "Prototyping",
  "SEO Optimization",
  "Landing Pages",
  "Conversion Optimization",
  "Analytics & Reporting",
  "Brand Identity",
  "E-commerce",
];

const STATS = [
  { icon: Briefcase, value: "5+", label: "Years in Business" },
  { icon: Users, value: "120+", label: "Clients Served" },
  { icon: Star, value: "200+", label: "Projects Completed" },
  { icon: Smile, value: "98%", label: "Satisfaction Rate" },
];

const ACHIEVEMENTS = [
  {
    icon: Award,
    title: "Top-Rated Agency",
    description:
      "Recognised among the top digital agencies for ROI-driven Meta Ads campaigns, consistently delivering cost-per-lead results that outperform industry benchmarks.",
  },
  {
    icon: Zap,
    title: "Record Campaign Performance",
    description:
      "Scaled a D2C brand from zero to ₹50L monthly revenue in 90 days through precision-targeted Facebook & Instagram ads combined with a high-converting landing page.",
  },
  {
    icon: Rocket,
    title: "Multi-Platform E-commerce Expertise",
    description:
      "Successfully launched 40+ e-commerce stores across Shopify, ShopDeck, SmartBiz, and WordPress — each optimised for mobile-first shopping experiences.",
  },
  {
    icon: Lightbulb,
    title: "Design Excellence",
    description:
      "UI/UX work featured by design communities for award-level visual quality and usability — helping SaaS and fintech brands increase user retention by an average of 35%.",
  },
];

const VALUES = [
  {
    label: "Transparency",
    description: "Clear communication, honest reporting",
  },
  { label: "Speed", description: "Fast delivery without cutting corners" },
  { label: "Results", description: "Measurable business outcomes, always" },
  { label: "Partnership", description: "We grow when you grow" },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div data-ocid="about.page">
      {/* ── Page Hero ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-hero-heading"
        className="relative overflow-hidden gradient-hero py-24 md:py-32"
      >
        {/* decorative blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.7 0.22 280), transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-24 h-72 w-72 rounded-full opacity-15 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.24 210), transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <Badge
              variant="outline"
              className="mb-4 border-primary/40 text-primary font-body text-sm"
            >
              Our Story
            </Badge>
            <h1
              id="about-hero-heading"
              className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              We Build <span className="gradient-text">Digital Futures</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {COMPANY_NAME} is a results-driven digital agency specialising in
              high-performance marketing, stunning web experiences, and scalable
              e-commerce solutions. We partner with ambitious brands to turn
              their vision into measurable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Overview ───────────────────────────────────────────── */}
      <section
        aria-labelledby="mission-heading"
        className="bg-background py-20 md:py-28"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left: mission statement */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                id="mission-heading"
                className="font-display text-3xl font-bold text-foreground sm:text-4xl"
              >
                Our Mission
              </h2>
              <p className="mt-4 text-2xl font-display font-semibold gradient-text leading-snug">
                "To empower every business with the digital tools it needs to
                compete, convert, and grow."
              </p>
              <Separator className="my-8 bg-border/50" />
              <p className="text-muted-foreground leading-relaxed">
                Founded with a passion for design and a data-first mindset,{" "}
                {COMPANY_NAME} has spent over five years building digital
                experiences that make an impact. From crafting precision Meta
                Ads campaigns to shipping pixel-perfect mobile interfaces, we
                handle every step of your digital journey.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We believe great digital work is never cosmetic — it's
                strategic. Every design, every ad campaign, and every line of
                code we deliver is engineered to move your business forward.
              </p>

              {/* Values chips */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {VALUES.map((v) => (
                  <div
                    key={v.label}
                    className="flex items-start gap-3 rounded-xl bg-card border border-border/50 p-4 shadow-card"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-primary"
                      size={18}
                    />
                    <div>
                      <p className="font-display font-semibold text-foreground text-sm">
                        {v.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {v.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-5"
            >
              {STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      rotateX: 3,
                      rotateY: i % 2 === 0 ? 3 : -3,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    style={{
                      perspective: "600px",
                      transformStyle: "preserve-3d",
                    }}
                    data-ocid={`about.stat.${i + 1}`}
                  >
                    <Card className="glass-card shadow-elevated h-full hover:shadow-glow transition-smooth">
                      <CardContent className="flex flex-col items-center justify-center py-8 text-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary transition-smooth">
                          <Icon
                            className="text-primary-foreground icon-spin"
                            size={22}
                          />
                        </div>
                        <span className="font-display text-4xl font-bold gradient-text leading-none">
                          {stat.value}
                        </span>
                        <span className="text-sm text-muted-foreground font-body">
                          {stat.label}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Skills & Expertise ───────────────────────────────────────────── */}
      <section
        aria-labelledby="skills-heading"
        className="bg-muted/30 border-y border-border/40 py-20 md:py-28"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2
              id="skills-heading"
              className="font-display text-3xl font-bold text-foreground sm:text-4xl"
            >
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A full-stack arsenal of digital skills — from paid media to
              platform engineering — to cover every dimension of your growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3"
            data-ocid="about.skills.list"
          >
            {SKILLS.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                whileHover={{
                  scale: 1.08,
                  transition: { type: "spring", stiffness: 400 },
                }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-body font-medium bg-card border border-border/60 text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 hover:shadow-glow-sm transition-smooth cursor-default btn-shine"
                >
                  {skill}
                </Badge>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Achievements ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="achievements-heading"
        className="bg-background py-20 md:py-28"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2
              id="achievements-heading"
              className="font-display text-3xl font-bold text-foreground sm:text-4xl"
            >
              Experience & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Years of hands-on work across industries — here's what we've built
              and accomplished.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {ACHIEVEMENTS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-ocid={`about.achievement.${i + 1}`}
                >
                  <Card className="glass-card shadow-card h-full hover:border-primary/30 hover:shadow-glow transition-smooth group">
                    <CardContent className="p-6 flex gap-5">
                      <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl gradient-primary shadow-card group-hover:shadow-glow transition-smooth">
                        <Icon
                          className="text-primary-foreground icon-spin"
                          size={20}
                        />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground text-lg leading-snug group-hover:text-primary transition-smooth">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-cta-heading"
        className="bg-background py-24 md:py-32"
        data-ocid="about.cta.section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl gradient-primary p-px shadow-elevated"
          >
            <div className="rounded-2xl bg-card/90 backdrop-blur-sm px-8 py-16 text-center relative">
              {/* glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.7 0.22 280 / 0.4), transparent 70%)",
                }}
              />
              <h2
                id="about-cta-heading"
                className="relative font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl"
              >
                Let's Work <span className="gradient-text">Together</span>
              </h2>
              <p className="relative mt-4 max-w-xl mx-auto text-muted-foreground text-lg">
                Ready to elevate your digital presence? Let's craft something
                remarkable — from strategy to launch.
              </p>
              <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gradient-primary text-primary-foreground font-display font-semibold px-8 shadow-elevated hover:shadow-glow hover:scale-[1.03] transition-smooth btn-shine"
                  data-ocid="about.cta.primary_button"
                >
                  <Link to="/contact">Start a Project</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border/60 text-foreground hover:border-primary/50 hover:text-primary font-display font-semibold px-8 transition-smooth"
                  data-ocid="about.cta.secondary_button"
                >
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
