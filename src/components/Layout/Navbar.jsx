// 

import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import './Navbar.css';
import logo from './logog.png';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const navigate=useNavigate();
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => navigate('/')
        },
        {
            label: 'About me',
            icon: 'pi pi-star',
            command: () => navigate('/about')
        },
        {
            label: 'Achievements',
            icon: 'pi pi-search',
            command: () => navigate('/achievements')
           
        },
        {
            label: 'Projects',
            icon: 'pi pi-envelope',
            command: () => navigate('/projects')
        },
        {
            label: 'Resume',
            icon: 'pi pi-envelope',
            command: () => navigate('/resume')
        }
    ];
    const start = (
        <img alt="logo" src={logo} height="40" className="mr-2" onClick={() => window.scrollTo(0, 0)} />
      );
    return (
        <div style={{
            display: "flex",
            justifyContent: "center", 
            position: "fixed",
            top: 0, 
            left: 0, 
            width: "100%", 
            zIndex: 100, 
            margin: 0
            
        }}>
            <div className="navbar-container" style={{width: "100%",marginTop: "10px"}}>
                <Menubar model={items} start={start} className='glass-effect custom-menubar'/>
            </div>
        </div>
    )
}
        