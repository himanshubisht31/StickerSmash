import React from "react";
import { StyleSheet, Image, ImageSourcePropType } from "react-native";
type ImageViewerProps = {
  placeholderImageSource: ImageSourcePropType;
  selectedImage: string;
};

const ImageViewer: React.FC<ImageViewerProps> = ({
  placeholderImageSource,
  selectedImage,
}) => {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
