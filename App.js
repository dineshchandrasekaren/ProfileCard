import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import Section from "./src/Section";
import Card from "./src/Card";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={["bottom"]}
        style={{ flex: 1, justifyContent: "flex-start" }}
      >
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require("./assets/bg.jpg")}
              style={{ width: "100%", height: 200 }}
            />
            <Image
              source={require("./assets/profile.jpg")}
              style={styles.avator}
            />
            <Text style={styles.name}>DINESH C</Text>
            <View style={styles.linkContainer}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://github.com/dineshchandrasekaren");
                }}
              >
                <FontAwesome6 name="github" size={25} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://www.linkedin.com/in/dinesh--c");
                }}
              >
                <FontAwesome6 name="linkedin" size={25} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    "https://dinesh-portfolio-website.vercel.app/"
                  );
                }}
              >
                <FontAwesome6 name="link" size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <Section title="About">
            <Text style={styles.defaultText}>
              Software Engineer with 2.4 years of experience specializing in
              ReactJS for building dynamic, scalable frontends. Proficient in
              component-based architecture, Redux state management, REST API
              integration, and responsive UI design. Hands-on experience with
              backend fundamentals using Node.js, Express.js, and MongoDB for
              full-stack applications. Proven ability to manage projects
              end-to-end including personal projects showcasing API design,
              frontend state management, and deployment features.
            </Text>
          </Section>
          <Section title="Projects">
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[
                {
                  image: require("./assets/tindog.png"),
                  name: "Tindog clone",
                  link: "https://dineshchandrasekaren.github.io/tindog_website/",
                },
                {
                  image: require("./assets/hulu.png"),
                  name: "Hulu clone",
                  link: "https://dineshchandrasekaren.github.io/hulu-clone/",
                },
                {
                  image: require("./assets/bms.png"),
                  name: "BookMyShow Clone",
                  link: "https://dinesh-chandrasekarenbms.vercel.app/",
                },
                {
                  image: require("./assets/materialdesing.png"),
                  name: "Material Design clone",
                  link: "https://dineshchandrasekaren.github.io/material-design/",
                },
                {
                  image: require("./assets/guess.png"),
                  name: "Guess Game",
                  link: "https://dineshchandrasekaren.github.io/Guess-My-Number/",
                },
                {
                  image: require("./assets/master.png"),
                  name: "Search Monster",
                  link: "https://monsters-rolodex-mocha.vercel.app/",
                },
                {
                  image: require("./assets/todo.png"),
                  name: "Shareble Todo List",
                  link: "https://todo-list-flutter.vercel.app/",
                },
                {
                  image: require("./assets/zomato.png"),
                  name: "Zomato front end Clone",
                  link: "http://zomoto-front.vercel.app/",
                },
              ]}
              keyExtractor={(item) => item.name}
              contentContainerStyle={{
                gap: 15,
                marginVertical: 10,
                marginHorizontal: 5,
              }}
              renderItem={({ item }) => <Card {...item} />}
            />
          </Section>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    gap: 10,
    alignItems: "center",
    // justifyContent: "center",
  },
  defaultText: {
    fontSize: 16,
  },
  avator: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    marginTop: "-18%",
  },
  name: { fontSize: 26, fontWeight: "600" },
  linkContainer: { flexDirection: "row", gap: 10 },
});
