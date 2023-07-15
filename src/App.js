import EnvioDeMail from "./Mails/eMail.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnvioDeMail/>}></Route>
          {/* <Route path="/" element={<}></Route>
          <Route path="/" element={<}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


