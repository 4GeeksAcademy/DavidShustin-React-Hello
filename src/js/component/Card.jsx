import React from "react";

export const Card = () => {
    return (
        <div className="row mb-4 row-cols-1 row-cols-md-4 g-4 text-center">
            <div className="col">
                <div className="card">
                    <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <a className="btn btn-primary" href="#">Find Out More!</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <a className="btn btn-primary" href="#">Find Out More!</a>
                    </div>
                </div>
            </div>
            <div className="col d-flex align-items-stretch">
                <div className="card">
                    <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                        <a className="btn btn-primary" href="#">Find Out More!</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <a className="btn btn-primary" href="#">Find Out More!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}