import React, { Component } from "react";
import PropTypes from "prop-types";

// const MyComponent = ({ name, children }) => {
//   return (
//     <div>
//       {name}
//       {children}
//     </div>
//   );
// };

class MyComponent extends Component {
  render() {
    const { name, children } = this.props;
    return (
      <div>
        {name}
        {children}
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본",
};

MyComponent.propsType = {
  name: PropTypes.string,
};

export default MyComponent;
