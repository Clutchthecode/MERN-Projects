import React from 'react';

const Footer=({length})=>{
   console.log("length",length);
    return (
        <footer className='footer'>
        {length} List {(length==1)? "item":"items"}
        </footer>
    );
}

export default Footer;