import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {
    const detailsData = {
        name: "",
        mail: "",
        contact: "",
        Password: "",
        IsAgree: false,
    }
    const navigate = useNavigate();



    const handleChange = (event) => {
        const { id,checked, value } = event.target
        if (id === "name") {
            detailsData.name = value
        } else if (id === "mail") {
            detailsData.mail = value
        } else if (id === "contact") {
            detailsData.contact = value
        } else if (id === "password") {
            detailsData.Password = value
        }else if (id === "IsAgree")
        detailsData.IsAgree = checked 
          }  
    const handleSubmit = (e) => {      
               e.preventDefault();
        if (detailsData.name.trim() === "") {
            alert('Please enter your name');
            return;
        }
            if (detailsData.mail.trim() === "") {
                alert('Please enter your email');
                return;
            }
            if (detailsData.contact.trim() === "") {
                alert('Please enter contact');
                return;
            }
            if (detailsData.Password.trim() ==="") {
                alert('Please enter password');
                return;
        }
        
                if(detailsData.IsAgree === true){
            axios.post("http://localhost:4200/user", detailsData).then((res) => {
                console.log(res)
                navigate("/Login")
            }).catch((err) => {
    toast.error("error")
            })
        } 
        else
     toast.warning("agree term and condition")
        }        
    return (
        <div>
            <section className="" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{ borderRadius: "25px" }}>
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                    <form className="mx-1 mx-md-4">

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="name" className="form-control" onChange={(e) => handleChange(e)} />
                                                <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="email" id="mail" className="form-control" onChange={(e) => handleChange(e)} />
                                                <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="number" id="contact" className="form-control" onChange={(e) => handleChange(e)} />
                                                <label className="form-label" htmlFor="form3Example4c">Contact</label>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="password" id="password" className="form-control" onChange={(e) => handleChange(e)} />
                                                <label className="form-label" htmlFor="form3Example4cd"> Password</label>
                                            </div>
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="IsAgree"  onChange={(e) => handleChange(e)}/>
                                            <label className="form-check-label" htmlFor="form2Example3"  >
                                                I agree all statements in <a href="#!">Terms of service</a>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit} >Register</button>
                                        </div>

                                    </form>

                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                        className="img-fluid" alt="Sample image" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </section>
        </div> 
     

    
    )
}

export default  Register