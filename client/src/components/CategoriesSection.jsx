import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const CategoriesSection = () => {

   const [categories, setCategories] = useState([]);

  const fetchCategories = async() => {
    try {
      const response = await axios.get("http://localhost:2000/getcategories");
      setCategories(response.data);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  return (
    <>
      <div className='categories-section'>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: "45px", flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {categories.map((category) => (
              <ImageButton
                focusRipple
                key={category.id}
                style={{
                  width: 300
                }}
              >
                <ImageSrc style={{ backgroundImage: `url(http://localhost:2000/uploads/${category.category_image})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={(theme) => ({
                      position: 'relative',
                      p: 4,
                      pt: 2,
                      pb: `calc(${theme.spacing(1)} + 6px)`,
                      fontWeight: "bold",
                      fontSize: "25px",
                      fontFamily: "Poppins"
                    })}
                  >
                    {category.category_name}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            ))}
          </Box>

      </div>
    </>
  )
}

export default CategoriesSection
