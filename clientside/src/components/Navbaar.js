import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {
    const [getuserdata, setUserdata] = useState([]);
    const [name, setsearch] = useState([]);
    // const getsearchdata = () => {
    //     const res =  fetch(`http://localhost:8003/getsearchdata/${name}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });

    //     const data = res.json();
    //     // console.log(data,"getsearchdata");

    //     if (res.status === 422 || !data) {
    //         console.log("error ");

    //     } else {
    //         setUserdata(data)
    //         console.log("get data");

    //     }
    //     // console.log(name,"name")
    // }

    const getsearchdata = async () => {

        const res = await fetch(`http://localhost:8003/getsearchdata/${name}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");

        }
    }





    console.log(getuserdata,"getuserdata")
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">CRUD APP</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                          
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setsearch(e.target.value)}/>
                            <button className ="btn btn-outline-success" type ="submit" onClick={() => getsearchdata()}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
