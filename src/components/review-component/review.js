import React, { Component } from 'react';

class Review extends Component{
    render() {
        const personalDetails = this.props.personalDetails;
        return(
            <div className='cv-template'>
                <h2 className='cv-name'>{personalDetails.firstName} {personalDetails.lastName}</h2>
                <h4 className='cv-title'>{personalDetails.jobTitle}</h4>
                <div className='basic-info'>
                    <p><b>Email:</b> {personalDetails.email}</p>
                    <p><b>Phone:</b> {personalDetails.phone}</p>
                    <p><b>Address:</b> {personalDetails.city}, {personalDetails.country}</p>
                </div>
                
            </div>
        );
    }
}

class DownloadBtn extends Component{
    render() {
        return (
            <button>Download Pdf</button>
        )
        
    }
}

export {
    Review, DownloadBtn,
}