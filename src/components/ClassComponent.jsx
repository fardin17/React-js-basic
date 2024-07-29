import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleCounter = () => {
    const { count } = this.state;
    console.log("first", this);
    this.setState({ count: count + 1 });
  };
  componentDidMount() {}

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2> Hello i am Class Component</h2>
        <button onClick={this.handleCounter}>Class Counter</button>
        <p>{count}</p>
      </div>
    );
  }
}

export default ClassComponent;
