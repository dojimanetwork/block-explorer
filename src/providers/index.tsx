import DojimaTheme from "@dojima-ui/theme";
import { ChildrenType } from "@dojima-ui/types";
import { ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
import LanguageProvider from "./LanguageProvider";

function DojimaProvider(props: ChildrenType) {
  const Theme = DojimaTheme({ isDark: true });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme}>
        <LanguageProvider>{props.children}</LanguageProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default DojimaProvider;
