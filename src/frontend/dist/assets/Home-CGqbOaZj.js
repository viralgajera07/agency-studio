import { c as createLucideIcon, h as hasReducedMotionListener, i as initPrefersReducedMotion, r as reactExports, p as prefersReducedMotion, j as jsxRuntimeExports, m as motion, L as Link, B as Button, S as SERVICES, W as WHY_CHOOSE_US, P as PORTFOLIO_ITEMS, a as PROCESS_STEPS, Z as Zap } from "./index-CWaMM7uw.js";
import { B as Badge } from "./badge-HKWYsiW8.js";
import { C as Card, a as CardContent } from "./card-CstES4Ou.js";
import { T as TrendingUp } from "./trending-up-BlXuI6_R.js";
import { C as CodeXml } from "./code-xml-DMZ1FSRC.js";
import { A as ArrowRight } from "./arrow-right-CE_ZPOnn.js";
import { R as Rocket } from "./rocket-BqfUmwbm.js";
import { H as HeartHandshake } from "./heart-handshake-TPCM6fkf.js";
import { S as Sparkles } from "./sparkles-DgA7Y6AG.js";
import { T as Target } from "./target-BBTkJAlX.js";
import { L as Layers } from "./layers-B675i96H.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Compass = createLucideIcon("compass", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
      key: "nt11vn"
    }
  ],
  [
    "path",
    {
      d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
      key: "15qc1e"
    }
  ],
  ["path", { d: "m2.3 2.3 7.286 7.286", key: "1wuzzi" }],
  ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }]
];
const PenTool = createLucideIcon("pen-tool", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode);
function useReducedMotion() {
  !hasReducedMotionListener.current && initPrefersReducedMotion();
  const [shouldReduceMotion] = reactExports.useState(prefersReducedMotion.current);
  return shouldReduceMotion;
}
const ICON_MAP = {
  TrendingUp,
  Code2: CodeXml,
  Layers,
  ShoppingBag,
  Zap,
  Target,
  Sparkles,
  HeartHandshake,
  Compass,
  PenTool,
  Rocket
};
const CATEGORY_BADGE = {
  "E-commerce": "bg-primary/20 text-primary border-primary/30",
  "UI/UX": "bg-accent/20 text-accent border-accent/30",
  Ads: "bg-muted text-foreground border-border",
  Website: "bg-secondary text-secondary-foreground border-border"
};
const HERO_SERVICES = [
  {
    icon: TrendingUp,
    label: "Digital Marketing",
    desc: "Meta Ads · Growth",
    color: "from-primary/20 to-primary/5 border-primary/30",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    href: "/services/digital-marketing"
  },
  {
    icon: CodeXml,
    label: "Website Development",
    desc: "React · Full-Stack",
    color: "from-accent/20 to-accent/5 border-accent/30",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
    href: "/services/website-design"
  },
  {
    icon: PenTool,
    label: "UI/UX Design",
    desc: "Web · Mobile Apps",
    color: "from-primary/15 to-accent/10 border-primary/25",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    href: "/services/ui-ux-design"
  },
  {
    icon: ShoppingBag,
    label: "E-commerce Solutions",
    desc: "Shopify · WordPress",
    color: "from-accent/15 to-primary/10 border-accent/25",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    href: "/services/ecommerce-development"
  }
];
const SERVICE_DETAIL_ROUTES = {
  "digital-marketing": "/services/digital-marketing",
  "web-development": "/services/website-design",
  "uiux-design": "/services/ui-ux-design",
  ecommerce: "/services/ecommerce-development"
};
function ServiceCard({ service, index }) {
  const Icon = ICON_MAP[service.icon] ?? TrendingUp;
  const detailHref = SERVICE_DETAIL_ROUTES[service.id] ?? "/services";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.article,
    {
      initial: { opacity: 0, y: 32 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.45, delay: index * 0.1 },
      whileHover: {
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      },
      "data-ocid": `services.item.${index + 1}`,
      className: "group border-glow",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full bg-card border-border shadow-card hover:shadow-glow transition-smooth hover:border-primary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-primary-foreground icon-spin" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-smooth", children: service.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: service.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: detailHref,
            className: "mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-smooth group/link",
            "data-ocid": `services.link.${index + 1}`,
            children: [
              "Learn more",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover/link:translate-x-1 transition-smooth" })
            ]
          }
        )
      ] }) })
    }
  );
}
function WhyCard({ item, index }) {
  const Icon = ICON_MAP[item.icon] ?? Sparkles;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: index % 2 === 0 ? -24 : 24 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.4, delay: index * 0.1 },
      whileHover: {
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 }
      },
      className: "flex gap-4 items-start group cursor-default",
      "data-ocid": `why.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 shrink-0 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center transition-smooth group-hover:bg-primary group-hover:border-primary group-hover:shadow-glow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary group-hover:text-white icon-spin" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-smooth", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.description })
        ] })
      ]
    }
  );
}
function PortfolioCard({
  item,
  index
}) {
  const badgeClass = CATEGORY_BADGE[item.category] ?? "bg-secondary text-secondary-foreground border-border";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.article,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.4, delay: index % 3 * 0.1 },
      whileHover: { y: -4, transition: { type: "spring", stiffness: 300 } },
      "data-ocid": `portfolio.item.${index + 1}`,
      className: "group",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden bg-card border-border shadow-card hover:shadow-glow hover:border-primary/30 transition-smooth", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden aspect-[16/10]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.image,
              alt: item.title,
              className: "w-full h-full object-cover group-hover:scale-110 transition-all duration-500",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "portfolio-overlay", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-display font-semibold text-sm leading-tight", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-xs mt-0.5 line-clamp-2", children: item.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              className: `absolute top-3 left-3 text-xs font-medium border backdrop-blur-sm ${badgeClass}`,
              children: item.category
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-base mb-1 group-hover:text-primary transition-smooth", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed line-clamp-2", children: item.description })
        ] })
      ] })
    }
  );
}
function ProcessCard({ step, index }) {
  const Icon = ICON_MAP[step.icon] ?? Compass;
  const isLast = index === 3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.45, delay: index * 0.12 },
      className: "relative flex flex-col items-center text-center group",
      "data-ocid": `process.item.${index + 1}`,
      children: [
        !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px",
            initial: { scaleX: 0 },
            whileInView: { scaleX: 1 },
            viewport: { once: true },
            transition: { duration: 0.8, delay: index * 0.2 + 0.3 },
            style: {
              background: "linear-gradient(90deg, oklch(var(--primary) / 0.5) 0%, transparent 100%)",
              transformOrigin: "left"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            whileHover: { scale: 1.08, rotate: [0, -5, 5, 0] },
            transition: { type: "spring", stiffness: 300 },
            className: "relative z-10 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-elevated mb-4 group-hover:shadow-glow transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-primary-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-primary text-primary text-xs font-bold font-display flex items-center justify-center group-hover:animate-pulse-glow", children: step.step })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground mb-2", children: step.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed max-w-[200px]", children: step.description })
      ]
    }
  );
}
function HomePage() {
  const prefersReducedMotion2 = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "hero",
        className: "relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden gradient-hero",
        "aria-label": "Hero",
        children: [
          !prefersReducedMotion2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "floating-orb w-[500px] h-[500px] opacity-25",
                style: {
                  top: "5%",
                  right: "10%",
                  background: "oklch(var(--primary) / 0.6)"
                },
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "floating-orb floating-orb-2 w-72 h-72 opacity-15",
                style: {
                  bottom: "15%",
                  right: "25%",
                  background: "oklch(var(--accent) / 0.7)"
                },
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "floating-orb floating-orb-3 w-48 h-48 opacity-15",
                style: {
                  top: "40%",
                  left: "5%",
                  background: "oklch(var(--primary) / 0.4)"
                },
                "aria-hidden": "true"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-center bg-cover opacity-20 mix-blend-luminosity",
              style: {
                backgroundImage: "url('/assets/generated/hero-bg.dim_1400x800.jpg')"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: -16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "mb-6 border border-primary/40 bg-primary/10 text-primary font-medium px-3 py-1",
                    "data-ocid": "hero.badge",
                    children: "🚀 Digital Growth Agency"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.1 },
                className: "font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6",
                "data-ocid": "hero.heading",
                children: [
                  "Elevate Your",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-shimmer", children: "Digital Presence" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.55, delay: 0.2 },
                className: "text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl",
                "data-ocid": "hero.subheading",
                children: "We craft cutting-edge digital solutions — from Meta Ads and UI/UX design to full-stack web and e-commerce development — that drive growth for ambitious businesses."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.55, delay: 0.3 },
                className: "grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10",
                "data-ocid": "hero.services",
                children: HERO_SERVICES.map((svc, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: svc.href,
                    "data-ocid": `hero.service.${i + 1}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, y: 16 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.4, delay: 0.35 + i * 0.08 },
                        whileHover: {
                          y: -6,
                          rotateX: 4,
                          rotateY: 4,
                          scale: 1.04,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 18
                          }
                        },
                        style: {
                          perspective: "600px",
                          transformStyle: "preserve-3d"
                        },
                        className: `group relative rounded-xl border bg-gradient-to-br ${svc.color} p-3.5 cursor-pointer border-glow`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: `w-8 h-8 rounded-lg ${svc.iconBg} border border-current/10 flex items-center justify-center mb-2.5`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                svc.icon,
                                {
                                  className: `w-4 h-4 ${svc.iconColor} icon-spin`
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm leading-tight mb-0.5 group-hover:text-primary transition-smooth", children: svc.label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: svc.desc })
                        ]
                      }
                    )
                  },
                  svc.label
                ))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.65 },
                className: "flex flex-wrap gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "gradient-primary text-primary-foreground font-semibold font-display px-8 py-3 rounded-xl shadow-elevated hover:shadow-glow hover:scale-[1.04] transition-smooth border-0 btn-shine",
                      "data-ocid": "hero.primary_button",
                      children: [
                        "Book a Free Call",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "lg",
                      variant: "outline",
                      className: "font-semibold font-display px-8 py-3 rounded-xl border-border hover:border-primary/50 hover:bg-primary/10 hover:shadow-glow-sm hover:scale-[1.02] transition-smooth",
                      "data-ocid": "hero.secondary_button",
                      children: "View Our Work"
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.5, delay: 0.8 },
                className: "mt-12 flex flex-wrap gap-8",
                children: [
                  { value: "50+", label: "Projects Delivered" },
                  { value: "30+", label: "Happy Clients" },
                  { value: "3×", label: "Average ROI" }
                ].map((stat, si) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.4, delay: 0.9 + si * 0.1 },
                    whileHover: { scale: 1.08, transition: { type: "spring" } },
                    className: "flex flex-col cursor-default",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-bold gradient-text", children: stat.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: stat.label })
                    ]
                  },
                  stat.label
                ))
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "services",
        className: "py-20 lg:py-28 bg-muted/30",
        "aria-labelledby": "services-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.45 },
              className: "text-center mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 border border-accent/40 bg-accent/10 text-accent font-medium px-3 py-1", children: "What We Do" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    id: "services-heading",
                    className: "font-display text-4xl sm:text-5xl font-bold text-foreground mb-4",
                    children: [
                      "Our ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-shimmer", children: "Services" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "Full-spectrum digital services designed to grow your brand, attract customers, and drive measurable results." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
              "data-ocid": "services.list",
              children: SERVICES.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { service, index: i }, service.id))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: 0.4 },
              className: "text-center mt-10",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "font-display font-semibold border-primary/40 hover:bg-primary/10 hover:border-primary hover:shadow-glow-sm hover:scale-[1.02] transition-smooth btn-shine",
                  "data-ocid": "services.view_all_button",
                  children: [
                    "Explore All Services ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
                  ]
                }
              ) })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "why-us",
        className: "py-20 lg:py-28 bg-background",
        "aria-labelledby": "why-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -32 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 border border-primary/40 bg-primary/10 text-primary font-medium px-3 py-1", children: "Why Us" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    id: "why-heading",
                    className: "font-display text-4xl sm:text-5xl font-bold text-foreground mb-5",
                    children: [
                      "Built for Results,",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Not Just Looks" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed mb-8", children: "We don't just deliver beautiful work — we deliver measurable outcomes. Every strategy, design, and line of code is crafted with one goal: growing your business." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    className: "gradient-primary text-primary-foreground font-display font-semibold border-0 hover:shadow-glow hover:scale-[1.03] transition-smooth btn-shine",
                    "data-ocid": "why.cta_button",
                    children: [
                      "Start a Project ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
                    ]
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
              "data-ocid": "why.list",
              children: WHY_CHOOSE_US.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(WhyCard, { item, index: i }, item.title))
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "portfolio",
        className: "py-20 lg:py-28 bg-muted/30",
        "aria-labelledby": "portfolio-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.45 },
              className: "text-center mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 border border-accent/40 bg-accent/10 text-accent font-medium px-3 py-1", children: "Our Work" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    id: "portfolio-heading",
                    className: "font-display text-4xl sm:text-5xl font-bold text-foreground mb-4",
                    children: [
                      "Featured ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Projects" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "A curated selection of projects we've shipped — from growth campaigns to pixel-perfect digital products." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
              "data-ocid": "portfolio.list",
              children: PORTFOLIO_ITEMS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioCard, { item, index: i }, item.id))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: 0.3 },
              className: "text-center mt-10",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "font-display font-semibold border-primary/40 hover:bg-primary/10 hover:border-primary hover:shadow-glow-sm hover:scale-[1.02] transition-smooth btn-shine",
                  "data-ocid": "portfolio.view_all_button",
                  children: [
                    "View All Projects ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
                  ]
                }
              ) })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "process",
        className: "py-20 lg:py-28 bg-background",
        "aria-labelledby": "process-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.45 },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 border border-primary/40 bg-primary/10 text-primary font-medium px-3 py-1", children: "How We Work" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    id: "process-heading",
                    className: "font-display text-4xl sm:text-5xl font-bold text-foreground mb-4",
                    children: [
                      "Our ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Process" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "A proven four-step framework that takes your project from idea to live in weeks, not months." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative",
              "data-ocid": "process.list",
              children: PROCESS_STEPS.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessCard, { step, index: i }, step.step))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "cta",
        className: "py-20 lg:py-28 bg-background",
        "aria-labelledby": "cta-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 28 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.55 },
            className: "relative rounded-3xl overflow-hidden p-[1px] shadow-elevated",
            style: {
              background: "linear-gradient(135deg, oklch(var(--primary)) 0%, oklch(var(--accent)) 100%)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-[calc(1.5rem-1px)] px-8 py-16 sm:py-20 text-center relative overflow-hidden", children: [
              !prefersReducedMotion2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "floating-orb w-64 h-64 opacity-15",
                    style: {
                      top: "-20%",
                      left: "10%",
                      background: "oklch(var(--primary) / 0.8)"
                    },
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "floating-orb floating-orb-2 w-48 h-48 opacity-10",
                    style: {
                      bottom: "-10%",
                      right: "15%",
                      background: "oklch(var(--accent) / 0.8)"
                    },
                    "aria-hidden": "true"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 opacity-10 pointer-events-none",
                  style: {
                    background: "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(var(--primary)) 0%, transparent 70%)"
                  },
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  id: "cta-heading",
                  className: "relative font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5",
                  children: [
                    "Ready to",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-shimmer", children: "Grow Your Business?" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-muted-foreground text-lg max-w-2xl mx-auto mb-10", children: "Let's build something extraordinary together. Book a free strategy call and discover how we can transform your digital presence." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap justify-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "gradient-primary text-primary-foreground font-display font-semibold px-10 py-3 rounded-xl border-0 shadow-elevated hover:shadow-glow hover:scale-[1.04] transition-smooth btn-shine",
                    "data-ocid": "cta.primary_button",
                    children: [
                      "Book a Free Call ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "font-display font-semibold px-10 py-3 rounded-xl border-border hover:border-primary/50 hover:bg-primary/10 hover:shadow-glow-sm hover:scale-[1.02] transition-smooth",
                    "data-ocid": "cta.secondary_button",
                    children: "See Our Work"
                  }
                ) })
              ] })
            ] })
          }
        ) })
      }
    )
  ] });
}
export {
  HomePage as default
};
