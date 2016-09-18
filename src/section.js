import React from 'react';
import './section.less';

class Section extends React.Component {

  section1() {
    return (
      <div
        className={`section ${this.props.active? 'active' : ''}`}
        onClick={() => this.props.setActive(this.props.index)}
      >
      <span>{this.props.value}</span>
      </div>
    );
  }

  section2() {
    return (
      <div
        className={`section ${this.props.active? 'active' : ''} ${this.props.column? 'hasColumn' : ''}`}
        onClick={() => this.props.setActive(this.props.index)}
      >
      <div className="col col-6"><span>{this.props.value}</span></div>
      <div className="col col-6"><span>{this.props.value}</span></div>
      </div>
    );
  }

  section3() {
    return (
      <div
        className={`section ${this.props.active? 'active' : ''} ${this.props.column? 'hasColumn' : ''}`}
        onClick={() => this.props.setActive(this.props.index)}
      >
      <div className="col col-4"><span>{this.props.value}</span></div>
      <div className="col col-4"><span>{this.props.value}</span></div>
      <div className="col col-4"><span>{this.props.value}</span></div>
      </div>
    );
  }

  section4() {
    return (
      <div
        className={`section ${this.props.active? 'active' : ''} ${this.props.column? 'hasColumn' : ''}`}
        onClick={() => this.props.setActive(this.props.index)}
      >
      <div className="col col-4"><span>{this.props.value}</span></div>
      <div className="col col-8"><span>{this.props.value}</span></div>
      </div>
    );
  }

  section5() {
    return (
      <div
        className={`section ${this.props.active? 'active' : ''} ${this.props.column? 'hasColumn' : ''}`}
        onClick={() => this.props.setActive(this.props.index)}
      >
      <div className="col col-8"><span>{this.props.value}</span></div>
      <div className="col col-4"><span>{this.props.value}</span></div>
      </div>
    );
  }

  section6() {
    return (
      <div
        className={`section ${this.props.active? 'active' : ''} ${this.props.column? 'hasColumn' : ''}`}
        onClick={() => this.props.setActive(this.props.index)}
      >
      <div className="col col-3"><span>{this.props.value}</span></div>
      <div className="col col-6"><span>{this.props.value}</span></div>
      <div className="col col-3"><span>{this.props.value}</span></div>
      </div>
    );
  }

  render() {
    let sectionMarkUp;
    switch (this.props.column) {
    case 1:
      sectionMarkUp = this.section1();
      break;
    case 2:
      sectionMarkUp = this.section2();
      break;
    case 3:
      sectionMarkUp = this.section3();
      break;
    case 4:
      sectionMarkUp = this.section4();
      break;
    case 5:
      sectionMarkUp = this.section5();
      break;
    case 6:
      sectionMarkUp = this.section6();
      break;
    default:
      sectionMarkUp = this.section1();
      break;
    }
    return sectionMarkUp;
  }
}

Section.propTypes = {
  index: React.PropTypes.number.isRequired,
  value: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool.isRequired,
  setActive: React.PropTypes.func.isRequired,
  column: React.PropTypes.number.isRequired
};

export default Section;
