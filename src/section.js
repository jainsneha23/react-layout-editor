import React from 'react';
import './section.less';

class Section extends React.Component {

  getMarkUp(className) {
    return <div className={className}>{this.props.children}</div>;
  }

  section1() {
    return (
      <div
        className={`section ${this.props.active? 'active' : ''}`}
        onClick={() => this.props.setActive(this.props.index)}
      >
      {this.getMarkUp()}
      </div>
    );
  }

  section2() {
    return (
      <div
        className={`section ${this.props.active? 'active' : ''} ${this.props.column? 'hasColumn' : ''}`}
        onClick={() => this.props.setActive(this.props.index)}
      >
      {this.getMarkUp('col col-6')}
      {this.getMarkUp('col col-6')}
      </div>
    );
  }

  section3() {
    return (
      <div
        className={`section ${this.props.active? 'active' : ''} ${this.props.column? 'hasColumn' : ''}`}
        onClick={() => this.props.setActive(this.props.index)}
      >
      {this.getMarkUp('col col-4')}
      {this.getMarkUp('col col-4')}
      {this.getMarkUp('col col-4')}
      </div>
    );
  }

  section4() {
    return (
      <div
        className={`section ${this.props.active? 'active' : ''} ${this.props.column? 'hasColumn' : ''}`}
        onClick={() => this.props.setActive(this.props.index)}
      >
      {this.getMarkUp('col col-4')}
      {this.getMarkUp('col col-8')}
      </div>
    );
  }

  section5() {
    return (
      <div
        className={`section ${this.props.active? 'active' : ''} ${this.props.column? 'hasColumn' : ''}`}
        onClick={() => this.props.setActive(this.props.index)}
      >
      {this.getMarkUp('col col-8')}
      {this.getMarkUp('col col-4')}
      </div>
    );
  }

  section6() {
    return (
      <div
        className={`section ${this.props.active? 'active' : ''} ${this.props.column? 'hasColumn' : ''}`}
        onClick={() => this.props.setActive(this.props.index)}
      >
      {this.getMarkUp('col col-3')}
      {this.getMarkUp('col col-6')}
      {this.getMarkUp('col col-3')}
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
  children: React.PropTypes.node.isRequired,
  active: React.PropTypes.bool.isRequired,
  setActive: React.PropTypes.func.isRequired,
  column: React.PropTypes.number.isRequired
};

export default Section;
