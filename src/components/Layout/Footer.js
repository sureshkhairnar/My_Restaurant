import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: 'center', bgcolor: '#1a1a19', color: 'white', p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            '& svg': {
              fontSize: '40px',
              cursor: 'pointer',
              marginRight: 2,
            },
            '& svg:hover': {
              color: 'goldenrod',
              transform: 'translateX(5px)',
              transition: 'all 400ms',
            },
          }}
        >
          {/* icons */}
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <GitHubIcon />
        </Box>
        <Typography
          sx={{
            '@media(max-width:600px)': {
              fontSize: '1rem',
            },
          }}
        >
          All Rights Reserved &copy; Spark IT
        </Typography>
      </Box>
    </>
  )
}

export default Footer
