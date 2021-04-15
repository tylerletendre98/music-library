function Table (props){
    return(
        <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">title</th>
                <th scope="col">artist</th>
                <th scope="col">genre</th>
                <th scope="col">release date</th>
                <th scope="col">album</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>{props.name}</td>
                <td>{props.artist}</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}
export default Table;