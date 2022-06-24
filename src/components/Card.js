import Button from "./Button";
import React from "react";
import ModalComponent from "./ModalComponent";

export function Card(props) {
  const { title, children } = props;
  
  return (
    <div className="card mb-4">
      {title ? (
        <div className="card-header">
            <div className="container">
                <div className="row">
                    <div className="col-11">
                        <i className="fas fa-table me-1"></i>
                        {title}
                    </div>
                    <div className="col-1">
                        <ModalComponent/>
                    </div>
                </div>
            </div>
        </div>
      ) : null}
      <div className="card-body">{children}</div>
    </div>
  );
}
