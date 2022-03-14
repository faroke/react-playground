//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const firstName = 'r0ulito';
const lastName = 'formateur';

function Welcome({f, l}) {
        return <h1>Bonjour, {}</h1>;
}

function toUpper(text){
        return <span className="red-text">{text.toUpperCase()}</span>
}
function fistToUpper(text){
        return <span className="red-text">{text[0].toUpperCase() + text.slice(1)}</span>
}

function Main(){
        return <div>{toUpper(lastName)} {fistToUpper(firstName)}</div>
}



/**
 * 
 * Solution avec bonus
 */

/*
 const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);

 const formatLastName = (value) => value.toUpperCase();
 
 // Solution avec bonus
 const helloWorld = (
   <h1>
     Hello <span>{formatFirstName(firstName)}</span>{" "}
     <span className="red-text">{formatLastName(lastName)}</span>
   </h1>
 );

 */

ReactDOM.render(<Main/>, document.querySelector('#app'));
