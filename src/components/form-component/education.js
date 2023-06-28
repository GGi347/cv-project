import React, { Component } from 'react';
import '../../styles/education.css'
import AccordionBtn from '../helper-component/accordion-btn';


class Education extends Component{
   
    render() {
        const educationList = this.props.educationList;
        return(
            <div className='education-container'>
                <h1 className='form-header'>Education</h1>
                <AccordionBtn educationList={educationList} onItemEdited={this.props.UpdateToEducationList}/>
            </div>
           
    
        );
    }
}

export default Education;