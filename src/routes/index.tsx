import { mount, redirect, route, withView } from "navi";
import { lazy } from "react";
import { DashboardUrl } from "./route.constants";
const DojimaBlockExplorer = lazy(() => import("../pages/index"));
const Dashboard = lazy(() => import("../pages/dashboard/index"))
const Txs = lazy(() => import('../pages/transactions/index'))
const BlocksTable = lazy(() => import('../pages/blocks/blocks.table')) 
const Blocks = lazy(() => import('../pages/blocks/index')) 
const Validators = lazy(() => import("../pages/Validators/index"))
const Pools = lazy(() => import('../pages/pools/index'))
const TxUnbond = lazy(() => import('../pages/transactions/tx.details.unbond'))
const PoolDetails = lazy(() => import('../pages/pools/pool.details'))
const AddressView = lazy(() => import('../pages/address/index'))
const AddressType = lazy(() => import('../pages/address/address.type'))

export default mount({
  "/block-explorer": NavBarWithView(
    mount({
      "/dashboard": route({
        view: <Dashboard />,
      }),
      "/blocks-table": route({
        view: <BlocksTable />,
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
      "/pools": route({
        view: <Pools />,
      }),
      "pool-details": route({
       view: <PoolDetails />,
      }),
      "/unbond": route({
        view: <TxUnbond />,
      }),
      "/address": route({
        view: <AddressView />,
      }),
      "/address-type": route({
        view: <AddressType />,
      }),     
    })
  ),
  "/": redirect(`${DashboardUrl}`),
});

function NavBarWithView(routes: any) {
  return withView(<DojimaBlockExplorer />, routes);
}
