import { useContext } from "react";
import { NodeDataContext } from "../providers/node.data.provider";


export default function useNodeData() {
  const context = useContext(NodeDataContext);
  return { ...context };
}
