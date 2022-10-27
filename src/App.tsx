import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddressPage from "./pages/AddressPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";


const App = () => {
  return (
    <>
     <Routes>

       <Route path="/" element={<Layout/>}>

         <Route index element={<HomePage/>}/>
         <Route path="address" element={<AddressPage/>}/>
         <Route path="*" element={<NotFoundPage/>}/>

       </Route>

     </Routes>
    </>
  );
}

export default App;