import {Link} from 'react-router-dom'

const Navbar=()=>{
    return (
        <header>
            <div calssName="container">
                <Link to ="/">
                    <h1>navbar</h1>
                </Link>
            </div>
        </header>
    )
}
export default Navbar