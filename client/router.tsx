import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import ContactsList from './components/ContactsList.tsx'
//import EditOccupation from './components/EditOccupation.tsx'
//import EditEvent from './components/EditContact.tsx'
//import NewContact from './components/NewContact.tsx'
//import NewOccupation from './components/NewOccupation.tsx'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<ContactsList />} />
    <Route path="/contacts" element={<ContactsList />} />
    {/*<Route path="/contacts/:id/edit" element={<EditEvent />} />
    <Route path="/contacts/add/new" element={<NewContact />} />
    <Route path="/occupations/:id/edit" element={<EditOccupation />} />
    <Route path="/occupations/add/new" element={<NewOccupation />} />*/}
  </Route>,
)

const router = createBrowserRouter(routes)

export default function App() {
  return <RouterProvider router={router} />
}
