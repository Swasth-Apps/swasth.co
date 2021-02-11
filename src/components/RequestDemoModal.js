import React, {useEffect, useState} from 'react'
import {Link} from "gatsby"
import {Button, Form, Input, InputNumber, Modal, Radio} from 'antd';
import axios from 'axios';
const RequestDemoModal = props => {
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        if (props.modal) {
            setOpenModal(true)
        }
    }, [props.modal]);

    const handleCloseModal = () => {
        setOpenModal(false);
        props.form.resetFields();
        props.onClose()
    };

    const send = (e) => {
        e.preventDefault();

        props.form.validateFields((err,values) => {
            if(!err){
                axios.post('/.netlify/functions/ses-send-email', {
                   ...values
                }).then((res) => {
                    console.log(res)
                })
            }
        })

    };


    const {getFieldDecorator} = props.form;
    return (
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
                    <Form.Item label="I am a" className="form-item" style={{display: "flex"}}>
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
                <Button htmlType="submit" className="request-demo-btn base-text">Request a Demo</Button>
            </Form>
            </div>
        </Modal>
    );
};

const WrappedHorizontalLoginForm = Form.create()(RequestDemoModal);
export default WrappedHorizontalLoginForm;
