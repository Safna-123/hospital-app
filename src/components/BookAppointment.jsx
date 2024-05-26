import React from 'react'
import Navbar from './Navbar'
const BookAppointment = () => {
  return (
    <div>
          
          <Navbar/>
          
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                   
                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" placeholder="Enter patient name" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input type="date" name="" id="" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PHONE NO.</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">ADDRESS</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">INSURANCE PROVIDER</label>
                            <select name="" id="" className="form-select">
                                <option value="select insurance provider">select insurance provider</option>
                                <option value="SBI Health Insurance">SBI Health Insurance</option>
                                <option value="Reliance Health Insurance">Reliance Health Insurance</option>
                                <option value="Star Health and Allied Insurance">Star Health and Allied Insurance</option>
                                <option value="Bharti AXA Health Insurance">Bharti AXA Health Insurance</option>
                            </select>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">INSURANCE POLICY NUMBER</label>
                            <input type="text" className="form-control" />
                        </div>

                        
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">REASON FOR APPOINTMENT</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">APPOINMENT DATE</label>
                            <input type="date" name="" id="" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-control">APPOINTMENT TIME </label>
                            <input type="time" name="" id="" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">MEDICAL HISTORY</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success">SUBMIT</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default BookAppointment
