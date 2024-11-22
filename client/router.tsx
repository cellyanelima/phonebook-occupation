import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import ContactsList from './components/ContactsList.tsx'



const routes = createRoutesFromElements(
<Route path="/" element={<Layout />}>
  <Route index element={<ContactsList />} />
  <Route path="/contacts" element={<ContactsList />} />
  

</Route>

)
  
const router = createBrowserRouter(routes)

export default function App() {
  return <RouterProvider router={router} />
}