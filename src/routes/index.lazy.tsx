import { createLazyFileRoute } from "@tanstack/react-router";

const Index = () => {
  return <div>Index</div>;
};
export const Route = createLazyFileRoute("/")({
  component: Index,
});
