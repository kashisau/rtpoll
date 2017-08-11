import React, { Component } from 'react';
import './Gauge.css';

class Gauge extends Component {
    render() {
        return <div className="Gauge">
            <svg className="Gauge-outline" viewBox="0 0 261 186" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="gaugeOutline" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dial" fill="#DB9E36"><path d="M130.124411,182.978992 C-12.9157445,182.978992 0.322974576,201.48879 0.322974576,129.801436 C0.322974576,58.1140826 58.4370572,0 130.124411,0 C201.811765,0 259.925847,58.1140826 259.925847,129.801436 C259.925847,201.48879 273.164567,182.978992 130.124411,182.978992 Z M130.248822,162.968387 C240.448031,162.968387 230.248822,177.228475 230.248822,122 C230.248822,66.771525 185.477297,22 130.248822,22 C75.0203471,22 30.248822,66.771525 30.248822,122 C30.248822,177.228475 20.0496136,162.968387 130.248822,162.968387 Z" id="Dial-housing"></path></g></g>
                <g id="gaugeInlay" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dial" fill="#FFFAD5"><path d="M130.248822,162.968387 C240.448031,162.968387 230.248822,177.228475 230.248822,122 C230.248822,66.771525 185.477297,22 130.248822,22 C75.0203471,22 30.248822,66.771525 30.248822,122 C30.248822,177.228475 20.0496136,162.968387 130.248822,162.968387 Z" id="Oval"></path></g></g>
            </svg>
            <div className="Gauge-needle"></div>
        </div>
    }
}

export default Gauge;