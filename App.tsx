import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 10,
          marginTop: 16,
          padding: 16,
          backgroundColor: "#FEFEFE",
          height: "100%",
          width: "100%",
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
        {/* Followers Section */}
        <View
          style={{
            display: "flex",
            backgroundColor: "#F6F8FF",
            flexDirection: "row",
            padding: 16,
            justifyContent: "space-between",
            marginTop: 30,
            borderRadius: 10,
          }}
        >
          <View>
            <Text
              style={{
                color: "#BDC5D3",
                marginLeft: 8,
                fontWeight: "bold",
              }}
            >
              Repos
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 18,
                marginBottom: 14,
                textAlign: "center",
              }}
            >
              81
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#BDC5D3",
                marginLeft: 8,
                fontWeight: "bold",
              }}
            >
              Followers
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 18,
                marginBottom: 14,
              }}
            >
              9.8K
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#BDC5D3",
                marginLeft: 8,
                fontWeight: "bold",
              }}
            >
              Following
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 18,
                marginBottom: 14,
              }}
            >
              803
            </Text>
          </View>
        </View>
        {/* Contact Section */}
        <View
          style={{
            marginTop: 30,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 16,
            }}
          >
            <Image
              source={require("./assets/003-pin.png")}
              style={{
                width: 20,
                height: 20,
                objectFit: "contain",
              }}
            />
            <Text
              style={{
                color: "#BDC5D3",
                fontWeight: "bold",
                marginLeft: 8,
              }}
            >
              Dhaka, Bangladesh.
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 16,
            }}
          >
            <Image
              source={require("./assets/002-url.png")}
              style={{
                width: 20,
                height: 20,
                objectFit: "contain",
              }}
            />
            <Text
              style={{
                color: "#BDC5D3",
                fontWeight: "bold",
                marginLeft: 8,
              }}
            >
              https://dev-tousif.vercel.app
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 16,
            }}
          >
            <Image
              source={require("./assets/004-twitter.png")}
              style={{
                width: 20,
                height: 20,
                objectFit: "contain",
              }}
            />
            <Text
              style={{
                color: "#BDC5D3",
                fontWeight: "bold",
                marginLeft: 8,
              }}
            >
              my_dreams1990
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 16,
            }}
          >
            <Image
              source={require("./assets/001-office-building.png")}
              style={{
                width: 20,
                height: 20,
                objectFit: "contain",
              }}
            />
            <Text
              style={{
                color: "#BDC5D3",
                fontWeight: "bold",
                marginLeft: 8,
              }}
            >
              @github
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F8FF",
    padding: 32,
    height: "100%",
  },
});
