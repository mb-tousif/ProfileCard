import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 10,
          marginTop: 16,
          padding: 16,
          backgroundColor: "#FEFEFE",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "justify",
          }}
        >
          {/* Top Section */}
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
              }}
            >
              @github/mb-tousif
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#BDC5D3",
                marginLeft: 8,
              }}
            >
              Joined 8 Jan 2021
            </Text>
          </View>
        </View>
        {/* Description Section */}
        <Text
          style={{
            color: "#BDC5D3",
            marginTop: 16,
            textAlign: "justify",
          }}
        >
          I am a Full Stack Developer with 3 years of experience. I have worked
          on multiple projects and have a good understanding of the software
          development life-cycle. I am a quick learner and have a passion for
          learning new technologies.
        </Text>
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
