import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos && props.photos.length > 0) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="photos"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section>Sorry, there are no images available for this word :/</section>
    );
  }
}
