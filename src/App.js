import React from 'react';

const withSecret = Component => class extends React.Component {
  state = {
     secret: 'Very53cr37Token'
  }
  render() {
     return (
        <Component secret={this.state.secret} />
     )
  }
}


const App = ({ secret }) => (
 <div>{secret}</div>
);

export default withSecret(App);