import { mount, redirect, route, withView } from 'navi';
import { lazy } from 'react';
import { DashboardUrl } from './route.constants';
const DojimaBlockExplorer = lazy(() => import('../pages/index'));
const Dashboard = lazy(() => import('../pages/dashboard/index'));
const Txs = lazy(() => import('../pages/transactions/index'));
const BlocksTable = lazy(() => import('../pages/blocks/blocks.table'));
const Blocks = lazy(() => import('../pages/blocks/index'));
const Validators = lazy(() => import('../pages/Validators/index'));
const Pools = lazy(() => import('../pages/pools/index'));
const TxUnbond = lazy(() => import('../pages/transactions/tx.details.unbond'));
const PoolDetails = lazy(() => import('../pages/pools/pool.details'));
const AddressView = lazy(() => import('../pages/address/index'));
const AddressType = lazy(() => import('../pages/address/address.type'));
const VaultView = lazy(() => import('../pages/vault/vault.table'));
const VaultAddress = lazy(() => import('../pages/vault/vault.address'));
const ValidatorsInfo = lazy(() => import('../pages/Validators/validators.info'))
const TxHashInfoSearch = lazy(() => import('../pages/transactions/tx.hash.info.search'))

export default mount({
  '/block-explorer': NavBarWithView(
    mount({
      '/dashboard': route({
        view: <Dashboard />,
      }),
      '/blocks-table': route({
        view: <BlocksTable />,
      }),
      '/blocks': route({
        view: <Blocks />,
      }),
      '/transactions': route({
        view: <Txs />,
      }),
      '/tx-hash-info': route({
        view: <TxHashInfoSearch />,
      }),
      '/validators': route({
        view: <Validators />,
      }),
      '/validators-info': route({
        view: <ValidatorsInfo />,
      }),
      '/pools': route({
        view: <Pools />,
      }),
      'pool-details': route({
        view: <PoolDetails />,
      }),
      '/unbond': route({
        view: <TxUnbond />,
      }),
      '/address': route({
        view: <AddressView />,
      }),
      '/address-type': route({
        view: <AddressType />,
      }),
      '/vault-table': route({
        view: <VaultView />,
      }),
      '/vault-address': route({
        view: <VaultAddress />,
      }),
    })
  ),
  '/': redirect(`${DashboardUrl}`),
});

function NavBarWithView(routes: any) {
  return withView(<DojimaBlockExplorer />, routes);
}
