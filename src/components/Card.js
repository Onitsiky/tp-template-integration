import {useState} from "react";
import Modal from "./Modal";

export function Card(props) {
  const { title, children } = props;
  const [show,setShow] = useState(false);
  return (
    <div className="card mb-4">
      {title ? (
        <div className="card-header container">
          <div className='row'>
              <div className='col-11'>
                  <i className="fas fa-table me-1"></i>
                  {title}
              </div>
              <div className='col-1'>
                  <button
                      className='btn btn-primary'
                      type="button"
                      onClick={() => {
                          setShow(true);
                      }}
                  >
                      Add
                  </button>
                {show && <Modal hide={setShow}/>}
              </div>
          </div>
        </div>
      ) : null}
      <div className="card-body">{children}</div>
    </div>
  );
}
