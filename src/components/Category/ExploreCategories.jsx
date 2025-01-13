import React from 'react'

function ExploreCategories() {
  return (
    <>
    <section class="ruk-bully-container">
        <div class="cta-heading-dve">			 
            <h2 class="cta-heading">Explore Popular Categories</h2>			 
        </div>
       <div class="category-card-row">
           <div class="ruk-col-md-3"><div class="category-card cta-card-1">
                   <div class="circle-overlay red"></div>
                   <a href="https://thebullysupply.com/category/?search_sub_category=Bullies"><h3 class="category-title"> Bullies</h3></a>
               </div>
           </div>
           <div class="ruk-col-md-3">
               <div class="category-card cta-card-2">
                   <div class="circle-overlay blue"></div>
                   <a href="https://thebullysupply.com/category/?search_supplies_category=supplies_categories"><h3 class="category-title">Supplies</h3></a>
               </div>
           </div>
           <div class="ruk-col-md-3">
               <div class="category-card cta-card-3">
                   <div class="circle-overlay red"></div>
                   <a href="https://thebullysupply.com/category/?search_care_services=care_services"><h3 class="category-title">Care &amp; Services</h3></a>
               </div>
           </div>
           <div class="ruk-col-md-3">
               <div class="category-card cta-card-4">
                   <div class="circle-overlay blue"></div>
                   <a href="https://thebullysupply.com/category/?search_food_and_supplement=food_and_supplement"><h3 class="category-title">Food &amp; Supplements</h3></a>
               </div>
           </div>
       </div>
   </section>
 
    </>
  )
}

export default ExploreCategories
