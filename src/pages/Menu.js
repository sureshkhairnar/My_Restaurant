import React from 'react'
import Layout from '../components/Layout/Layout'
import { MenuList } from '../data/data'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map((menu) => (
          <Card
            sx={{
              maxWidth: '300px',
              display: 'flex',
              m: 2,
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              borderTopRightRadius: '20px',
              borderTopLeftRadius: '20px',
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{
                  minHeight: '350px',
                }}
                component={'img'}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  component={'div'}
                  sx={{ fontWeight: 'bold' }}
                >
                  {menu.name}
                </Typography>
                <Typography variant="body1">{menu.description}</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {' '}
                  &#8377; {menu.price}.00/-
                </Typography>
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Order Now
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  )
}

export default Menu
