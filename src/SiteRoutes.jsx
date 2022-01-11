import { Routes, Route } from "react-router-dom";

import FunctionHookScreen from "./screens/FunctionHookScreen";
import ClassicClassScreen from "./screens/ClassicClassScreen";
import UseHookScreen from "./screens/UseHookScreen";
import ContextScreen from "./screens/ContextScreen";
import ReducerScreen from "./screens/ReducerScreen";

const SiteRoutes = () => (    
    <Routes>
      <Route path='/' element={ <ClassicClassScreen /> } />
      <Route path='function' element={ <FunctionHookScreen /> } />
      <Route path='hook' element={ <UseHookScreen /> } />
      <Route path='context' element={ <ContextScreen /> } />
      <Route path='reducer' element={ <ReducerScreen /> } />
    </Routes>    
)

export default SiteRoutes