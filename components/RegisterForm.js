import React from 'react'

import FullButton from '../components/FullButton';

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isSubmitted: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ isSubmitted: true });
    }
    
    render() {
        const isSubmitted = this.state.isSubmitted;
        let display;

        if (isSubmitted === false) {
            display = <>
                <style jsx>{`
                    .container {
                        display: flex;
                        justify-content: center;
                    }
                `}</style>
                <div className="container">
                    <FullButton clickHandler={this.handleClick}>Notify Me</FullButton>
                </div> 
            </>
        } else {
            display = <>
                <style jsx>{`
                    .container {
                        display: flex;
                        justify-content: center;
                    }

                    h1 {
                        font-family: 'Roboto';
                        font-size: 64px;
                        color: black;
                    }
                `}</style>
                <div className="container">
                    <h1>Submitted!</h1>
                </div>
            </>
        }

        return (
            <div>
                {display}
            </div>
        );
    }
    
}

export default RegisterForm;