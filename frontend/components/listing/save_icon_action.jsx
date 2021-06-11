import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';


const SaveIcon = () => {
    const saveIcon = () => {
        if(saves.listing_id.includes(listing.id)) {
            return <AiFillHeart />
        } else {
            return <AiOutlineHeart />
        }
    }

};