        /*
        <div id="parent">
            <div id="child1">
                <h1>react1</h1>
                <h2>react2</h2>
            </div>
            <div id="child2">
                <h1>react3</h1>
                <h2>react4</h2>
            </div>
        </div>
        how to create this structure using core react*/

        
        
        const parent= React.createElement("div",{id:"parent"},[
            React.createElement("div",{id:"child1"},[
                React.createElement("h1",{},"React1"),React.createElement("h2",{},"React2")]),
                React.createElement("div",{id:"child1"},[
                    React.createElement("h1",{},"React1"),React.createElement("h2",{},"React2")])
            ]);
        



        const rootele= ReactDOM.createRoot(document.getElementById("root"));
        rootele.render(parent);