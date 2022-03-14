//const helloWorld = React.createElement('h1', {}, 'Hello world!');
const lastName = 'faussette';
const firstName = 'yann';
const helloWorld = <h1>Hello world!</h1>;

function returnToUp(f, l) {
        return `${l} ${f}`.toUpperCase()
}

const displayName = <span className="maclass">{returnToUp(firstName, lastName)}</span>;

//ReactDOM.render(helloWorld, document.querySelector('#app'));
ReactDOM.render(displayName, document.querySelector('#app'));
