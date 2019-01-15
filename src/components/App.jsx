import React from "react";
import Link from "./Link";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        console.log("change");
        // const target = event.target;
        //// const value = event.target.value;
        //// const name = event.target.name;

        this.setState({
            // username: event.target.value,
            // password: event.target.value
            ////[name]: value
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        return (this.state.username === "test") && ( this.state.password === "123") ? console.log("youre logged in") : console.log("invalid user"); 
    }

    render() {
        return (

            <div>
                                                
                <div className="header-base_wrap">
                    <header className="header-base header-base_box">
                        <a className="logo logo_box logo_newell-brands-base"></a>
                        <div className="header-base_title" alt="Website Title">React Shrinkwrap, Login and End to End Testing</div>
                    </header>
                </div>

                <Link />
            
                <form onSubmit={this.handleSubmit} action="#" className="tile tile_box tile_border" style={{'width': '400px', 'margin': 'auto'}}>

                    <div className="input-text_box">
                        <label className="label_text label_box">Username<span className="label_required">*</span></label>
                        <input 
                            id="username"
                            name="username"  
                            type="text"
                            autoFocus
                            username={this.state.username}
                            onChange={this.handleChange} 
                            className="input-text_border input-text_text input-text_theme"
                        />
                    </div>

                    <div className="input-password input-password_box">
                        <label className="label_text label_box">Password <span className="label_required">*</span></label>
                        <input 
                            id="password"
                            name="password"
                            type="password"
                            password={this.state.password}
                            onChange={this.handleChange}
                            className="input-text_border input-text_text input-text_theme"
                        />
                    </div>

                    <button className="button button_box button__center button_theme" type="submit" value="Submit">
                        <span className="button_text button_theme__text">Login</span>
                    </button>

                </form>



                
                
            </div>

        )
    }
}

export default App;
