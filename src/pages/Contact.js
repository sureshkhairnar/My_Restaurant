import React from 'react'
import Layout from '../components/Layout/Layout'
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 5,
          '& h4': {
            fontWeight: 'bold',
            mb: 2,
          },
          '& p': {
            mr: 4,
            textIndent: '50px',
            textAlign: 'justify',
          },
          '@media (max-width:600px)': {
            maxWidth: '90%',
            mx: 'auto',
            '& h4': {
              fontSize: '1.5rem',
            },
            '& p': {
              textAlign: 'justify',
              maxWidth: '90%',
              m: 'auto',
            },
          },
        }}
      >
        <Typography sx={{ textAlign: 'center' }} variant="h4">
          Contact My Restaurant
        </Typography>
        <p>
          lorem ipsum dolor sit amet consectetur elit lorem ipsum dolor sit amet
          consectetur elit lorem ipsum dolor sit amet consectetur elit lorem
          ipsum dolor sit amet consectetur elit lorem ipsum dolor sit amet
          consectetur elit lorem ipsum dolor sit amet consectetur elit lorem
          ipsum dolor sit amet consectetur elit lorem ipsum dolor sit amet
          consectetur elit lorem ipsum dolor sit amet consectetur elit lorem
          ipsum dolor sit amet consectetur elit lorem ipsum dolor sit amet
          consectetur elit lorem ipsum dolor sit amet consectetur elit lorem
          ipsum dolor sit amet consectetur elit lorem ipsum dolor sit amet
          consectetur elit lorem ipsum dolor sit amet consectetur elit lorem
          ipsum dolor sit amet consectetur elit.
        </p>
      </Box>
      <Box
        sx={{
          maxWidth: '500px',
          ml: 5,
          mb: 5,
          '@media (max-width:600px)': {
            maxWidth: '80%',
            m: 'auto',
            mb: 5,
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: 'black',
                    color: 'white',
                    fontSize: '18px',
                    '@media (max-width:600px)': {
                      fontSize: 'initial',
                    },
                  }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1, mr: 1 }} />
                  1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: 'skyblue', pt: 1, mr: 1 }} />
                  xyz@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: 'green', pt: 1, mr: 1 }} />
                  1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
