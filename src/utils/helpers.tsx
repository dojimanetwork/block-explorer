import { MenuItem } from "../components/common/side.nav.bar";

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

export function trimOldestWithLatitem<T>(
  items: Array<T>,
  max: number,
  newItem: T
): Array<T> {
  let modArray: Array<T>;
  if (items.length > max) {
    modArray = items.splice(1, max - 1);
    modArray.push(newItem);
  } else {
    modArray = items;
    modArray.push(newItem);
  }
  return modArray;
}

export const getObjectKeys = (obj: Object): Array<string> => {
  return Object.keys(obj).sort();
};
