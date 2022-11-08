import { useContext } from "react";
import { TxHashDataContext } from "../providers/tx.hash.data.provider";


export default function useTxHashData() {
  const context = useContext(TxHashDataContext);
  return { ...context };
}
