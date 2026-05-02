import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Globe,
  HeartHandshake,
  Layout,
  Lock,
  MessageCircle,
  Package,
  Rocket,
  Search,
  Settings,
  ShoppingCart,
  Smartphone,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "../data/sampleData";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WHAT_WE_PROVIDE = [
  {
    icon: <ShoppingCart className="w-5 h-5" />,
    label: "Shopify Store Setup & Customization",
    detail:
      "Custom themes, apps, and full store configuration optimised for conversions",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    label: "ShopDeck Store Development",
    detail: "ShopDeck stores built and optimised for the Indian D2C market",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    label: "SmartBiz Integration",
    detail:
      "SmartBiz setup for quick-launch e-commerce operations with full catalogue support",
  },
  {
    icon: <Layout className="w-5 h-5" />,
    label: "WordPress WooCommerce Stores",
    detail:
      "Flexible, scalable stores on the world's leading CMS with full WooCommerce power",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    label: "Payment Gateway Integration",
    detail:
      "Razorpay, PayU, Stripe, and other gateways configured for secure, smooth checkout",
  },
  {
    icon: <Package className="w-5 h-5" />,
    label: "Product Catalog Setup",
    detail:
      "Full product upload, categorisation, variant setup, and image optimisation",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    label: "Inventory Management",
    detail:
      "Stock tracking, low-stock alerts, and multi-location inventory control",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    label: "Order Management System",
    detail:
      "Order processing workflows, notifications, and fulfilment integrations",
  },
];

const ADVANTAGES = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multiple Platforms",
    desc: "Shopify, ShopDeck, SmartBiz, and WordPress — we build on the platform that fits your needs best.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Secure Payments",
    desc: "Trusted payment gateways with SSL, PCI compliance, and fraud prevention built in.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Easy Management",
    desc: "Intuitive admin dashboard so you can manage orders, products, and customers with ease.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Optimized",
    desc: "Seamless buying experience on every device — over 70% of e-commerce is mobile.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Checkout",
    desc: "Streamlined checkout flow to reduce cart abandonment and boost conversions.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO for Products",
    desc: "Product page optimisation to rank on Google and attract organic buyers.",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Scalable Catalog",
    desc: "Architecture built to handle hundreds to thousands of SKUs without performance drops.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Ongoing Support",
    desc: "Post-launch updates, feature additions, and maintenance — we're your long-term tech partner.",
  },
];

const PROCESS = [
  {
    step: 1,
    icon: <Globe className="w-6 h-6" />,
    title: "Platform Selection",
    desc: "We assess your goals, budget, and scale to recommend the ideal platform for your store.",
  },
  {
    step: 2,
    icon: <Layout className="w-6 h-6" />,
    title: "Design & Branding",
    desc: "Custom store design aligned with your brand — homepage, collections, product pages.",
  },
  {
    step: 3,
    icon: <Package className="w-6 h-6" />,
    title: "Product Setup",
    desc: "Full catalogue upload, categorisation, variant configuration, and SEO optimisation.",
  },
  {
    step: 4,
    icon: <Lock className="w-6 h-6" />,
    title: "Payment & Testing",
    desc: "Payment gateway integration, end-to-end order flow testing, and QA across devices.",
  },
  {
    step: 5,
    icon: <Rocket className="w-6 h-6" />,
    title: "Launch & Support",
    desc: "Go live with monitoring in place — then ongoing support to keep your store growing.",
  },
];

const PLATFORMS = ["Shopify", "ShopDeck", "SmartBiz", "WooCommerce"];

export default function ServiceEcommerce() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent("Hi! I'm interested in E-commerce Development services. Can we discuss?")}`;
  const waGeneralHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div>
      {/* ── HERO ── */}
      <section
        data-ocid="ecom.hero.section"
        className="relative overflow-hidden bg-card border-b border-border"
        aria-labelledby="ecom-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 right-1/4 w-[480px] h-[480px] rounded-full opacity-12 blur-3xl gradient-primary" />
          <div
            className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
            style={{ background: "oklch(var(--accent) / 0.6)" }}
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
              data-ocid="ecom.breadcrumb.services_link"
            >
              <ArrowLeft className="w-4 h-4" /> Services
            </Link>
            <ChevronRight className="w-4 h-4 opacity-50" />
            <span className="text-foreground font-medium">
              E-commerce Solutions
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
                  Commerce
                </Badge>
              </motion.div>
              <motion.h1
                id="ecom-hero-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                E-commerce <span className="gradient-text">Solutions</span>
              </motion.h1>
              <motion.p
                className="font-display text-xl sm:text-2xl font-semibold text-accent mb-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Your online store, built to sell
              </motion.p>
              <motion.p
                className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                We build powerful, conversion-optimised online stores on the
                platforms that make sense for your business — from Shopify's
                ecosystem to WordPress flexibility.
              </motion.p>
              {/* Platform badges */}
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
              >
                {PLATFORMS.map((p) => (
                  <Badge
                    key={p}
                    variant="outline"
                    className="border-primary/30 text-foreground text-sm px-3 py-1 font-medium"
                  >
                    {p}
                  </Badge>
                ))}
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.38 }}
              >
                <a href={waHref} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="gradient-primary text-primary-foreground border-0 font-semibold px-8 h-12 transition-smooth hover:opacity-90 hover:scale-[1.02] shadow-elevated"
                    data-ocid="ecom.hero.whatsapp_button"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us
                  </Button>
                </a>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold px-8 h-12 border-border hover:bg-muted transition-smooth"
                    data-ocid="ecom.hero.contact_button"
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
              <div className="rounded-2xl bg-gradient-to-br from-accent/15 to-primary/15 p-1 shadow-elevated">
                <div className="rounded-xl bg-card p-8 flex flex-col items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-elevated">
                    <ShoppingCart className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="text-center">
                    <p className="font-display font-bold text-2xl text-foreground">
                      E-commerce
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      4 Platforms · Full Stack
                    </p>
                  </div>
                  {[
                    { label: "Avg. Conversion Uplift", value: "3×" },
                    { label: "Stores Built", value: "25+" },
                    { label: "Avg. Launch Time", value: "2 weeks" },
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
        data-ocid="ecom.provide.section"
        className="bg-background py-20 md:py-28"
        aria-labelledby="ecom-provide-heading"
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
              id="ecom-provide-heading"
              className="font-display text-3xl sm:text-4xl font-bold mb-5"
            >
              Complete <span className="gradient-text">Store Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We handle everything from platform selection and store design to
              product setup, payment integration, and post-launch support — so
              your store is ready to sell from day one.
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
                data-ocid={`ecom.provide.item.${i + 1}`}
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
                All stores include 30 days post-launch support, analytics setup,
                and a training session so your team can manage it confidently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section
        data-ocid="ecom.advantages.section"
        className="bg-muted/30 py-20 md:py-28"
        aria-labelledby="ecom-advantages-heading"
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
              id="ecom-advantages-heading"
              className="font-display text-3xl sm:text-4xl font-bold mb-4"
            >
              The <span className="gradient-text">Advantages</span> of Working
              with Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Eight reasons why brands trust Agency Studio to build their online
              stores.
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
                data-ocid={`ecom.advantage.item.${i + 1}`}
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
        data-ocid="ecom.process.section"
        className="bg-background py-20 md:py-28"
        aria-labelledby="ecom-process-heading"
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
              id="ecom-process-heading"
              className="font-display text-3xl sm:text-4xl font-bold mb-4"
            >
              Our <span className="gradient-text">5-Step Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              From choosing the right platform to launching a store that sells —
              a clear, proven process.
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
                  data-ocid={`ecom.process.item.${i + 1}`}
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
        data-ocid="ecom.cta.section"
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
              Let's build your online store and start selling. Free consultation
              on platform selection and strategy — no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={waGeneralHref} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground border-0 font-semibold text-base px-8 h-12 transition-smooth hover:shadow-glow hover:scale-[1.03] btn-shine shadow-elevated"
                  data-ocid="ecom.cta.whatsapp_button"
                >
                  <MessageCircle className="mr-2 w-5 h-5" /> Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold text-base px-8 h-12 border-border hover:bg-muted hover:border-primary/40 hover:shadow-glow-sm hover:scale-[1.02] transition-smooth"
                  data-ocid="ecom.cta.contact_button"
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
