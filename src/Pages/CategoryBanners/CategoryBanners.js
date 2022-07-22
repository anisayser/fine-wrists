import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import catImg1 from '../../images/img1-top-mirora1.jpg'
import catImg2 from '../../images/img2-top-mirora1.jpg'
import catImg3 from '../../images/img3-top-mirora1.jpg'

const CategoryBanners = () => {
    return (
        <Box className='py-20 border-b border-[#2f2f2f]'>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Box className='text-left text-white relative'>
                            <Box className='absolute bottom-0 px-5 pb-2'>
                                <Typography variant='subtitle1'>Design Creative</Typography>
                                <Typography variant='h4' color='primary'>Mordern & Clean</Typography>
                                <Typography variant='subtitle1'>From $60.99 - Sale 20%</Typography>
                            </Box>
                            <Box className=''>
                                <img className='w-full h-full rounded-md' src={catImg1} alt="" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box className='text-left text-white relative'>
                            <Box className='absolute bottom-0 px-5 pb-2'>
                                <Typography variant='subtitle1'>Design Creative</Typography>
                                <Typography variant='h4' color='primary'>Mordern & Clean</Typography>
                                <Typography variant='subtitle1'>From $60.99 - Sale 20%</Typography>
                            </Box>
                            <Box className=''>
                                <img className='w-full h-full rounded-md' src={catImg2} alt="" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box className='text-left text-white relative'>
                            <Box className='absolute bottom-0 px-5 pb-2'>
                                <Typography variant='subtitle1'>Design Creative</Typography>
                                <Typography variant='h4' color='primary'>Mordern & Clean</Typography>
                                <Typography variant='subtitle1'>From $60.99 - Sale 20%</Typography>
                            </Box>
                            <Box className=''>
                                <img className='w-full h-full rounded-md' src={catImg3} alt="" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CategoryBanners;