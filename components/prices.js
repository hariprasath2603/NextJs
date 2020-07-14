// import Style from "next/"
class Prices extends React.Component {
    state = {  currency:"USD"}

    render() { 
        const {description,code,symbol,rate} = this.props.bpi[this.state.currency] 
        return ( 
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Bitcoin rate for {description+" : "}   
                        <span className="badge badge-primary" title={code} dangerouslySetInnerHTML={{ __html: symbol }} />
                        <strong>{" " + rate}</strong>
                    </li>
                </ul>
                <br />
                <select onChange={e=>this.setState({currency:e.target.value})}  className="form-control">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>

        <style JSX>{`
                select {
                color: whitesmoke !important;
                background-color: rgb(78, 93, 108) !important;
            }
            option:active   {
                color: red !important;
                background-color: red !important;
            }
        `}</style>
            </div>
         );
    }
}
 
export default Prices;