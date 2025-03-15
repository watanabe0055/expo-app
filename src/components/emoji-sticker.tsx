import { type FC } from "react";
import { Animated, View, type ImageSourcePropType } from "react-native";

type EmojiStickerProps = {
  stickerSource: ImageSourcePropType | undefined;
  imageSize: number;
};

export const EmojiSticker: FC<EmojiStickerProps> = (props) => {
  return (
    <View style={{ top: -350 }}>
      <Animated.Image
        source={props.stickerSource}
        resizeMode="contain"
        style={{ width: props.imageSize, height: props.imageSize }}
      />
    </View>
  );
};
