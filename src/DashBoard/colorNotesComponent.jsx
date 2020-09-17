import React, { Component } from "react";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";

class BackgroundColorNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleClick = () => {
    console.log("true");
    this.setState({
      open: true,
    });
  };
  render() {
    return (
      <div className="colorMainHeader">
        <ColorLensOutlinedIcon onClick={this.handleClick} />
        {this.state.open ? (
          <div className="colorPopUp">
            <div className="innerColorPopUp">
              {/* <div className="redColorBox">1</div>
              <div className="blueColorBox">2</div>
              <div className="greenColorBox">3</div>
              <div className="yellowColorBox">4</div>
              <div className="purpleColorBox">5</div>
              <div className="violetColorBox">6</div>
              <div className="greyColorBox">7</div>
              <div className="DefaultColorBox">8</div> */}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default BackgroundColorNotes;
