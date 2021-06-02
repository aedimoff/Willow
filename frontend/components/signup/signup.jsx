// import React from 'react';

// class Signup extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             email: "",
//             password: ""
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
    
//     handleInput(type) {
//         return (e) => {
//             this.setState({ [type]: e.target.value })
//         };
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.signup(this.state)
//         // .then(() => this.props.history.push('/')); #can use .then to redirect after signup
//     }

//     render () {
//         return (
//             <div className="session-form">
//                 <h2>Sign Up</h2>
//                     <label>Email:
//                         <input type="text"
//                                value={this.state.email}
//                                onChange={this.handleInput('email')} 
//                         />
//                     </label>
//                     <label>Password:
//                         <input type="password"
//                                value={this.state.password} 
//                                onChange={this.handleInput('password')}
//                         />
//                     </label>
//                 <button onClick={this.handleSubmit}>Sign Up</button>
//             </div>
//         )
//     }
// };

// export default Signup;