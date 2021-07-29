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

const FourthPage = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Flex direction="column">
          <Box>
            <Flex direction="row" style={styles.firstColumn}>
              <Box style={styles.box} size={40} width="100%" bg="white">
                <Text style={styles.boxHeader}>
                  Contact HQ
                </Text>
              </Box>
              <Box  style={styles.box} bg="white" size={40} width="100%">
                <Text style={styles.boxHeader}>
                  Sales Team
                </Text>
              </Box>
              <Box style={styles.box} size={40} width="100%" bg="white">
                <Text style={styles.boxHeader}>
                  Field Buddy
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex direction="row" style={styles.firstColumn}>
              <Box style={styles.box} size={40} width="100%" bg="white">
                <Text style={styles.boxHeader}>
                  Affirmations
                </Text>
              </Box>
              <Box  style={styles.box} bg="white" size={40} width="100%">
                <Text style={styles.boxHeader}>
                  1 Min Vids
                </Text>
              </Box>
              <Box style={styles.box} size={40} width="100%" bg="white">
                <Text style={styles.boxHeader}>
                  Lunch Break
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex direction="row" style={styles.firstColumn}>
              <Box style={styles.box} size={40} width="100%" bg="white">
                <Text style={styles.boxHeader}>
                  Practice Exams
                </Text>
              </Box>
              <Box  style={styles.box} bg="white" size={40} width="100%">
                <Text style={styles.boxHeader}>
                  Order Supplies
                </Text>
              </Box>
              <Box style={styles.box} size={40} width="100%" bg="white">
                <Text style={styles.boxHeader}>
                  Sales Scripts
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
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
    marginBottom: "1em",
    // width: "100%",
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

export default FourthPage;