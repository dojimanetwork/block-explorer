import { useNavigation } from "react-navi";

export default function useNavi() {
  const { navigate } = useNavigation();

  const navigateToUrl = (url: string) => {
    navigate(url);
  };
  const clearHistroyNavigateToUrl = (url: string) => {
    navigate(url, { replace: true });
  };
  return { navigateToUrl, clearHistroyNavigateToUrl };
}
