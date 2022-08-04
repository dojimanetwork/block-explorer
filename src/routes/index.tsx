import { mount, redirect, route, withView } from "navi";
import { lazy } from "react";
import { DashboardUrl } from "./route.constants";
const DojimaBlockExplorer = lazy(() => import("../pages/index"));
const Dashboard = lazy(() => import("../pages/dashboard/index"))

export default mount({
  "/block-explorer": NavBarWithView(
    mount({
      "/dashboard": route({
        view: <Dashboard />,
      }),
    })
  ),
  "/": redirect(`${DashboardUrl}`),
});

function NavBarWithView(routes: any) {
  return withView(<DojimaBlockExplorer />, routes);
}
