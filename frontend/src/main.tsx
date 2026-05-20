import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import Layout from './components/layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import DealerEnquiry from './pages/DealerEnquiry'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="dealer-enquiry" element={<DealerEnquiry />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
