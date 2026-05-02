import { Skeleton } from "@/components/ui/skeleton";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useRouter,
} from "@tanstack/react-router";
import { Suspense, lazy, useEffect } from "react";
import { Layout } from "./components/Layout";

// Lazy-load pages
const HomePage = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/Services"));
const PortfolioPage = lazy(() => import("./pages/Portfolio"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));

// Service detail pages
const ServiceDigitalMarketingPage = lazy(
  () => import("./pages/ServiceDigitalMarketing"),
);
const ServiceWebsiteDevPage = lazy(() => import("./pages/ServiceWebsiteDev"));
const ServiceUIUXPage = lazy(() => import("./pages/ServiceUIUX"));
const ServiceEcommercePage = lazy(() => import("./pages/ServiceEcommerce"));
const ServiceRebuildWebsitePage = lazy(
  () => import("./pages/ServiceRebuildWebsite"),
);

function PageLoader() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col gap-6">
      <Skeleton className="h-12 w-2/3 rounded-lg" />
      <Skeleton className="h-6 w-full rounded-lg" />
      <Skeleton className="h-6 w-4/5 rounded-lg" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {["sk1", "sk2", "sk3"].map((id) => (
          <Skeleton key={id} className="h-48 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

/** Scrolls to the top of the page on every completed navigation. */
function ScrollToTop() {
  const router = useRouter();
  useEffect(() => {
    const unsub = router.subscribe("onResolved", () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return unsub;
  }, [router]);
  return null;
}

// Root route with Layout wrapper
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const serviceDigitalMarketingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/digital-marketing",
  component: ServiceDigitalMarketingPage,
});

const serviceWebsiteDesignRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/website-design",
  component: ServiceWebsiteDevPage,
});

const serviceUIUXRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/ui-ux-design",
  component: ServiceUIUXPage,
});

const serviceEcommerceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/ecommerce-development",
  component: ServiceEcommercePage,
});

const serviceRebuildWebsiteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/rebuild-website",
  component: ServiceRebuildWebsitePage,
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: PortfolioPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: () => <Navigate to="/" />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  serviceDigitalMarketingRoute,
  serviceWebsiteDesignRoute,
  serviceUIUXRoute,
  serviceEcommerceRoute,
  serviceRebuildWebsiteRoute,
  portfolioRoute,
  aboutRoute,
  contactRoute,
  catchAllRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
