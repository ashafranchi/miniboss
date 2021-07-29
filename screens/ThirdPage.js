import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Box, Flex, HStack, Stack, Center, NativeBaseProvider, Container, Heading } from "native-base";

const ThirdPage = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Box style={styles.mapBox} size={875} bg="white">
          <Text style={styles.boxHeader}>
            Map
          </Text>
        </Box>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "1em",
    backgroundColor: "#F0F4FF",
    alignItems: "center",
  },
  mapBox: {
    borderRadius: 10,
    marginTop: "1em",
    marginBottom: "1em",
    width: "94%",
  },
  boxHeader: {
    color: "#ADB3D2",
    fontSize: "1.5em",
    paddingTop: "0.5em",
    paddingLeft: "0.5em",
  },
});

export default ThirdPage;