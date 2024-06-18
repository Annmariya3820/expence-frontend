import React from 'react'
import './Style.css'

const Login = () => {
  return (
    <div>
        <form>
       <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="g-3">
                

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                     <label htmlFor="" className="form-label">Username</label>
                    <input type="text" className="form-control" placeholder='user name'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder='password' />

                    </div>
                   <br /> <center><div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  

                   <button className="btn btn-success">Login</button>

                    </div></center>
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <a href='#'>forgot password?</a>

                    </div>


                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <a href='#'>Sign Up</a>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </form>
    </div>
  )
}

export default Login
