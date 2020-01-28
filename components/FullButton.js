import React from 'react';

const FullButton = ({ children, clickHandler }) => (
    <div>
        <button onClick={clickHandler} className="btn">{children}</button>
        <style jsx>{`
            .btn {
                display: inline-block;
                padding: 9px 30px;
                font-family: 'AvenirNext-DemiBold';
                font-size: 18px;
                text-decoration: none;
                border-radius: 10px;
                color: #fff;
                background-color: black;
                -webkit-transition: background-color 0.2s, border 0.2s, color 0.2s;
                transition: background-color 0.2s, border 0.2s, color 0.2s;
            }

            .btn:hover {
                box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
                0 5px 15px 0 rgba(0,0,0,0.08);
            }
      `}</style>
    </div>
);

export default FullButton;