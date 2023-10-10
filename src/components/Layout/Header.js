// import React, { useState } from 'react'
// import {
//   Box,
//   AppBar,
//   Typography,
//   Toolbar,
//   IconButton,
//   Drawer,
//   Divider,
// } from '@mui/material'
// import FastfoodIcon from '@mui/icons-material/Fastfood'
// import { Link } from 'react-router-dom'
// import MenuIcon from '@mui/icons-material/Menu'
// import '../../styles/HeaderStyle.css'
// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false)

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen)
//   }

//   //menu drawer
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography
//         color={'goldenrod'}
//         variant="h6"
//         component="div"
//         sx={{ flexGrow: 1, m: '10px 0px' }}
//       >
//         <FastfoodIcon />
//         My Restaurant
//       </Typography>
//       <Divider />
//       <ul className="mobile-menu">
//         <li>
//           <Link to={'/'}>Home</Link>
//         </li>
//         <li>
//           <Link to={'/menu'}>Menu</Link>
//         </li>
//         <li>
//           <Link to={'/about'}>About</Link>
//         </li>
//         <li>
//           <Link to={'/contact'}>Contact</Link>
//         </li>
//       </ul>
//     </Box>
//   )

//   return (
//     <>
//       <Box>
//         <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: 'none' } }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography
//               color={'goldenrod'}
//               variant="h6"
//               component="div"
//               sx={{ flexGrow: 1 }}
//             >
//               <Link
//                 to={'/'}
//                 style={{ color: 'inherit', textDecoration: 'none' }}
//               >
//                 <FastfoodIcon sx={{ mr: 1 }} />
//                 My Restaurant
//               </Link>
//             </Typography>
//             <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//               <ul className="navigation-menu">
//                 <li>
//                   <Link to={'/'}>Home</Link>
//                 </li>
//                 <li>
//                   <Link to={'/menu'}>Menu</Link>
//                 </li>
//                 <li>
//                   <Link to={'/about'}>About</Link>
//                 </li>
//                 <li>
//                   <Link to={'/contact'}>Contact</Link>
//                 </li>
//               </ul>
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <Box component="nav">
//           <Drawer
//             variant="temporary"
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             sx={{
//               display: { xs: 'block', sm: 'none' },
//               '& .MuiDrawer-paper': {
//                 boxSizing: 'border-box',
//                 width: '240px',
//               },
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Box>
//         <Toolbar />
//       </Box>
//     </>
//   )
// }

// export default Header

import React, { useState } from 'react'
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import '../../styles/HeaderStyle.css'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation() // Get the current location from React Router

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  // Define a function to check if a link is active
  const isLinkActive = (to) => {
    // Compare the current location pathname with the 'to' prop of the Link
    return location.pathname === to
  }

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color={'goldenrod'}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, m: '10px 0px' }}
      >
        <FastfoodIcon sx={{ marginRight: 1 }} />
        Curry Kingdom
      </Typography>
      <Divider />
      <ul className="mobile-menu">
        <li>
          <Link to={'/'} className={isLinkActive('/') ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/menu'} className={isLinkActive('/menu') ? 'active' : ''}>
            Menu
          </Link>
        </li>
        <li>
          <Link
            to={'/about'}
            className={isLinkActive('/about') ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={'/contact'}
            className={isLinkActive('/contact') ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>
    </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={'goldenrod'}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Link
                to={'/'}
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <FastfoodIcon sx={{ mr: 1 }} />
                Curry Kingdom
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={'/'} className={isLinkActive('/') ? 'active' : ''}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/menu'}
                    className={isLinkActive('/menu') ? 'active' : ''}
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/about'}
                    className={isLinkActive('/about') ? 'active' : ''}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/contact'}
                    className={isLinkActive('/contact') ? 'active' : ''}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '240px',
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  )
}

export default Header
