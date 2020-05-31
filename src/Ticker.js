import React from 'react';
import './Card.css';
import {Grid ,Card, CardContent, Typography } from "@material-ui/core";

const Ticker = ({name,product_id ,best_ask , best_bid, high_24h, low_24h, open_24h, price}) =>{
    
    return (
        <Grid item component={Card}  xs={12} md={3}>
        <CardContent>
        <Typography variant="h4">{name}:({product_id})</Typography>
            
            <ul>
                <li className="Price">Price: ${price}</li>
                <li>Best ask:  {best_ask}</li>
                <li>Best Bid:  {best_bid}</li>
                <li>High 24h:  {high_24h}</li>
                <li>Low 24h:   {low_24h}</li>
                <li>Open 24h:  {open_24h}</li>
            </ul>
        </CardContent>
        </Grid>
        
    );
}

export default Ticker;