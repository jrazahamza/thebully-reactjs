import React, { useEffect, useState } from 'react'

function Bullies() {
   
  return (
    <>
        {/* {bullies.map((bully, index)=>{ */}

        <div class="dog-list-col">    
            <div class="dog-card">
                <a href="#" class="box-link">
                    <img src="https://thebullysupply.com/wp-content/themes/amtopm-child/uploaded/listing/1732303573_9pip1oohtsh91.jpg" alt="American"
                        class="img-fluid rounded" />
                    <span class="heart-icon">
                    </span></a><a class="favourite-button">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                </a>
                <div class="dog-card-body">
                    <h3 class="dog-title scape-line">American</h3>
                    <p class="dog-category scape-line">Category: American Bully</p>
                    <p class="dog-price">$1,111.00</p>
                </div>
            </div> 
        </div>    
        {/* })} */}
    </>
  )
}

export default Bullies
