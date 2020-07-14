import Head from "next/head"
import NavBar from "./navbar";

const Layout = (props) => {
    return (  
        <div>
            <Head>
                <title>Bitz</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/superhero/bootstrap.min.css"></link>
            </Head>
            <NavBar />
            <div className="container">
            {props.children}
            </div>
            
        </div>
    );
}
 
export default Layout;