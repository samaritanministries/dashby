import React from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.min.js'

class CodeToggleJSX extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showCode: false };
    this.toggleCode = this.toggleCode.bind(this);
  }

   toggleCode() {
    this.setState(prevState => ({
      showCode: !prevState.showCode
    }));
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    Prism.plugins.customClass.map({ tag: 'exampletag', });

    return (
      <div className={this.state.showCode ? 'group-open' : ''}>
        <div onClick={this.toggleCode} className={this.state.showCode ? 'code-toggle is-open' : 'code-toggle'}><i className="icon--code"></i></div>
        <pre className={this.state.showCode ? 'language-jsx show' : 'language-jsx'}>
          <code className={this.state.showCode ? 'language-jsx show' : 'language-jsx'}>{this.props.children}</code>
        </pre>
      </div>
    )
  }
}
export default CodeToggleJSX;
