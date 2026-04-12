import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function MyForm (){
    return(
        <Container className="py-4 px-3 mt-5">
            <Form className="mx-auto" style={{ maxWidth: '500px' }}>
                <Form.Group className='mb-3'>
                    <Form.Label className="d-block text-center">Product Name</Form.Label>
                    <Form.Control placeholder="Enter Name"/>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label className="d-block text-center">Product Type</Form.Label>
                    <Form.Select aria-label='Default'>
                        <option>Default</option>
                        <option value="1">Fruit</option>
                        <option value="2">Vegetable</option>
                    </Form.Select>
                </Form.Group>

                <Form.Label className="d-block text-center">Product Cost</Form.Label>
                <InputGroup className='mb-3'>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control placeholder='Enter cost'/>
                </InputGroup>
                <Button variant='primary' type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default MyForm