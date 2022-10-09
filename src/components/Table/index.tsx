import './style.css'
import TableContent from "./TableContent";
import TableHeader from "./TableHeader";

const Table = (): JSX.Element => {
    return (
        <section className='table'>
            <div className='table-content'>
                <TableHeader />
                <TableContent />   
            </div>
        </section>
    )
}

export default Table;