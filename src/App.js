import React, { Component } from 'react';
import chars from './chars.json';
import Wrapper from './components/wrapper/wrapper';
import Nav from './components/nav/nav';
import Header from './components/header/header';
import ImgCard from './components/imgCard/imgCard';
import Footer from './components/footer/footer';

function randomChars(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    msg: 'Click any character to begin',
    score: 0,
    highScore: 0,
    chars: chars,
    selected: []
  }

  shuffleChars = () => {
    let shuffled = randomChars(chars);
    this.setState({chars: shuffled});
  }

  handleClick = name => {
    if (this.state.selected.indexOf(name) === -1) {
      this.increment();
      this.setState({ selected: [...this.state.selected, name] });
    } else {
      this.reset();
    }
  }

  increment = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      msg: 'You guessed correctly!'
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ msg: "You win!" });
    }
    this.shuffleChars();
  };

  reset = () => {
    this.setState({
      msg: 'You guessed incorrectly!',
      score: 0,
      highScore: this.state.highScore,
      selected: []
    });
    this.shuffleChars();
  }

  render() {
    return (
      <Wrapper>
        <Nav 
          msg={this.state.msg}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Header />
        <div className="container">
        {
          this.state.chars.map(char => (
            <ImgCard 
              key={char.name}
              name={char.name}
              img_url={char.img_url}
              shuffleChars={this.shuffleChars}
              handleClick={this.handleClick}
              increment={this.increment}
              reset={this.reset}
            />
          ))
        }
        </div>
        <Footer />
      </Wrapper>
    )
  }
}

export default App;
