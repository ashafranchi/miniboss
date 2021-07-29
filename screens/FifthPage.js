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

const FifthPage = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Flex direction="column">
          <Box>
            <Flex direction="row" style={styles.firstColumn}>
              <Box style={styles.box}>
                <Text style={styles.boxHeader}>
                  Contact HQ
                </Text>
              </Box>
              <Box  style={styles.box}>
                <Text style={styles.boxHeader}>
                  Sales Team
                </Text>
              </Box>
              <Box style={styles.box}>
                <Text style={styles.boxHeader}>
                  Field Buddy
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex direction="row" style={styles.firstColumn}>
              <Box style={styles.box}>
                <Text style={styles.boxHeader}>
                  Affirmations
                </Text>
              </Box>
              <Box  style={styles.box}>
                <Text style={styles.boxHeader}>
                  1 Min Vids
                </Text>
              </Box>
              <Box style={styles.box}>
                <Text style={styles.boxHeader}>
                  Lunch Break
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex direction="row" style={styles.firstColumn}>
              <Box style={styles.box}>
                <Text style={styles.boxHeader}>
                  Practice Exams
                </Text>
              </Box>
              <Box  style={styles.box}>
                <Text style={styles.boxHeader}>
                  Order Supplies
                </Text>
              </Box>
              <Box style={styles.box}>
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
    alignItems: "center",
    padding: "2em",
  },
  box: {
    borderRadius: 10,
    height: 200,
    width: 200,
    marginTop: "1em",
    marginBottom: "2em",
    flex: 1,
    backgroundColor: "#E9ECF7",
    alignItems: "center",
  },
  boxHeader: {
    color: "#ADB3D2",
    fontSize: "1em",
  },
});

export default FifthPage;