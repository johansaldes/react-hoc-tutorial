import React from 'react';

const withSecret = Component => class extends React.Component {
  state = {
     secret: 'Very53cr37Token'
  }
  setSecret = e => this.setState({
    secret: e.target.value
  })
  render() {
     return (
        <Component secret={this.state.secret} setSecret={this.setSecret} />
     )
  }
}


const App = ({ secret, setSecret }) => (
 <div>
   {secret}
   <input type="text" onChange={setSecret} />
 </div>
);

export default withSecret(App);