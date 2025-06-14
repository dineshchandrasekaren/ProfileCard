import { View, Text, StyleSheet } from "react-native";

export default function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
});
