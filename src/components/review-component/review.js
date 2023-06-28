import React, { Component } from 'react';
import '../../styles/review.css'

class Review extends Component{
    render() {
        const personalDetails = this.props.personalDetails;
        const educationList = this.props.educationList;
        
        const educationListEle = educationList.map(element => {
           return(
          <li key={element.id}>
                <p>{element.SchoolName}</p>
            </li>
           );
        });
        console.log(educationListEle)
        return(
            
            <div className='cv-template'>
                <h2 className='cv-name'>{personalDetails.firstName} {personalDetails.lastName}</h2>
                <h4 className='cv-title'>{personalDetails.jobTitle}</h4>
                <div className='basic-info'>
                    <p><b>Email:</b> {personalDetails.email}</p>
                    <p><b>Phone:</b> {personalDetails.phone}</p>
                    <p><b>Address:</b> {personalDetails.city}, {personalDetails.country}</p>
                </div>

                <div className='education-info'>
                    <h2>Education</h2>
                    <ul>{educationListEle}</ul>
                </div>
                
            </div>
        );
    }
}

class DownloadBtn extends Component{
    render() {
        return (
            <button className='download-btn'>Download Pdf</button>
        )
        
    }
}

export {
    Review, DownloadBtn,
}