import style from "./style.module.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { coinAction } from "../../store/ducks/criptocoin";

import { Component } from "react";

class Content extends Component {
  state = {
    inputValue: "",
  };

  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    const { coinAction, coin } = this.props;

    const { inputValue } = this.state;

    return (
      <div className={style.contentContainer}>
        <input
          type="text"
          onChange={this.inputChange}
          value={inputValue}
        ></input>
        <button onClick={() => coinAction(inputValue)}>Click me!</button>
        <div className={style.containerPhoto}>
          <img
            className={style.photoTop}
            src="./hexagono-first.svg"
            alt="photo1"
          />
        </div>
        <div className={style.containerCard}>
          <div className={style.cardPrimary}>
            <p>Higor e o Tr Chupam a minha bola</p>
          </div>
          <div className={style.cardSecundary}>
            <p>{coin}</p>
          </div>
        </div>
        <div className={style.containerPhoto}>
          <img
            className={style.photoBottom}
            src="./hexagono-secundary.svg"
            alt="photo2"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  coin: store.coinState.coin,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ coinAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Content);
