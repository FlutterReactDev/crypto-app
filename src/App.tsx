import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
import { useTelegram } from "./telegram";
import { useEffect } from "react";
const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
function App() {
  const { webApp } = useTelegram();
  useEffect(() => {
    webApp?.expand();
  }, [webApp]);
  return <RouterProvider router={router} />;
}

export default App;
