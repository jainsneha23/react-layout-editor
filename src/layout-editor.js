import React from 'react';

class LayoutEditor extends React.Component {
  render() {
    return (
      <div className="layout-editor">
        <div className="toolbar">
          <ul>
            <li>Add</li>
            <li>remove</li>
          </ul>
        </div>
        <div className="editor-pane">
        </div>
      </div>
    );
  }
}

export default LayoutEditor;
