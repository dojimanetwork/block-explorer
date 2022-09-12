import { mount, redirect, route, withView } from "navi";
import { lazy } from "react";
import { DashboardUrl } from "./route.constants";
const DojimaBlockExplorer = lazy(() => import("../pages/index"));
const Dashboard = lazy(() => import("../pages/dashboard/index"))
const Txs = lazy(() => import('../pages/transactions/index'))
const Blocks = lazy(() => import('../pages/blocks/index')) 
const Validators = lazy(() => import("../pages/transactions/tx.set.ipaddress"))

export default mount({
  "/block-explorer": NavBarWithView(
    mount({
      "/dashboard": route({
        view: <Dashboard />,
      }),
      "/blocks": route({
        view: <Blocks />,
      }),
      "/transactions": route({
        view: <Txs />,
      }),
      "/validators": route({
        view: <Validators />,
      }),
    })
  ),
  "/": redirect(`${DashboardUrl}`),
});

function NavBarWithView(routes: any) {
  return withView(<DojimaBlockExplorer />, routes);
}
