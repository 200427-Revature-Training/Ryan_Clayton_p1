import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Modal, Button, Form } from 'react-bootstrap';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import './modal.css'




interface ModalProps {
    state: boolean
    setter: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalComponent: React.FC<ModalProps> = (props) => {
    const [type, setType] = useState('');
    const [value, setValue] = useState('');
    const [description, setDescription]= useState('');

    const handleSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
        setType(event.target.value as string);
    };
    const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const handleDescription =(event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    return (
        <div>
        <Modal
            size="lg"
            show={props.state}
            onHide={() => props.setter(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    New Reimbursement Request
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl >
                    <Form.Label>Request Type</Form.Label>
                        <Select
                            className='removeMargin'
                            value={type}
                            onChange={handleSelect}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>Type</MenuItem>
                            <MenuItem value={'Lodging'}>Lodging</MenuItem>
                            <MenuItem value={'Travel'}>Travel</MenuItem>
                            <MenuItem value={'Food'}>Food</MenuItem>
                            <MenuItem value={'Other'}>Other</MenuItem>

                        </Select>
                    </FormControl>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Request Description</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={handleDescription}/>
                    </Form.Group>
                    <Form.Label>Request Amount</Form.Label>
                    <FormControl fullWidth >
                        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={value}
                            onChange={handleValue}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-dark" onClick={() => props.setter(false)}>Close</Button>
                <Button className="btn btn-dark">Submit</Button>


            </Modal.Footer>
        </Modal>
        </div>
    )
}
