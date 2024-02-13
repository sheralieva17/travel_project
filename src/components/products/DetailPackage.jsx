import React, { useEffect } from 'react';
import { usePackage } from '../context/PackageContextProvider';
import { useNavigate, useParams } from 'react-router-dom';
import Booking from './Booking';
import { auth } from '../../firebase';

const DetailPackage = () => {
    const { getOnePackage, onePackage } = usePackage();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOnePackage(id);
    }, [id, getOnePackage]);

    return (
        <div>
            {onePackage ? (
                <div style={{ marginTop: 8 }}>
                    <div
                        style={{
                            position: "relative",
                            display:"flex",
                            alignItems:'center',
                            justifyContent:"space-evenly",
                            maxWidth: "100%",
                            marginBottom: 10,
                            background: "transparent",
                            border: "2px solid rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(20px)",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                            fontFamily: "Optima, sans-serif",
                            
                        }}
                    >
                        <div style={{  height: 'auto', display: "flex", padding: 2, flexDirection:"column" }}>
                            <img
                                style={{ width: 500, objectFit: "contain" }}
                                src={onePackage.image}
                                alt="product"
                                height="540"
                            />
                            <div>
                                <h3 style={{ fontSize: "24px", color: "black" }}>
                                    {onePackage.title}
                                </h3>
                                
                                <h6 style={{ fontSize: "18px", color: "black" }}>
                                    {onePackage.description}
                                </h6>
                                
                                <h6 style={{ fontSize: "18px", color: "black" }}>
                                    {onePackage.category}
                                </h6>
                            
                                <h4 style={{ fontSize: "20px", color: "black" }}>
                                    {onePackage.price}$
                                </h4>
                            </div>
                            <div>
                                <h3>Include</h3>
                                <ul>
                                    <li>Transport</li>
                                    <li>Ticket entrance</li>
                                    <li>Hotel</li>
                                    <li>Local Guide</li>
                                    <li>Lunch</li>

                                </ul>
                            </div>
                        </div>
                        <Booking/>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default DetailPackage;
