import * as React from 'react';
import type { NextPage } from 'next';
import { Box, Container, Link, Typography } from '@mui/material';

const Home: NextPage = () => {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    MUI v5 + Next.js with TypeScript example
                </Typography>

                <Typography variant="body2" color="text.secondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://vinicius.io">
                        Vinicius Egidio
                    </Link>{' '}
                    {new Date().getFullYear()}.
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
