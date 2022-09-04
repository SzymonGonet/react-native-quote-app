import { Pressable, StyleSheet, Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = ({ navigation }: any) => {
  const [favourite, setFavourite] = useState(false);
  const [data, setData] = useState<any>([]);

  const url = "https://michael-scott-quotes-api.herokuapp.com/randomQuote";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  const RedIcon = () => {
    setFavourite(!favourite);
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.userContainer}>
        <EvilIcons
          name="user"
          size={50}
          color="white"
          onPress={() => navigation.navigate("User")}
        />
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>{data.quote}</Text>
      </View>
      <View style={styles.quoteAuthor}>
        <Text style={styles.authorText}>{data.author}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <EvilIcons name="share-apple" size={45} color="white" />
        <Pressable onPress={RedIcon}>
          <EvilIcons
            name="heart"
            size={45}
            color={favourite ? "red" : "white"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 90,
    paddingHorizontal: 20,
    backgroundColor: "#000500",
  },
  userContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: "green",
  },
  quoteContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 150,
    // backgroundColor: "blue",
  },
  quoteText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  quoteAuthor: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "green",
  },
  authorText: {
    color: "white",
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 130,
    // backgroundColor: "red",
  },
});
