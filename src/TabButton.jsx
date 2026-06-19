export function consoleprint(value){
    console.log("console button clicked ");
    alert("Hello Jaimin"+value);
}

export default function TabButton(props){
    return (
        <><button onClick={props.onclick}>{props.children}</button></>
    );
}
