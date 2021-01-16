import React, {useEffect, useState} from 'react'
import {Button, Form, Input, InputNumber, Modal} from 'antd';

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
                    <p className="request-text base-text" >See what Resiliens can do for your workforce</p>
                    <p className="info-text para-text" style={{marginTop: 5}}>
                        Are you an employee looking for care? <a className="base-text">Start here</a>
                    </p>
                </div>
                <Form name="control-hooks" onSubmit={() => console.log()}>
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
                        {getFieldDecorator('email_name', {
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
                    {getFieldDecorator('help', {
                        rules: [{required: false}],
                    })(
                        <Input
                            placeholder="How can we help you?"
                            className="request-form-input"
                        />,
                    )}
                </Form.Item>
                <p className="para-text info-text">
                    By submitting this form, you are agreeing to Resiliens Health's {' '}
                    <a href="/" className='base-text'>Privacy Policy</a> and <a href="/" className="base-text">Terms of Use</a>.
                </p>
                <Button className="request-demo-btn base-text">Request a Demo</Button>
            </Form>
            </div>
        </Modal>
    );
};

const WrappedHorizontalLoginForm = Form.create()(RequestDemoModal);
export default WrappedHorizontalLoginForm;
