<!-- var React = require('react');
var PropTypes = require('prop-types');
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            Password: ""
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.HandleLogin = this.HandleLogin.bind(this);
    };
    handleOnChange(e) {
        console.log(e.currentTarget);
        if (e.currentTarget.id == "Password") {
            this.setState({
                Password: e.currentTarget.value
            });
        } else {
            this.setState({
                Username: e.currentTarget.value
            });
        }
    }
    HandleLogin() {
        var { Username, Password } = this.state;
        if (Username.trim() == '' || Password.trim() == '') {
            alert('Check inputs');
            return;
        }
        var erRequest = {
            Username: Username,
            Password: Password
        }
        fetch("/Remote/LoginTest", {
            body: JSON.stringify(erRequest),
            method: "POST",
            credentials: "same-origin",
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json; charset=utf-8'
            },
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result == "true")
                        alert('Logged in!');
                    else
                        alert("Invalid Login");
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log('Error:');
                    console.log(error);
                }
            )
    }
    render() {
        return (
            <p>
                <div>
                    Username: &nbsp;&nbsp;
                    <input id="UserName" type="text" class="input-text_text input-text_border input-text_theme" onChange={this.handleOnChange} />
                </div>
                <div>
                    Password: &nbsp;&nbsp;
                    <input id="Password" type="password" class="input-text_text input-text_border input-text_theme" onChange={this.handleOnChange} />
                </div>
                <div>
                    <input type="button" value="Submit" class="button_text button_theme__text" onClick={this.HandleLogin} />
                </div>
            </p>
        );
    };
};
module.exports = Login; -->
