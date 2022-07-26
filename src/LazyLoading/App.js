import React, { Suspense } from "react";
import Loader from "./suspense/loader";

//npm run build
import "./App.css";

const Tag = React.lazy(() => import("./suspense/Tag"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<Loader />}>
          <Tag val={"hello"} />
        </Suspense>
      </header>
    </div>
  );
}

export default App;

//suspense for data fetching is a new feature ,  so wait for data
// it could be image , script, any assets.
//https://codesandbox.io/s/fragrant-glade-8huj6

// Suspense is passed and will be shown to the user until the component is not loaded up, once the component is loaded
// will be loaded it will show the component value.
