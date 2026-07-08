import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/features/home/Hero";
import { IntroStatement } from "@/features/home/IntroStatement";
import { SelectedWork } from "@/features/home/SelectedWork";
import { JourneyStrip } from "@/features/home/JourneyStrip";
import { ClosingCta } from "@/features/home/ClosingCta";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <SelectedWork />
      <JourneyStrip />
      <ClosingCta />
    </>
  );
}
