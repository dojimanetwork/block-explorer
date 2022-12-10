import { useContext } from "react";
import { PoolsDataContext } from "../providers/pools.data.provider";


export default function usePoolsData() {
  const context = useContext(PoolsDataContext);
  return { ...context };
}