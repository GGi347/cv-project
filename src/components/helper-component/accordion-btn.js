import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

class AccordionBtn extends Component {
    render() {
        const newList = this.props.educationList.map(item => {
            return (<Accordion.Item eventKey={item.id} key={item.id}>
                <Accordion.Header>{item.schoolName}</Accordion.Header>
                <Accordion.Body>
                    <div class="accordion-body">
                        <div className='form-col'>
                            <label>School</label>
                            <input value={item.schoolName} onChange={(e) => {
                                item.schoolName = e.target.value;
                                this.props.onItemEdited(item)}
                            } ></input>
                        </div>
                        <div className='form-col'>
                            <label>Degree</label>
                            <input value={item.degree} onChange={(e) => {
                                item.degree = e.target.value;
                                this.props.onItemEdited(item)}}
                            ></input>
                        </div>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Start and end date</InputGroup.Text>
                            <input type='date'onChange={(e) => {
                                item.startDate = e.target.value;
                                this.props.onItemEdited(item)}}
                            ></input>
                            <input type='date'onChange={(e) => {
                                item.endDate = e.target.value;
                                this.props.onItemEdited(item)}}
                            ></input>
                        </InputGroup>
                        <div className='form-col'>
                            <label>City</label>
                            <input value={item.city} onChange={(e) => {
                                item.city = e.target.value;
                                this.props.onItemEdited(item)}}
                            ></input>
                        </div>
                        <div className='form-col'>
                            <label>Description</label>
                            <input value={item.description} onChange={(e) => {
                                item.description = e.target.value;
                                this.props.onItemEdited(item)}}
                            ></input>
                        </div>
                        <Button variant="danger">Delete</Button>{' '}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            )
        })
        return (
            <Accordion>
                {newList}
            </Accordion>
        )
    }
}

export default AccordionBtn;

