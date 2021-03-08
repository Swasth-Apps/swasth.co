import React, {useEffect, useState} from 'react'
import {Link} from "gatsby";
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import graphql_endpoint from '../aws-appsync-url'
import {Button, Form, Input, InputNumber, Modal, Radio} from 'antd';
import {requestDemo} from "../queries";
const RequestDemoModal = props => {
    const [openModal, setOpenModal] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleCloseModal = () => {
        setOpenModal(false);
        props.form.resetFields();
    };

    const send = (e) => {
        e.preventDefault();

        props.form.validateFields((err,values) => {
            if(!err){
                Amplify.configure({
                    API: {
                        graphql_endpoint: graphql_endpoint.RESILIFY,
                    },
                });
                API.graphql(graphqlOperation(requestDemo,{...values,phone: values?.phone_number?.toString()}),{
                    "x-api-key" : graphql_endpoint.API_KEY
                })
                    .then(({ data }) => {
                        setShowSuccess(true)
                    });
            }
        })

    };


    const {getFieldDecorator} = props.form;
    return (
        <>
        <Modal
            className="request-demo-modal"
            visible={openModal}
            onCancel={handleCloseModal}
            footer={null}
        >
            <div className="request-form">
                <div>
                    <p className="request-text base-text" >See what Resiliens can do</p>
                    <p className="info-text para-text" style={{marginTop: 5}}>
                        Are you looking for care?
                        {/*<a className="base-text">Start here</a>*/}
                    </p>
                </div>
                <Form name="control-hooks" onSubmit={send}>
                    <Form.Item label="I am a" className="form-item user-type-label" style={{display: "flex"}}>
                        {getFieldDecorator('user_type', {
                            rules: [{required: false}],
                        })(
                            <Radio.Group>
                                <Radio value={"Client"}>Client / Patient</Radio>
                                <Radio value={"Clinician"}>Clinician</Radio>
                                <Radio value={"Employer"}>Employer</Radio>
                            </Radio.Group>
                        )}
                    </Form.Item>
                <div className="flex-form">
                    <Form.Item className="form-item">
                        {getFieldDecorator('first_name', {
                            rules: [{required: true, message: 'Please input your first name!'}],
                        })(
                            <Input
                                placeholder="First Name"
                                className="request-form-input"
                            />,
                        )}
                    </Form.Item> <Form.Item className="form-item">
                    {getFieldDecorator('last_name', {
                        rules: [{required: true, message: 'Please input your last name!'}],
                    })(
                        <Input
                            placeholder="Last Name"
                            className="request-form-input"
                        />,
                    )}
                </Form.Item> <Form.Item className="form-item">
                    {getFieldDecorator('phone_number', {
                        rules: [{required: true, message: 'Please input your phone!'}],
                    })(
                        <InputNumber
                            placeholder="Phone Number"
                            className="request-form-input"
                        />,
                    )}
                </Form.Item>
                    <Form.Item className="form-item">
                        {getFieldDecorator('email', {
                            rules: [
                                {required: true, message: 'Please input your email!'},
                                {type: "email", message: "Invalidate Email"}
                            ],
                        })(
                            <Input
                                placeholder="Email"
                                className="request-form-input"
                            />,
                        )}
                    </Form.Item>
                </div>
                <Form.Item className="form-item">
                    {getFieldDecorator('message', {
                        rules: [{required: false}],
                    })(
                        <Input.TextArea
                            rows={4}
                            placeholder="How can we help you?"
                            className="request-form-input request-form-textarea"
                        />,
                    )}
                </Form.Item>
                <p className="para-text info-text">
                    By submitting this form, you are agreeing to Resiliens Health's {' '}
                    <Link to="/privacy" className='base-text'>Privacy Policy</Link> and <Link to="/terms"  className="base-text">Terms of Use</Link>.
                </p>
                <Button htmlType="submit" className="request-demo-btn base-text">Request a demo</Button>
                    {showSuccess ?
                    <p className="para-text success-text">
                        <h3 className="base-text"> Thank you for contacting us.</h3>
                        You are very important to us, all information received will always remain confidential. We will contact you as soon as we review your message.
                    </p> : null}
            </Form>
            </div>
        </Modal>
            <Button className={`request-demo-btn ${props.className}`} onClick={() => setOpenModal(true)}>
                {props.children || "Request a demo" }
            </Button>
        </>
    );
};

const WrappedHorizontalLoginForm = Form.create()(RequestDemoModal);
export default WrappedHorizontalLoginForm;
