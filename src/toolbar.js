import React from 'react';
import './toolbar.less';

const Toolbar = (props) => (
  <div className="toolbar">
    <ul>
      <li onClick={props.addSection}><span>&#43;</span>Add section</li>
      <li onClick={props.removeSection}><span>&#8722;</span>Remove section</li>
    </ul>
    <ul>
      <li onClick={props.moveUp}><span>&#8593;</span>Move up</li>
      <li onClick={props.moveDown}><span>&#8595;</span>Move down</li>
    </ul>
    <ul className="layout-icons">
      <li onClick={() => props.splitSection(1)} className="col-1"><span></span></li>
      <li onClick={() => props.splitSection(2)} className="col-2"><span></span><span></span></li>
      <li onClick={() => props.splitSection(3)} className="col-3"><span></span><span></span><span></span></li>
      <li onClick={() => props.splitSection(4)} className="col-1-2"><span></span><span></span></li>
      <li onClick={() => props.splitSection(5)} className="col-2-1"><span></span><span></span></li>
      <li onClick={() => props.splitSection(6)} className="col-1-2-1"><span></span><span></span><span></span></li>
    </ul>
  </div>
);

Toolbar.propTypes = {
  addSection: React.PropTypes.func.isRequired,
  removeSection: React.PropTypes.func.isRequired,
  moveUp: React.PropTypes.func.isRequired,
  moveDown: React.PropTypes.func.isRequired,
  splitSection: React.PropTypes.func.isRequired,
};

export default Toolbar;
