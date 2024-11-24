import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import ContactsList from './components/ContactsList.tsx'
import EditContact from './components/EditContact.tsx'
import NewContact from './components/NewContact.tsx'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Navigate to="/contacts" replace />} />
    <Route path="/contacts" element={<ContactsList />} />
    <Route path="/contacts/new" element={<NewContact />} />
    <Route path="/contacts/:id/edit" element={<EditContact />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default function App() {
  return <RouterProvider router={router} />
}
