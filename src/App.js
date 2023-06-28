import React, { Component } from 'react';
import PersonalDetails from './components/form-component/personal-details';
import {Review, DownloadBtn} from './components/review-component/review';
import './styles/index.css'
import Education from './components/form-component/education';
import uniqid from "uniqid";

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
            },

            educationList: [
                {
                    id: uniqid(),
                    schoolName: "MIT",
                    degree: "Bachelors",
                    startDate: new Date() ,
                    description: "About School",
                    city: " city",
                },

                {
                    id: uniqid(),
                    schoolName: "Greenfield School",
                    degree: "ISC",
                    startDate: new Date() ,
                    description: "About School",
                    city: " city",
                },
            ] 
        }
        this.updatePersonalDetails = this.updatePersonalDetails.bind(this);
        this.UpdateToEducationList = this.UpdateToEducationList.bind(this);
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

    UpdateToEducationList(editedItem){
        const newList = this.state.educationList.map(item => {
            if(item.id === editedItem.id){
                return editedItem;
                
            }
            return item;
        })
        this.setState({
            educationList : newList
        })
    }

    render(){
        return(
            <div className='main-container'>
                <div className='form-container'>
                    <PersonalDetails personalDetails={this.state.personalDetails} updatePersonalDetails={this.updatePersonalDetails}/>
                    <Education educationList= {this.state.educationList} UpdateToEducationList = {this.UpdateToEducationList}/>
                </div>
                <div className='review-container'>
                    <Review personalDetails = {this.state.personalDetails} educationList = {this.state.educationList}/>
                    <DownloadBtn/>
                </div>
            </div>
        );
    }
}

export default App;