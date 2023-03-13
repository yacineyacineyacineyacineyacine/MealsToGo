/* eslint-disable react/react-in-jsx-scope */
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { RestaurentScreen } from "./src/features/restaurants/screens/restaurents_screen";

export default function App() {
  return (
    <>
      <PaperProvider>
        <RestaurentScreen />
        <ExpoStatusBar style="auto" />
      </PaperProvider>
    </>
  );
}
