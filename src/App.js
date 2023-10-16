import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Perant from './Components/perant/Perant';
import NotFound from './Components/NotFound';
import About from './Components/About/About';
import ContactUs from './Components/Contact/ContactUs';
function App() {
  const routes = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Perant /> },
        { path: "parent", element: <Perant /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <ContactUs /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
