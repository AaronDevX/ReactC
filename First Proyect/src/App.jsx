import { useState } from "react";
import {CORE_CONCEPTS, EXAMPLES} from "./data"
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";


function App() {
    const [selectTopic, setSelectTopic] = useState("components");

    function handleSelect(clicked){
        setSelectTopic(clicked);
        console.log(selectTopic);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}/>
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
                <section id="examples">
                    <menu>
                        <TabButton onSelect={()=> handleSelect("components")}>Concepts</TabButton>
                        <TabButton onSelect={()=> handleSelect("jsx")}>JSX</TabButton>
                        <TabButton onSelect={()=> handleSelect("props")}>Props</TabButton>
                        <TabButton onSelect={()=> handleSelect("state")}>State</TabButton>
                    </menu>
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectTopic].title}</h3>
                        <p>{EXAMPLES[selectTopic].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectTopic].code}
                            </code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
