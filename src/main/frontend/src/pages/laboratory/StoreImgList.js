import React from 'react';
import './StoreImgList.css'; // 스타일 파일을 import 해주세요.

class StoreImgList extends React.Component {
  state = {
    slideSpot: 0,
  };

  imgQuantity = this.props.imagesData.length;
  slideWidth =
    IMG_WIDTH * this.imgQuantity + (this.imgQuantity - 1) * SLIDE_GAP;
  hiddenedSlideWidth = this.slideWidth - window.innerWidth;
  slideEnd;

  handlePrevBtn = () => {
    const { slideSpot } = this.state;

    if (Math.abs(slideSpot) < SLIDE_MOVING_UNIT) {
      this.setState({
        slideSpot: 0,
      });
    } else {
      this.setState({
        slideSpot: slideSpot + SLIDE_MOVING_UNIT,
      });
    }
  };

  handleNextBtn = () => {
    const { slideSpot } = this.state;

    if (this.hiddenedSlideWidth - Math.abs(slideSpot) < SLIDE_MOVING_UNIT) {
      this.setState({
        slideSpot: slideSpot - (this.hiddenedSlideWidth - Math.abs(slideSpot)),
      });
      this.slideEnd =
        slideSpot - (this.hiddenedSlideWidth - Math.abs(slideSpot));
    } else {
      this.setState({
        slideSpot: slideSpot - SLIDE_MOVING_UNIT,
      });
    }
  };

  render() {
    const { slideSpot } = this.state;
    const { imagesData } = this.props;

    return (
      <div className="storeImgBox">
        {!!slideSpot && (
          <button onClick={this.handlePrevBtn} className="slideArrow arrowLeft">
            <i className="fas fa-chevron-left"></i>
          </button>
        )}
        <ul className="storeImgUl">
          <div
            style={{ transform: `translateX(${slideSpot}px)` }}
            className="slideInner"
          >
            {imagesData.map((img, i) => (
              <li key={i} className="storeImgLi">
                <img src={require(`../../assets/${img}`)} alt={`Image ${i}`} />
              </li>
            ))}
          </div>
        </ul>
        {slideSpot !== this.slideEnd && (
          <button
            onClick={this.handleNextBtn}
            className="slideArrow arrowRight"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        )}
      </div>
    );
  }
}

const SLIDE_GAP = 14;
const SLIDE_MOVING_UNIT = 500;
const IMG_WIDTH = 400;

export default StoreImgList;
