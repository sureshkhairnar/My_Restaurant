import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          mx: 5,
          textAlign: 'center',
          '& h4': {
            fontWeight: 'bold',
            my: 2,
            fontSize: '2rem',
          },
          '& p': {
            textAlign: 'justify',
            textIndent: '50px',
          },
          '@media (max-width:600px)': {
            '& h4': {
              fontSize: '1.5rem',
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
          lorem ipsum something good news in India lorem ipsum something good
          news in India lorem ipsum something good news in India lorem ipsum
          something good news in India lorem ipsum something good news in India
          lorem ipsum something good news in India lorem ipsum something good
          news in India lorem ipsum something good news in India lorem ipsum
          something good news in India lorem ipsum something good news in India
          lorem ipsum something good news in India lorem ipsum something good
          news in India lorem ipsum something good news in India lorem ipsum
          something good news in India lorem ipsum something good news in India
          lorem ipsum something good news in India lorem ipsum something good
          news in India
        </p>
        <br />
        <p>
          lorem ipsum something good news in India lorem ipsum something good
          news in India lorem ipsum something good news in India lorem ipsum
          something good news in India lorem ipsum something good news in India
          lorem ipsum something good news in India lorem ipsum something good
          news in India lorem ipsum something good news in India lorem ipsum
          something good news in India lorem ipsum something good news in India
          lorem ipsum something good news in India lorem ipsum something good
          news in India lorem ipsum something good news in India lorem ipsum
          something good news in India lorem ipsum something good news in India
        </p>
      </Box>
    </Layout>
  )
}

export default About
