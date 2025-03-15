import { StyleSheet, View } from "react-native";
import { registerRootComponent } from "expo";

import PlaceholderImage from "@/assets/images/background-image.png";
import { Button } from "@/components/button";
import { ImageViewer } from "@/components/image-viewer";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="写真を選択" />
        <Button label="この写真を使用" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

registerRootComponent(App);
