import Layout from "../components/layout";
import Fetch from "isomorphic-unfetch";
import Prices from "../components/prices"
const Index= (props)=>{
    return (
     <Layout>
    <div>
        <h1>Welcome to BitPrice</h1>
       {/* <p>Last updated {props.coindesk.time.updated} </p>  */}
       <Prices bpi={props.coindesk.bpi}/>

    </div>
    </Layout>   
    )
}

Index.getInitialProps = async function (){
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const data = await res.json();
    return {coindesk:data};
}

export default Index;