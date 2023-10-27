export const Pagination: React.FC<{
    currentPage: number,
    booksPerPage: number
    totalPages: number,
    paginate: any
}> = (props) => {

    const pageNumbers: number[] = [];
    let numberOfPagesNumber = props.booksPerPage;
    let pagesBefore;
    let pagesAfter;

    const halfPages = Math.floor(numberOfPagesNumber / 2);
    const totalPages = Math.min(props.totalPages, numberOfPagesNumber);

    if (props.currentPage <= halfPages) {
        pagesBefore = props.currentPage - 1;
    } else if (props.currentPage > props.totalPages - halfPages) {
        pagesBefore = totalPages - (props.totalPages - props.currentPage) - 1;
    } else {
        pagesBefore = halfPages;
    }
    pagesAfter = totalPages - pagesBefore - 1;

    for (let i = -pagesBefore; i <= pagesAfter; i++) {
        let pageTopush = props.currentPage + i;
        pageNumbers.push(pageTopush);
    }
    return (
        <nav aria-label="...">
            <ul className='pagination'>
                <li className='page-item' onClick={() => props.paginate(1)}>
                    <button className='page-link'>
                        First Page
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} onClick={() => props.paginate(number)}
                        className={'page-item ' + (props.currentPage === number ? 'active' : '')}>
                        <button className='page-link'>
                            {number}
                        </button>
                    </li>
                ))}
                <li className='page-item' onClick={() => props.paginate(props.totalPages)}>
                    <button className='page-link'>
                        Last Page
                    </button>
                </li>
            </ul>
        </nav>
    );
}