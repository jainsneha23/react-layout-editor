import React from 'react';
import Section from './section';
import Toolbar from './toolbar';
import './editorpane.less';

class LayoutEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      section: [],
      activeIndex: -1
    };
    this.setActive = this.setActive.bind(this);
    this.addSection = this.addSection.bind(this);
    this.removeSection = this.removeSection.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.splitSection = this.splitSection.bind(this);
  }

  setActive(index) {
    this.setState({activeIndex: index});
  }

  addSection() {
    this.setState({
      section: this.state.section.concat({value: `div${this.state.section.length}`})
    });
  }

  removeSection() {
    this.state.section.splice(this.state.activeIndex, 1);
    this.setState({
      section: this.state.section,
      activeIndex: this.state.section.length === 0 ? -1 : (this.state.activeIndex === 0 ? 0 : this.state.activeIndex - 1)
    });
  }

  moveUp() {
    if(this.state.activeIndex === 0) return;
    const item = this.state.section.splice(this.state.activeIndex, 1)[0];
    this.state.section.splice(this.state.activeIndex - 1, 0, item);
    this.setState({
      section: this.state.section,
      activeIndex: this.state.activeIndex - 1
    });
  }

  moveDown() {
    if(this.state.activeIndex >= this.state.section.length - 1)
      return;
    const item = this.state.section.splice(this.state.activeIndex, 1)[0];
    this.state.section.splice(this.state.activeIndex + 1, 0, item);
    this.setState({
      section: this.state.section,
      activeIndex: this.state.activeIndex + 1
    });
  }

  splitSection(id) {
    const oldState = Object.assign(this.state.section);
    oldState[this.state.activeIndex].column = id;
    this.setState({section: oldState});
  }

  render() {
    return (
      <div className="layout-editor">
        <Toolbar
          addSection={this.addSection}
          removeSection={this.removeSection}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          splitSection={this.splitSection}
          active={this.state.activeIndex !== -1}
        />
        <div className="editor-pane">
          {
            this.state.section.map((section, index) => {
              return (
                <Section
                  key={index}
                  index={index}
                  setActive={this.setActive}
                  column={section.column || 0}
                  active={this.state.activeIndex === index} >
                {this.props.children}</Section>
              );
            })
          }
        </div>
      </div>
    );
  }
}

LayoutEditor.propTypes = {
  children: React.PropTypes.node
};

export default LayoutEditor;
