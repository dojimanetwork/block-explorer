import { MenuItem } from '../components/common/side.nav.bar';

export function restoreMenuBar(
  menuItems: Array<MenuItem>,
  prevClickedIndex: number
) {
  //others as false
  menuItems
    .filter((item) => item.active)
    .forEach((item) => (item.active = false));
  //make prev clicked item to true
  menuItems[prevClickedIndex].active = true;
  return menuItems;
}
