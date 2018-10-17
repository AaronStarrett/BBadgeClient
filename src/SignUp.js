import React from 'react';
//use .post ... class Component!!!.. daddy component!
import AuthForm from '../AuthFormhForm'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        console.log(this.state)
        e.preventDefault()
    };
    render() {
        return (
            <div>
                <AuthForm
                    formName="SignUp"
                    changeInput={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <h6><button onClick={this.props.toggleForm}>CLICK</button> If you already have an account.</h6>
            </div>
        )
    }
}


export default SignUp;