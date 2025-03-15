import { StyleSheet, View } from "react-native";
import { registerRootComponent } from "expo";

import PlaceholderImage from "@/assets/images/background-image.png";
import { ImageViewer } from "@/components/image-viewer";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
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
});

registerRootComponent(App);
