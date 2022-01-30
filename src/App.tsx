import { Provider } from "react-redux";
import store from "./state/Store";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateSheetPage from './modules/spreadsheet/pages/CreateSheetPage';
import EditSheetPage from "./modules/spreadsheet/pages/EditSheetPage";

function App() {
  return (
    <div style={{ height: "100%" }}>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/' element={<CreateSheetPage/>} />
                    <Route path='/:sheetId' element={<EditSheetPage/>} />
                </Routes>
            </Router>
        </Provider>
    </div>
    
  );
}

export default App;
