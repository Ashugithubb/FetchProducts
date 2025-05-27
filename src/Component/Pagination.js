import React from "react";
import '../Style/card.css'
const Pagination = (props)=>{
return(
    <>
    <div class="pages">
        <div class="but">
        <button disabled ={props.currentPage ===0} class ="page" onClick={()=>{props.goToPrevPage()}} ><i class="fa-solid fa-arrow-left"></i></button>
        <button disabled={props.currentPage===0} onClick={props.goToPrevPage}>{props.currentPage-1}</button>
        
        <button class="main" onClick={props.handlePageChange}>{props.currentPage}</button>
        
        <button disabled={props.currentPage===props.noOfPage-1} onClick={props.goToNextPage}>{props.currentPage+1}</button>
        <button disabled={props.currentPage===props.noOfPage-1} class ="page" onClick={()=>{props.goToNextPage()}}><i class="fa-solid fa-arrow-right"></i></button>
     </div>

</div>
    </>
)
}
export default Pagination;