import { Entypo } from '@expo/vector-icons';
import { Button } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const newGameState = {
  // button array
  itemArray: new Array(9).fill('empty'),
  xIsNext: true,
  isCross: false,
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = newGameState;
  }

  drawItem = (itemNumber) => {
    // decide what to draw: circle or cross or default
    if (this.state.itemArray[itemNumber] === 'empty') {
      this.state.itemArray[itemNumber] = this.state.isCross;
      this.setState({ isCross: !this.state.itemArray[itemNumber] });
    }

    // check for win
    this.winGame();
  };

  displayTurn = () => {
    // display who's turn it is
    return this.state.xIsNext ? 'X' : 'O';
  };

  chooseItemIcon = (itemNumber) => {
    // choose appropriate icon
    if (this.state.itemArray[itemNumber] !== 'empty') {
      return this.state.itemArray[itemNumber] ? 'cross' : 'circle';
    }
    return 'pencil';
  };

  chooseItemColor = (itemNumber) => {
    // choose color for icon
    if (this.state.itemArray[itemNumber] !== 'empty') {
      return this.state.itemArray[itemNumber] ? 'blue' : 'pink';
    }
    return 'black';
  };

  resetGame = () => {
    // reset all values and states
    this.state.itemArray.fill('empty');
    this.setState({ winMessage: '' });
    // force update to the componenet
    this.forceUpdate();
  };

  winGame = () => {
    // check for winner
    if (
      this.state.itemArray[0] !== 'empty' &&
      this.state.itemArray[0] == this.state.itemArray[1] &&
      this.state.itemArray[1] == this.state.itemArray[2]
    ) {
      this.setState({
        winMessage: (this.state.itemArray[0] ? 'Cross' : 'Circle').concat(
          ' wins!'
        ),
      });
    } else if (
      this.state.itemArray[3] !== 'empty' &&
      this.state.itemArray[3] == this.state.itemArray[4] &&
      this.state.itemArray[4] == this.state.itemArray[5]
    ) {
      this.setState({
        winMessage: (this.state.itemArray[0] ? 'Cross' : 'Circle').concat(
          ' wins!'
        ),
      });
    } else if (
      this.state.itemArray[6] !== 'empty' &&
      this.state.itemArray[6] == this.state.itemArray[7] &&
      this.state.itemArray[7] == this.state.itemArray[8]
    ) {
      this.setState({
        winMessage: (this.state.itemArray[6] ? 'Cross' : 'Circle').concat(
          ' wins!'
        ),
      });
    } else if (
      this.state.itemArray[0] !== 'empty' &&
      this.state.itemArray[0] == this.state.itemArray[3] &&
      this.state.itemArray[3] == this.state.itemArray[6]
    ) {
      this.setState({
        winMessage: (this.state.itemArray[0] ? 'Cross' : 'Circle').concat(
          ' wins!'
        ),
      });
    } else if (
      this.state.itemArray[1] !== 'empty' &&
      this.state.itemArray[1] == this.state.itemArray[4] &&
      this.state.itemArray[4] == this.state.itemArray[7]
    ) {
      this.setState({
        winMessage: (this.state.itemArray[1] ? 'Cross' : 'Circle').concat(
          ' wins!'
        ),
      });
    } else if (
      this.state.itemArray[2] !== 'empty' &&
      this.state.itemArray[2] == this.state.itemArray[5] &&
      this.state.itemArray[5] == this.state.itemArray[8]
    ) {
      this.setState({
        winMessage: (this.state.itemArray[2] ? 'Cross' : 'Circle').concat(
          ' wins!'
        ),
      });
    } else if (
      this.state.itemArray[0] !== 'empty' &&
      this.state.itemArray[0] == this.state.itemArray[4] &&
      this.state.itemArray[4] == this.state.itemArray[8]
    ) {
      this.setState({
        winMessage: (this.state.itemArray[0] ? 'Cross' : 'Circle').concat(
          ' wins!'
        ),
      });
    } else if (
      this.state.itemArray[2] !== 'empty' &&
      this.state.itemArray[2] == this.state.itemArray[4] &&
      this.state.itemArray[4] == this.state.itemArray[6]
    ) {
      this.setState({
        winMessage: (this.state.itemArray[2] ? 'Cross' : 'Circle').concat(
          ' wins!'
        ),
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(0)}>
                <Entypo
                  name={this.chooseItemIcon(0)}
                  size={50}
                  color={this.chooseItemColor(0)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(1)}>
                <Entypo
                  name={this.chooseItemIcon(1)}
                  size={50}
                  color={this.chooseItemColor(1)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(2)}>
                <Entypo
                  name={this.chooseItemIcon(2)}
                  size={50}
                  color={this.chooseItemColor(2)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(3)}>
                <Entypo
                  name={this.chooseItemIcon(3)}
                  size={50}
                  color={this.chooseItemColor(3)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(4)}>
                <Entypo
                  name={this.chooseItemIcon(4)}
                  size={50}
                  color={this.chooseItemColor(4)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(5)}>
                <Entypo
                  name={this.chooseItemIcon(5)}
                  size={50}
                  color={this.chooseItemColor(5)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(6)}>
                <Entypo
                  name={this.chooseItemIcon(6)}
                  size={50}
                  color={this.chooseItemColor(6)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(7)}>
                <Entypo
                  name={this.chooseItemIcon(7)}
                  size={50}
                  color={this.chooseItemColor(7)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(8)}>
                <Entypo
                  name={this.chooseItemIcon(8)}
                  size={50}
                  color={this.chooseItemColor(8)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.winMessage}>{this.state.winMessage}</Text>
        <Button
          full
          rounded
          primary
          style={styles.button}
          onPress={() => this.resetGame()}
        >
          <Text style={styles.buttonText}>Reset Game</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 30,
  },
  winMessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    margin: 20,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
