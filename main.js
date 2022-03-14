function UserGreeting(props) {
    return <div>
        <h1>Bienvenue !</h1>
        <DisplayArray/>
    </div>;
  }
  
  function GuestGreeting(props) {
    return <h1>Veuillez vous connecter</h1>;
  }

  function DisplayArray(){
      const [data, setData] = React.useState([]);
      React.useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/users')
              .then((response) => response.json())
              .then((data) => {
                  setData(data);
              })
      }, [])
      const listItems = data.map((item, index) => <li key={index}>{`${item.name} ; ${item.email}, ${item.company.name} ; ${item.phone} ; ${item.website}`}</li>)
      return <ul>{listItems}</ul>
  }


  function Greeting(props) {
      const [isLoggedIn, setIsLoggedIn] = React.useState(false);

      const handleLogIn = (e) => {
          e.preventDefault();
          setIsLoggedIn(true);
      }

      const handleLogOut = (e) => {
          e.preventDefault();
          setIsLoggedIn(false);
      }

    return(
        <React.Fragment>
            {isLoggedIn ? 
            <React.Fragment>
                <UserGreeting />
                <button onClick={handleLogOut}>Se déconnecter</button>
            </React.Fragment> : 
            <React.Fragment>
                <GuestGreeting />
                <button onClick={handleLogIn}>Se connecter</button>
            </React.Fragment> }
        </React.Fragment>
    )
  }
  
  ReactDOM.render(
    <Greeting />,
    document.querySelector('#app')
  );