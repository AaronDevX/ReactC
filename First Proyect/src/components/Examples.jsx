import TabButton from "./TabButton";
import {useState} from "react";
import {EXAMPLES} from "../data";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectTopic, setSelectTopic] = useState();
    let topic = <p>Select a Topic</p>

    if(selectTopic){
        topic = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectTopic].title}</h3>
                <p>{EXAMPLES[selectTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectTopic].code}
                    </code>
                </pre>
            </div>
        );
    }
    function handleSelect(clicked) {
        setSelectTopic(clicked);
    }

    return (
        <section id="examples">
            <Tabs
                buttons={
                    <>
                        <TabButton
                            isSelected={selectTopic === "components"}
                            onSelect={() => handleSelect("components")}
                        >Concepts</TabButton>
                        <TabButton
                            isSelected={selectTopic === "jsx"}
                            onSelect={() => handleSelect("jsx")}
                        >JSX</TabButton>
                        <TabButton
                            isSelected={selectTopic === "props"}
                            onSelect={() => handleSelect("props")}
                        >Props</TabButton>
                        <TabButton
                            isSelected={selectTopic === "state"}
                            onSelect={() => handleSelect("state")}
                        >State</TabButton>
                    </>
                }>
                {topic}
            </Tabs>
        </section>
    )
}