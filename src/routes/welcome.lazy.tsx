import { WelcomeSlider } from "@components/molecules/welcome-slider";
import { createLazyFileRoute } from "@tanstack/react-router";

const Welcome = () => {
  return <WelcomeSlider />;
};

export const Route = createLazyFileRoute("/welcome")({
  component: Welcome,
});
