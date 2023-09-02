import React from 'react';
import Nav from '../../components/Nav';


import '../../styles/laboratory/LaboratoryHeader.css'

function LaboratoryHeader() {

    return (
        <div className="laboratory-header-background-container">
            <Nav />
            
            <div className="laboratory-header-container">

                <img
                    src={require(`../../assets/laboratory-flower-1.png`)}
                    alt={`laboratory-flower-1`}
                    className="laboratory-flower-1"
                />
                <img
                    src={require(`../../assets/laboratory-flower-2.png`)}
                    alt={`laboratory-flower-2`}
                    className="laboratory-flower-2"
                />
                <img
                    src={require(`../../assets/laboratory-flower-3.png`)}
                    alt={`laboratory-flower-3`}
                    className="laboratory-flower-3"
                />
                <img
                    src={require(`../../assets/laboratory-flower-4.png`)}
                    alt={`laboratory-flower-4`}
                    className="laboratory-flower-4"
                />

                <img
                    src={require(`../../assets/laboratory-flower-5.png`)}
                    alt={`laboratory-flower-5`}
                    className="laboratory-flower-5"
                />



                <div className="laboratory-header-text-1">HI, We are Flower LAB</div>
                <div className="laboratory-header-text-2"> To get your personal bouquet</div>
                <div className="laboratory-header-text-3">Follow 3 steps below</div>
            </div>

        </div>
    );
}

export default LaboratoryHeader;