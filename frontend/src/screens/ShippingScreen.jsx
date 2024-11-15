import { useState } from "react"
import { Form, Button, FormControl } from 'react-bootstrap';
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from "../slices/cartSlice";
import CheckOutSteps from "../components/CheckOutSteps";



const ShippingScreen = () => {

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;


    const [address, setAddress] = useState(shippingAddress?.address || '');
    const [city, setCity ] = useState(shippingAddress?.city || '');
    const [postalCode, setPostalCode ] = useState(shippingAddress?.postalCode || '');
    const [country, setCountry ] = useState(shippingAddress?.country || '');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    

    const submitHandler = (e) =>{
        e.preventDefault();
       dispatch(saveShippingAddress({address, city, postalCode, country}));
       navigate('/payment');
    }
  return (
    <FormContainer>
        <CheckOutSteps step1 step2 />
        <h1>Shipping</h1>
    <Form onSubmit={submitHandler}>
        <Form.Group controlId="address" className="my-2">
            <Form.Label>Address</Form.Label>
            <FormControl
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e)=> setAddress(e.target.value)}
            ></FormControl>
        </Form.Group>
        <Form.Group controlId="city" className="my-2">
            <Form.Label>City</Form.Label>
            <FormControl
                type="text"
                placeholder="Enter City Name"
                value={city}
                onChange={(e)=> setCity(e.target.value)}
            ></FormControl>
        </Form.Group>
        <Form.Group controlId="postalCode" className="my-2">
            <Form.Label>Postal Code</Form.Label>
            <FormControl
                type="number"
                placeholder="Enter Postal Code"
                value={postalCode}
                onChange={(e)=> setPostalCode(e.target.value)}
            ></FormControl>
        </Form.Group>
        <Form.Group controlId="country" className="my-2">
            <Form.Label>Country</Form.Label>
            <FormControl
                type="text"
                placeholder="Enter Country Name"
                value={country}
                onChange={(e)=> setCountry(e.target.value)}
            ></FormControl>
        </Form.Group>
        <Button type="submit" variant="primary" className="my-2">
            Continue
            </Button>
    </Form>
    </FormContainer>
  )
}

export default ShippingScreen