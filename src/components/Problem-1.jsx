// import React, {useState} from 'react';

// const Problem1 = () => {

//     const [show, setShow] = useState('all');

//     const handleClick = (val) =>{
//         setShow(val);
//     }

//     return (

//         <div className="container">
//             <div className="row justify-content-center mt-5">
//                 <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
//                 <div className="col-6 ">
//                     <form className="row gy-2 gx-3 align-items-center mb-4">
//                         <div className="col-auto">
//                             <input type="text" className="form-control" placeholder="Name"/>
//                         </div>
//                         <div className="col-auto">
//                             <input type="text" className="form-control" placeholder="Status"/>
//                         </div>
//                         <div className="col-auto">
//                             <button type="submit" className="btn btn-primary">Submit</button>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="col-8">
//                     <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
//                         <li className="nav-item">
//                             <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
//                         </li>
//                         <li className="nav-item">
//                             <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
//                         </li>
//                         <li className="nav-item">
//                             <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
//                         </li>
//                     </ul>
//                     <div className="tab-content"></div>
//                     <table className="table table-striped ">
//                         <thead>
//                         <tr>
//                             <th scope="col">Name</th>
//                             <th scope="col">Status</th>
//                         </tr>
//                         </thead>
//                         <tbody>
                        
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Problem1;
import React, { useState } from 'react';

const Problem1 = () => {
  const [show, setShow] = useState('all');
  const [formData, setFormData] = useState({ name: '', status: '' });
  const [tableData, setTableData] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Update the tableData state with the entered data
    setTableData([...tableData, formData]);
    // Clear the form fields
    setFormData({ name: '', status: '' });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleFormSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                       <li className="nav-item">
                           <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                      </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                       </li>
                   </ul>
<div className="tab-content"></div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over the tableData state and render table rows */}
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
