import React from "react";

class ClassComponent extends React.Component<{ name: string }> {
    constructor(props: any) {
        super(props)
        console.log('Constructor reached')
    }
    state = {
        name: "Mundo"
    };

    componentDidMount(): void {
        console.log('did mount reached')
    }

    componentDidUpdate(): void {
        console.log('did update reached')
    }

    render(): React.ReactNode {
        console.log('render reached')
        return <div>
            <p>name: { this.state.name }</p>
            <button onClick={() => {
                this.setState({ name: "Júlia" })
            }}>click me</button>
        </div>
    }

}

export default ClassComponent;