import "./style.css";
import {useState} from "react";
import axios from "axios";
import Line from "../Line";

export function EmployeeList(props) {
  const [custom,setCustom] = useState();
  const [open, setOpen] = useState(false);
  const [user,setUSer] = useState([]);
  const promise = axios.get("http://jsonplaceholder.typicode.com/users");

  if(user.length == 0){
    promise.then((resp) => {
      setUSer(resp.data);
      console.log(resp);
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
      <div className="dataTable-top">
        <div className="dataTable-dropdown">
          <label>
            <select className="dataTable-selector">
              <option value="5">5</option>
              <option value="10" selected="">
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>{" "}
            entries per page
          </label>
        </div>
        <div className="dataTable-search">
          <input
            className="dataTable-input"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
      <div className="dataTable-container">
        <table className="table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </tfoot>
          <tbody>
            {(user || []).map((item) => (
              <tr key={`${item.name}-${item.phone}`}>
                <td onClick={() => {
                  setOpen(true);
                  setCustom(item);
                }}>{item.name}</td>
                <td onClick={() => {
                  setOpen(true);
                  setCustom(item);
                }}>{item.username}</td>
                <td onClick={() => {
                  setOpen(true);
                  setCustom(item);
                }}>{item.email}</td>
                <td onClick={() => {
                  setOpen(true);
                  setCustom(item);
                }}>{`${item.address.street}-${item.address.city}`}</td>
                <td onClick={() => {
                  setOpen(true);
                  setCustom(item);
                }}>{item.phone}</td>
                <td onClick={() => {
                  setOpen(true);
                  setCustom(item);
                }}>{item.website}</td>
                <td onClick={() => {
                  setOpen(true);
                  setCustom(item);
                }}>{item.company.name}</td>
                {open && <Line isOpen={setOpen} val={custom}/>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dataTable-bottom">
        <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
        <nav className="dataTable-pagination">
          <ul className="dataTable-pagination-list">
            <li className="active">
              <a href="#" data-page="1">
                1
              </a>
            </li>
            <li className="">
              <a href="#" data-page="2">
                2
              </a>
            </li>
            <li className="">
              <a href="#" data-page="3">
                3
              </a>
            </li>
            <li className="">
              <a href="#" data-page="4">
                4
              </a>
            </li>
            <li className="">
              <a href="#" data-page="5">
                5
              </a>
            </li>
            <li className="">
              <a href="#" data-page="6">
                6
              </a>
            </li>
            <li className="pager">
              <a href="#" data-page="2">
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
