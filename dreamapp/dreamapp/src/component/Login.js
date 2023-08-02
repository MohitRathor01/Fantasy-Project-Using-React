import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [ids, setID] = useState("")
  const [idPass, setPass] = useState("")
  const [data, newData] = useState([])
  const myData = (e) => {
    const { id, value ,check} = e.target
    if (id === "Email") {
      setID(value)
    } else if (id === "Password") {
      setPass(value)
    }
  }
  const getData = () => {
    axios.get('http://localhost:4200/user').then((res) => {
      newData(res.data)
    }).catch((err) => console.log(err));

  }
  useEffect(() => {
    getData()
  }, [])
  function handlejama() {
    const humaraData = data.filter((item) => item.mail === ids && item.Password === idPass)
    if (humaraData.length > 0) {

toast.success("Login successfull")
    } else {
 
      toast.error("try is problem")
    }
  }
  return (
  
    <div><section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">

                <h3 className="mb-5">Log in</h3>

                <div className="form-outline mb-4">
                  <input type="email" id="Email" className="form-control form-control-lg" onChange={(e) => myData(e)} />
                  <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="Password" className="form-control form-control-lg" onChange={(e) => myData(e)} />
                  <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                </div>
                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handlejama} >Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section></div>
  
  )
}

export default Login