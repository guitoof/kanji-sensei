/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";
import FlipCard from "react-native-flip-card";
import { cards } from "./data.json";

const { height } = Dimensions.get("window");
const CARD_HEIGHT = 0.8 * height;

const drawCard = cardsDeck => {
  const index = Math.floor(Math.random() * (cards.length - 1) + 1);
  return cardsDeck[index];
};

export default class App extends Component<{}> {
  state = {
    card: drawCard(cards)
  };
  shuffle = () => {
    this.setState({ card: drawCard(cards) });
  };
  render() {
    const { card } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <FlipCard
            flipHorizontal
            flipVertical={false}
            perspective={1000}
            style={styles.flipCard}
          >
            <View style={[styles.card, styles.face]}>
              <Text style={styles.faceText}>{card.face}</Text>
            </View>
            <View style={[styles.card, styles.back]}>
              <Text style={styles.backText}>{card.back}</Text>
            </View>
          </FlipCard>
        </View>
        <View style={styles.footer}>
          <Button
            style={{ fontSize: 42 }}
            title="Next"
            onPress={this.shuffle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  flipCard: {
    height: CARD_HEIGHT,
    borderWidth: 0
  },
  card: {
    height: CARD_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  face: {
    backgroundColor: "#e9eeff"
  },
  back: {
    backgroundColor: "#dadef0"
  },
  faceText: {
    fontSize: 80
  },
  backText: {
    fontSize: 42
  }
});
