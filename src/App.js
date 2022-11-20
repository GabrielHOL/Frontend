import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import RecordList from "./components/recordList";
import Cadastro from "./components/cadastro";
import Login from "./components/login";
 
const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/cadastro/" element={<Cadastro />} />
       <Route path="/login" element={<Login />} />
     </Routes>
   </div>
 );
};
 
export default App;