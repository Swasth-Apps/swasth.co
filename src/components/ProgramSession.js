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

    return (
        <div className="program-sessions" id="faqs">

            <p className="program-sessions-text base-text">What's in the program?</p>

            <Collapse expandIconPosition="right" accordion bordered={false} className="coaching-program-collapsible">
                {getSessionByModule()?.map((item, i) => item && Object.values(item)?.map((sessions) =>

                    <Panel header={<p className="para-text">{sessions?.[0]?.module}</p>} key={i}>
                        <div className="coaching-landing-page-tab coaching-program-collapse">
                            {sessions?.filter(({type}) => type !== "TASK")?.map((s,index) =>
                                <div className="sessions-section">
                                    <p className="session-sequence para-text">
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
                    </Panel>
                ))}
            </Collapse>

        </div>
    )
}

export default ProgramSession;
