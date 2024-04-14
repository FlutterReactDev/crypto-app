import { createLazyFileRoute } from "@tanstack/react-router";
import { WelcomeSlider } from "@components/molecules/welcome-slider";
const Index = () => {
  return <WelcomeSlider />;
};
export const Route = createLazyFileRoute("/")({
  component: Index,
});
