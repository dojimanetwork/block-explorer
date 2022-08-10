import BlockImg from '../static/side-navbar/block.svg'
import DashImg from '../static/side-navbar/dash.svg'
import TransactionImg from '../static/side-navbar/transaction.svg'
import IcBlockImg from '../static/side-navbar/ic_block_chain.svg'
import IcObjectiveImg from '../static/side-navbar/ic_objective_block.svg'
import ValidatorsImg from '../static/side-navbar/validators.svg'
import { DashboardUrl, TransactionsUrl } from '../routes/route.constants'

  export const menuData = [
    {
      name: DashImg,
      active: true,
      Icon: undefined,
      link: DashboardUrl,
      public: false,
      private: true,
      md: 3,
      mobile: true,
      desktop: true,
    },
    {
      name: BlockImg,
      active: false,
      Icon: undefined,
      link: TransactionsUrl,
      public: true,
      private: true,
      md: 2.5,
      mobile: true,
      desktop: true,
    },
    {
      name: TransactionImg,
      active: false,
      Icon: undefined,
      link: '/dummy',
      public: true,
      private: true,
      md: 1.5,
      mobile: true,
      desktop: true,
    },
    {
      name: IcBlockImg,
      active: false,
      Icon: undefined,
      link: '/dummy',
      public: false,
      private: true,
      md: 1.5,
      mobile: true,
      desktop: false,
    },
    {
      name: ValidatorsImg,
      active: false,
      Icon: undefined,
      link: '/dummy',
      public: false,
      private: true,
      md: 1.5,
      mobile: true,
      desktop: false,
    },
    {
      name: IcObjectiveImg,
      active: false,
      Icon: undefined,
      link: '/dummy',
      public: false,
      private: true,
      md: 1.5,
      mobile: true,
      desktop: false,
    },
  ];
  