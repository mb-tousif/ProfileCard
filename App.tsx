import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View
        style={{
          borderRadius: 10,
          marginTop: 16,
          padding: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "justify",
          backgroundColor: "#FEFEFE",
        }}
      >
        <Image
          source={require("./assets/Oval.png")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 16,
            margin: "auto",
          }}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Tousif
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#2479FF",
              marginLeft: 8,
            }}
          >
            Full Stack Developer
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#2479FF",
              marginLeft: 8,
            }}
          >
            Joined 8 Mar 2024
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F8FF",
    padding: 32,
  },
});
