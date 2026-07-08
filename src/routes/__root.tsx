import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import "@fontsource/instrument-serif/400.css";
import "@fontsource-variable/inter/index.css";
import "@fontsource-variable/jetbrains-mono/index.css";
import { Nav } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";
import { SmoothScroll } from "../components/animations/SmoothScroll";
import { CustomCursor } from "../components/animations/CustomCursor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono-tag text-muted-foreground">Error · 404</p>
        <h1 className="font-display mt-4 text-7xl leading-none">Off-grid.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          That page doesn't exist — or it's still a private branch. Head back to the index.
        </p>
        <div className="mt-8">
          <Link to="/" className="story-link font-mono-tag">
            Return to index →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Rudra Pratap Singh — Software Engineer building the layer below the app",
      },
      {
        name: "description",
        content:
          "Software Engineer at Google. Google Summer of Code 2024 & 2025 with The Linux Foundation. Building open-source systems, developer tools, and cinematic web products.",
      },
      { name: "author", content: "Rudra Pratap Singh" },
      {
        property: "og:title",
        content: "Rudra Pratap Singh — Software Engineer",
      },
      {
        property: "og:description",
        content:
          "Google · GSoC × 2 · Open source in the Linux ecosystem. A quiet-machine portfolio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/profile.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll>
        <CustomCursor />
        <Nav />
        <main id="main" className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </SmoothScroll>
    </QueryClientProvider>
  );
}
