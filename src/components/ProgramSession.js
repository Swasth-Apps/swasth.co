import React from "react";
import {Collapse, Empty, Tabs} from "antd";

const {Panel} = Collapse;
const {TabPane} = Tabs;
const ProgramSession = (props) => {

    const getSessionByModule = () => {
        const {program} = props;
        const data = program?.sessions?.filter(({type}) => type !== "TASK")?.reduce(function (r, a) {
            const module = a.module;
            r[module] = r[module] || [];
            r[module].push(a);
            return r;
        }, Object.create(null));
        return data && Object.entries(data)?.map(([key, values]) => ({
            [key]: values?.sort((c, d) => {
                return c.relativeDays - d.relativeDays
            }, 0)
        }))
    };

    const getRelativePeriod = (period) => {
        switch (period) {
            case "DAYS" :
                return "Day ";
            case "WEEKS" :
                return "Week ";
            case "MONTHS" :
                return "MONTH ";
            default :
                return ""
        }
    };
    return (
        <div className="program-sessions" id="faqs">

            <p className="program-sessions-text base-text">What's in the program?</p>

            <Collapse expandIconPosition="right" accordion bordered={false}>
                {getSessionByModule()?.map((item, i) => item && Object.values(item)?.map((sessions) =>

                    <Panel header={<p className="para-text">{sessions?.[0]?.module}</p>} key={i}>
                        <Tabs defaultActiveKey="1" className="coaching-landing-page-tab">
                            <TabPane tab="Video Sessions" key="1">
                                <div className="sessions-container">
                                    {sessions?.filter(({type}) => type !== "TASK")?.map((s,index) =>
                                        <div className="sessions-section">
                                            <p className="session-desc para-text">
                                                {`Session ${index + 1}`}
                                            </p>
                                            <p className="session-title para-text">
                                                {s.name}
                                            </p>
                                            {s.description ?
                                                <p className="session-desc para-text">
                                                    {s.description}
                                                </p> : null}
                                        </div>)}
                                </div>
                            </TabPane>
                            <TabPane tab="Activities" key="2">
                                <div className="sessions-container">
                                    {sessions?.filter(({type}) => type === "TASK")?.map((s, index) =>
                                        <div className="sessions-section">
                                            <p className="session-desc para-text">
                                                {`Activity ${index + 1}`}
                                            </p>
                                            <p className="session-title para-text">
                                                {s.name}
                                            </p>
                                            {s.description ?
                                                <p className="session-desc para-text">
                                                    {s.description}
                                                </p> : null}
                                        </div>)}
                                    {sessions?.filter(({type}) => type === "TASK")?.length ? "" :
                                        <div style={{textAlign: "center", width: "100%"}}> <Empty description="No any activity has been assigned to this program."/></div>}
                                </div>
                            </TabPane>
                        </Tabs>
                    </Panel>
                ))}
            </Collapse>

        </div>
    )
}

export default ProgramSession;
