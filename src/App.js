import "fomantic-ui-css/semantic.min.css";

import { ContactContextProvider } from "./store/contact-context";
import ContactTable from "./components/contact-table";
import ContactView from "./components/contact-view";

function App() {
  return (
    <div className="App">
      <ContactContextProvider>
        <ContactView />
        <ContactTable />
      </ContactContextProvider>
    </div>
  );
}

export default App;
