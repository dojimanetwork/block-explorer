import { useContext } from "react";
import { BlockChainDataContext } from "../providers/block.data.provider";

export default function useBlockChainData() {
  const context = useContext(BlockChainDataContext);
  return { ...context };
}
