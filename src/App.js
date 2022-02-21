import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import Logo from "./assets/images/ClutchShots_Logo_Inverted.svg";

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <img src={Logo} />
          <p>Hey {user.attributes.email}, welcome to ClutchShots!</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
