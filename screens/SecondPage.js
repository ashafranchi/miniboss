// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from 'react';
import {
  Button,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Box, Flex, HStack, Stack, Center, NativeBaseProvider, Container, Heading } from "native-base"

const SecondPage = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
          <Box style={styles.nextBox} size={650} bg="white">
            <Text style={styles.boxHeader}>
              Who's Next?
            </Text>
          </Box>
          <Box style={styles.nextBox} size={300} bg="white">
            <Text style={styles.boxHeader}>
              Map
            </Text>
          </Box>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "1em",
    backgroundColor: "#F0F4FF",
    alignItems: "center",
  },
  nextBox: {
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


export default SecondPage;