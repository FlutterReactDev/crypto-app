import { HomePage } from "@components/molecules/home-page";
import { createLazyFileRoute } from "@tanstack/react-router";

const Welcome = () => {
  return <HomePage />;
};

export const Route = createLazyFileRoute("/home")({
  component: Welcome,
});
