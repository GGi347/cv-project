import React, { Component } from 'react';

class PersonalDetails extends Component{
    render() {
        const personalDetails = this.props.personalDetails;
        return(
            <form>
                <h1>Personal Details</h1>
                <div className='form-content'>
                    <div className='form-col'>
                        <label>First Name</label>
                        <input name="firstName" value={personalDetails.firstName} onChange={(event) => this.props.updatePersonalDetails(event)}></input>
                    </div>
                    <div className='form-col'>
                        <label>Last Name</label>
                        <input name = "lastName" value={personalDetails.lastName} onChange={(event) => this.props.updatePersonalDetails(event)}></input>
                    </div>
                    <div className='form-col'>
                        <label>Wanted Job Title</label>
                        <input name = "jobTitle" value={personalDetails.jobTitle} onChange={(event) => this.props.updatePersonalDetails(event)}></input>
                    </div>
                    <div className='form-col'>
                        <label>Email Address</label>
                        <input name = "email" value={personalDetails.email} onChange={(event) => this.props.updatePersonalDetails(event)}></input>
                    </div>
                    <div className='form-col'>
                        <label>Phone</label>
                        <input name = "phone" value={personalDetails.phone} onChange={(event) => this.props.updatePersonalDetails(event)}></input>
                    </div>
                    <div className='form-col'>
                        <label>Country</label>
                        <input name = "country" value={personalDetails.country} onChange={(event) => this.props.updatePersonalDetails(event)}></input>
                    </div>
                    <div className='form-col'>
                        <label>City</label>
                        <input name = "city" value={personalDetails.city} onChange={(event) => this.props.updatePersonalDetails(event)}></input>
                    </div>
                </div>
            </form>
        );
    }
}

export default PersonalDetails;