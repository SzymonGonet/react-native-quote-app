import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const UserScreen = ({ navigation }: any) => {
  return (
    <View style={styles.userContainer}>
      <EvilIcons
        name="chevron-left"
        size={55}
        color="white"
        onPress={() => navigation.navigate("Home")}
      />

      <Text style={styles.profileHeader}>My Quotes</Text>
      <ScrollView>
        <Text style={styles.quoteElement}>Quote 1</Text>
        <Text style={styles.quoteElement}>Quote 1</Text>
        <Text style={styles.quoteElement}>Quote 1</Text>
        <Text style={styles.quoteElement}>Quote 1</Text>
      </ScrollView>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 50,
    backgroundColor: "#000500",
  },
  profileHeader: {
    color: "white",
  },
  quoteElement: {
    color: "white",
  },
});
