import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './components/navigators/Navigator';
import './App.css'
import {Box, Button, Typography} from '@mui/material';
import { Products } from './components/navigators/Products';
import { BreadProducts } from './components/pages/BreadProducts';
import { Customers } from './components/pages/Customers';
import { DairyProducts } from './components/pages/DairyProducts';
import { Home } from './components/pages/Home';
import { Orders } from './components/pages/Orders';
import { layoutConfig } from './config/layout-config';
import { productsConfig } from './config/products-config';
import { NotFound } from './components/pages/NotFound';

function App() {
//   return <BrowserRouter>
//       <Routes>
//           <Route path='/' element={<Navigator className={layoutConfig.className}
//            routes={layoutConfig.routes}  />}>
//               <Route index element={<Home/>}></Route>
//               <Route path='customers' element={<Customers/>}/>
//               <Route path='orders' element={<Orders/>}></Route>
//               <Route path='products' element={<Navigator
//                className={productsConfig.className} routes={productsConfig.routes}/>}>
//                     <Route path='dairy' element={<DairyProducts/>}/>
//                     <Route path='bread' element={<BreadProducts/>}/>
//               </Route>
//               <Route path="*" element={<NotFound></NotFound>}></Route>
//           </Route>

           
              
//       </Routes>
//   </BrowserRouter>

    return  <Box sx={{width: "50vw", height: "50vh", border:'1px solid red', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
        <Button variant='contained' sx={{height:'35px'}}>Press Me</Button>
        <Typography sx={{fontSize:"1.5em", color:{xs:'black', sm: 'red', lg:'green', md:'grey', xl:'blue'}}}>My text</Typography>
    </Box>


}
export default App;
