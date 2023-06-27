import React, { Component } from 'react';
import PersonalDetails from './components/form-component/personal-details';
import {Review, DownloadBtn} from './components/review-component/review';
import './styles/index.css'

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            personalDetails: {
                firstName: "John",
                lastName: "Doe",
                jobTitle: "Software Engineer",
                email: "john@gmail.com",
                phone: "+91-423453211",
                country: "India",
                city: "Delhi"
            }
        }
        this.updatePersonalDetails = this.updatePersonalDetails.bind(this);
    }

    updatePersonalDetails(event){
        const personalDetails = {
            ...this.state.personalDetails,
            [event.target.name] : event.target.value
        };
        this.setState({
           personalDetails
        })
    }
    render(){
        return(
            <div className='container'>
                <div className='form-container'>
                    <PersonalDetails personalDetails={this.state.personalDetails} updatePersonalDetails={this.updatePersonalDetails}/>
                </div>
                <div className='review-container'>
                    <Review personalDetails = {this.state.personalDetails}/>
                    <DownloadBtn/>
                </div>
            </div>
        );
    }
}

export default App;