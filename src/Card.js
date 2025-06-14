import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Card = ({ image, name, link }) => {
  return (
    <Pressable
      style={[styles.borderLight, styles.card]}
      onPress={() => Linking.openURL(link)}
    >
      <Image source={image} style={styles.cardImage} resizeMode="stretch" />
      <View style={{ padding: 5 }}>
        <Text style={styles.cardTitle}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,

    overflow: "hidden",
    aspectRatio: 16 / 10,
    height: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: "70%",
    flex: 1,
    borderRadius: 10,
  },
  borderLight: { borderWidth: 1, borderColor: "#d3d3d3" },
  cardTitle: { fontSize: 20, fontWeight: "bold" },
});
