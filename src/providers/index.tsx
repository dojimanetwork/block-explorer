import DojimaTheme from "@dojima-ui/theme";
import { ChildrenType } from "@dojima-ui/types";
import { ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
import BlockChainDataProvider from "./block.data.provider";
import LanguageProvider from "./LanguageProvider";
import NodeDataProvider from "./node.data.provider";
import PoolsDataProvider from "./pools.data.provider";
import SnackbarProvider from "./snackbar.provider";
import TxHashDataProvider from "./tx.hash.data.provider";

function DojimaProvider(props: ChildrenType) {
  const Theme = DojimaTheme({ isDark: true });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme}>
        <SnackbarProvider>
          <NodeDataProvider>
            <TxHashDataProvider>
              <BlockChainDataProvider>
                <PoolsDataProvider>
                  <LanguageProvider>{props.children}</LanguageProvider>
                </PoolsDataProvider>
              </BlockChainDataProvider>
            </TxHashDataProvider>
          </NodeDataProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default DojimaProvider;
