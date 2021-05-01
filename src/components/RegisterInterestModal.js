import React, {useEffect, useState} from 'react'
import {Link} from "gatsby";
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import graphql_endpoint from '../aws-appsync-url'
import {Button, Form, Input, InputNumber, Modal, Radio} from 'antd';
import {registerYourInterest, requestDemo} from "../queries";

const RegisterInterestModal = props => {
    const [openModal, setOpenModal] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCloseModal = () => {
        setOpenModal(false);
        props.form.resetFields();
    };

    useEffect(() => {
        if (showSuccess) {
            let timer = setTimeout(() => setOpenModal(false), 3000);
            return () => {
                clearTimeout(timer)
            }
        }
    }, [showSuccess]);

    const send = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(props)
        props.form.validateFields((err, values) => {
            if (!err) {
                Amplify.configure({
                    API: {
                        graphql_endpoint: graphql_endpoint.COACHING_MARKETING,
                    },
                });
                API.graphql(graphqlOperation(
                    registerYourInterest,
                    {
                        ...values,
                        programSlug: props.programSlug,
                        programId: props.program.id
                    }), {
                    "x-api-key": graphql_endpoint.COACHING_API_KEY
                })
                    .then(() => {
                        setShowSuccess(true)
                        setLoading(false);
                    }).catch(() =>{
                    setLoading(false);
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
                        <p className="request-text base-text">Join our mailing list</p>
                    </div>
                    <Form name="control-hooks" onSubmit={send}>
                        <div className="flex-form">
                            <Form.Item className="form-item" style={{width: "100%",flex:"0 0 100%"}} label="Name">
                                {getFieldDecorator('name', {
                                    rules: [{required: true, message: 'Please input your name!'}],
                                })(
                                    <Input
                                        placeholder="Name"
                                        className="request-form-input"
                                    />,
                                )}
                            </Form.Item>
                        </div>
                        <div className="flex-form">
                        <Form.Item className="form-item" style={{width: "100%",flex:"0 0 100%"}} label="Email">
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
                        {/*
                    <Form.Item label="Are you a mental health professional?" className="form-item user-type-label" style={{display: "flex"}}>
                        {getFieldDecorator('user_type', {
                            rules: [{required: false}],
                        })(
                            <Radio.Group>
                                <Radio value={true}>Yes</Radio>
                                <Radio value={false}>No</Radio>
                            </Radio.Group>
                        )}
                    </Form.Item>*/}
                        <p className="para-text info-text">
                            Clicking subscribe means you agree to our terms & conditions. We may share your information
                            with our partners. View our {' '}
                            <Link to="/privacy" className='base-text'>Privacy Policy</Link> and <Link to="/terms"
                                                                                                      className="base-text">Terms
                            of Use</Link>.
                        </p>
                        <Button htmlType="submit" className="request-demo-btn base-text" loading={loading}>Subscribe</Button>
                        {showSuccess ?
                            <p className="para-text success-text">
                                <h3 className="base-text"> Thank you subscribing.</h3>
                                We will contact you soon.
                            </p> : null}
                    </Form>
                </div>
            </Modal>
            <Button  className={`request-demo-btn ${props.className}`} onClick={() => setOpenModal(true)}>
                {"Register your interest"}
            </Button>
        </>
    );
};

const WrappedHorizontalLoginForm = Form.create()(RegisterInterestModal);
export default WrappedHorizontalLoginForm;
