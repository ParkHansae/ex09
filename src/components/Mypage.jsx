import React, { useState, useEffect } from 'react'
import {Row, Col, Form, Button, InputGroup, Card} from 'react-bootstrap'

const Mypage = () => {
    const [form, setForm] = useState({
        name:'무기명',
        phone: '010-0000-0000',
        address: '인천 동구 화수동',
        image: 'https://via.placeholder.com/200x200'
      });
  const  {name, address, phone, image} = form;

  const onChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
}

  const onChangeFile = (e) => {
    setForm({
      ...form,
      image: URL.createObjectURL(e.target.files[0]),
    });
  }

  return (
    <Row className='my-5'>
        <Col>
            <h1 className='text-center mb-5'>회원정보</h1>
            <Card>
                <Form>
                    <InputGroup className='my-2'>
                        <InputGroup.Text className='px-5'>이메일</InputGroup.Text>
                        <Form.Control readOnly
                        value={sessionStorage.getItem('email')}/>
                    </InputGroup>
                    <InputGroup className='my-2'>
                        <InputGroup.Text className='px-5'>이  름</InputGroup.Text>
                        <Form.Control value={name}
                        name="name" onChange={onChange}/>
                    </InputGroup>
                    <InputGroup className='my-2'>
                        <InputGroup.Text className='px-5'>연락처</InputGroup.Text>
                        <Form.Control value={phone}
                        name="phone" onChange={onChange}/>
                    </InputGroup>
                    <InputGroup className='my-2'>
                        <InputGroup.Text className='px-5'>주  소</InputGroup.Text>
                        <Form.Control value={address}
                        name="address" onChange={onChange}/>
                    </InputGroup>
                    <div>
                    <img className='my-2' 
                            src={image} width="25%"/>
                        <Form.Control onChange={onChangeFile}
                            type="file"/>
                    </div>
                    <div className='text-center my-2'>
                        <Button 
                            className='px-5'>정보수정</Button>
                    </div>
                </Form>
            </Card>
        </Col>
    </Row>
  )
}

export default Mypage