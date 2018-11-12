import React from "react";
import auth0 from 'auth0-js';

import { AUTH_CONFIG } from "../config_keys.js";

class App extends React.Component {
      
    constructor(props) {
        super(props);
        this.state = {
            users: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        
        event.preventDefault();

        // return (this.state.username === "test") && ( this.state.password === "123") ? console.log("youre logged in") : console.log("invalid user");

        const url = 'https://digi-con.auth0.com/api/v2/users';

        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                authorization: `Bearer ${AUTH_CONFIG.API_KEY}`
            }
        })
        .then(res => res.json())
        .then(json => {

            
            this.setState({

                users: json

            });
            console.log(json);
            console.log(this.state.users);
        });
    }

    render() {
        return (
            <div>
                
                <div className="header-base_wrap">
                    <header className="header-base header-base_box">
                        <a className="logo logo_box logo_newell-brands-base" />
                        <div className="header-base_title" alt="Website Title">
                            React Shrinkwrap and Login
                        </div>
                    </header>
                </div>

                {/* <Link /> */}

                <form
                    onSubmit={this.handleSubmit}
                    action="#"
                    className="tile tile_box tile_border"
                    style={{ width: "98%", margin: "auto", display: "flex" , flexDirection: "row-reverse"}}
                >
                    

                    <button
                        className="button button_box button__center button_theme"
                        type="submit"
                        value="Submit"
                    >
                        <span className="button_text button_theme__text">
                            Console Users
                        </span>
                    </button>
                </form>
            </div>
        );
    }
}

export default App;
