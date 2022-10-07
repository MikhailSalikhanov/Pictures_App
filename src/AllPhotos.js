import { Link } from "react-router-dom"

export default function AllPhotos ({picturesArray, pageNumber, setPageNumber, amountOfPictures, setAmountOfPictures, favoriteArray}){

    return <>
        <nav className='nav' >
            {favoriteArray.length ? <Link to="/favorites">Show only favorites</Link> : "You can add photos to favorite"}
        </nav>
        <div className='form-wrapper'>
        <form className='form'>
            <label className='form-item'>
            Select amount of photos per page:
            <select value={amountOfPictures} onChange={e=>{setAmountOfPictures(e.target.value)}} className="select-css">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
            </select>
            </label>
            <label className='form-item'>
            Select page number:
            <select value={pageNumber} onChange={e=>setPageNumber(+e.target.value)} className="select-css">
                {pageNumber == 1 ? '' : <option value={pageNumber-1}>{pageNumber-1}</option>}
                <option value={pageNumber}>{pageNumber}</option>
                <option value={pageNumber+1}>{pageNumber+1}</option>
                <option value={pageNumber+2}>{pageNumber+2}</option>
                <option value={pageNumber+3}>{pageNumber+3}</option>
            </select>
            </label>
        </form>
    </div>
    <div className='picturesArray'>
        {picturesArray}
    </div>
    </>
}