import React from "react";

export default class App extends React.Component {
  static defaultProps = {
    text: '',
  }

  handleInputText = (e) => {
    e.preventDefault();
    const { dispatch, updateText } = this.props;
    const { target: { value } } = e;
    dispatch(updateText(value))
  }

  handleResetText = (e) => {
    e.preventDefault();
    const { dispatch, resetText } = this.props;
    dispatch(resetText());
  }

  render() {

    const { text } = this.props;

    return (
      <div>
        <form>
          <input type="text" value={text} onChange={this.handleInputText} />
          <button type="button" onClick={this.handleResetText}>Reset</button>
        </form>
        {text && <div>{text}</div>}
      </div>
    )
  }
}
