import React from 'react';
import {Product} from '@/types';
import Grid from '@mui/material/Grid2';
import {Card, CardActionArea, CardContent, CardMedia, Rating, Typography} from '@mui/material';
import {useProductsQuery} from '@/mutations/useProductsMutation';
import {Loader} from '@/components';

const Products = () => {
    const {data: products, isLoading, error} = useProductsQuery();
    if (isLoading) return <Loader/>
    if (error) return <div>Ошибка при загрузке продуктов: {error.message}</div>;
    return (
        <Grid container spacing={2}>
            {
                products?.map((product: Product) => (
                    <Grid key={product.id} minHeight={160}
                          size={{xs: 12, sm: 6, md: 4, lg: 3,}}
                          sx={{display: 'flex', justifyContent: 'center', alignItems: 'stretch'}}>
                        <Card sx={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                            <CardActionArea sx={{flex: 1}}>
                                <CardMedia sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 200,
                                }}>
                                    <img
                                        alt="Product image"
                                        src={product.image}
                                        width={200}
                                        height={200}
                                        style={{
                                            objectFit: 'contain',
                                            borderRadius: '8px',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                </CardMedia>
                                <CardContent sx={{flexGrow: 1}}>
                                    <Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.5}
                                            readOnly size="small"/>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography sx={{
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2,
                                        overflow: 'hidden',
                                    }} variant="body2">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    );
};
export default Products;