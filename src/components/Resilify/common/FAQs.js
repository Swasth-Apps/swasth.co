import React from "react";
import {Collapse} from "antd";

const { Panel } = Collapse;
const FAQs = () => (
    <div className="faqs"

    >
        <h2 className="base-text">Frequently asked questions</h2>
        <p className="base-text title"> General </p>
        <Collapse expandIconPosition="right" accordion bordered={false}>
            <Panel header={<p className="para-medium-text">What is included in a Resiliens membership?</p>} key="1">
                <p className="para-text">MasterClass is the streaming platform that makes it possible for anyone to watch or listen to hundreds of video lessons taught by 100+ of the world’s best.</p>
                <p className="para-text">Whether it be in business and leadership, photography, cooking, writing, acting, music, sports and more, MasterClass delivers a world class online learning experience. Video lessons are available anytime, anywhere on your smartphone, personal computer, Apple TV and FireTV streaming media players.</p>
            </Panel>
            <Panel header={<p className="para-medium-text">What is included in a Resiliens membership?</p>} key="2">
                <p className="para-text">MasterClass is the streaming platform that makes it possible for anyone to watch or listen to hundreds of video lessons taught by 100+ of the world’s best.</p>
                <p className="para-text">Whether it be in business and leadership, photography, cooking, writing, acting, music, sports and more, MasterClass delivers a world class online learning experience. Video lessons are available anytime, anywhere on your smartphone, personal computer, Apple TV and FireTV streaming media players.</p>
            </Panel>
            <Panel header={<p className="para-medium-text">What is included in a Resiliens membership?</p>} key="3">
                <p className="para-text">MasterClass is the streaming platform that makes it possible for anyone to watch or listen to hundreds of video lessons taught by 100+ of the world’s best.</p>
                <p className="para-text">Whether it be in business and leadership, photography, cooking, writing, acting, music, sports and more, MasterClass delivers a world class online learning experience. Video lessons are available anytime, anywhere on your smartphone, personal computer, Apple TV and FireTV streaming media players.</p>
            </Panel>
        </Collapse>
        <p className="base-text title"> Pricing </p>
        <Collapse expandIconPosition="right" accordion bordered={false}>
            <Panel header={<p className="para-medium-text">What is included in a Resiliens membership?</p>} key="1">
                <p className="para-text">MasterClass is the streaming platform that makes it possible for anyone to watch or listen to hundreds of video lessons taught by 100+ of the world’s best.</p>
                <p className="para-text">Whether it be in business and leadership, photography, cooking, writing, acting, music, sports and more, MasterClass delivers a world class online learning experience. Video lessons are available anytime, anywhere on your smartphone, personal computer, Apple TV and FireTV streaming media players.</p>
            </Panel>
            <Panel header={<p className="para-medium-text">What is included in a Resiliens membership?</p>} key="2">
                <p className="para-text">MasterClass is the streaming platform that makes it possible for anyone to watch or listen to hundreds of video lessons taught by 100+ of the world’s best.</p>
                <p className="para-text">Whether it be in business and leadership, photography, cooking, writing, acting, music, sports and more, MasterClass delivers a world class online learning experience. Video lessons are available anytime, anywhere on your smartphone, personal computer, Apple TV and FireTV streaming media players.</p>
            </Panel>
            <Panel header={<p className="para-medium-text">What is included in a Resiliens membership?</p>} key="3">
                <p className="para-text">MasterClass is the streaming platform that makes it possible for anyone to watch or listen to hundreds of video lessons taught by 100+ of the world’s best.</p>
                <p className="para-text">Whether it be in business and leadership, photography, cooking, writing, acting, music, sports and more, MasterClass delivers a world class online learning experience. Video lessons are available anytime, anywhere on your smartphone, personal computer, Apple TV and FireTV streaming media players.</p>
            </Panel>
        </Collapse>
    </div>
);

export default FAQs;
