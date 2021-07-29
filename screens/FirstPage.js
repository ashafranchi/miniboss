import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Box, Flex, HStack, Stack, Center, NativeBaseProvider, Container, Heading } from "native-base"

const FirstPage = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Flex direction="row">
        <Box>
          <Flex direction="column" style={styles.firstColumn}>
            <Box style={styles.box} size={40} width="100%" bg="white">
              <Text style={styles.boxHeader}>
                Remember 🔑s
              </Text>
            </Box>
            <Box  style={styles.box} bg="white" size={40} width="100%">
              <Text style={styles.boxHeader}>
                Demos Today
              </Text>
            </Box>
            <Box style={styles.box} size={40} width="100%" bg="white">
              <Text style={styles.boxHeader}>
                My Sales
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex direction="column" style={styles.secondColumn}>
            <Box style={styles.boxTwo} size={80} width="100%" bg="white">
              <Text style={styles.boxHeader}>
                My Team
              </Text>
            </Box>
            <Box style={styles.boxTwo} size={176} width="100%" bg="white">
              <Text style={styles.boxHeader}>
                My Badges
              </Text>
            </Box>
          </Flex>
        </Box>
        </Flex>
          <Box style={styles.next}>
            <Box style={styles.nextBox} bg="white">
              <Text style={styles.boxHeader}>
                Who's Next?
              </Text>
            </Box>
        </Box>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F4FF",
    flex: 1,
    height: "100%",
    alignItems: "center",
  },
  box: {
    borderRadius: 10,
    marginTop: "1em",
    marginLeft: "-1em",
  },
  boxTwo: {
    borderRadius: 10,
    marginTop: "1em",
    marginLeft: "1em",
  },
  nextBox: {
    borderRadius: 10,
    marginTop: "2em",
    marginBottom: "2em",
    width: "38em",
    height: "30em",
  },
  boxHeader: {
    color: "#ADB3D2",
    fontSize: "1.5em",
    paddingTop: "0.5em",
    paddingLeft: "0.5em",
  },
  firstColumn: {
    width: "18em",
  },
  secondColumn: {
    width: "18em",
  },
});

export default FirstPage;