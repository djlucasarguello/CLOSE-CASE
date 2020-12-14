import React from 'react';
import {
    SideDrawerStyled,
    ContentStyled,
    FooterStyled,
    HeaderStyled
} from './sideDrawer.styles';
import CardUser from '../CardUser';
import ButtonSidebar from './ButtonSidebar';
import { Home, Add, Calendar, ClipBoard, File, Diary, Setting } from '../icons';
import { useLocation } from 'wouter';


const NavSideDrawer = ({show, setShow}) => {
    const [, pushLocation] = useLocation();

    const sidebarButton = [
        {name: 'Inicio', icon: <Home/> , url: '/home'},
        {name: 'Crear Caso', icon: <Add/> , url: '/'},
        {name: 'Agenda', icon: <Diary/> , url: '/'},
        {name: 'Calendario', icon: <Calendar/> , url: '/calendar'},
        {name: 'Casos en proceso', icon: <ClipBoard/> , url: '/casesProcess'},
        {name: 'Historial de Casos', icon: <File/> , url: '/caseHistory'},
        {name: 'Configuración', icon: <Setting/> , url: '/'},
    ];

    const handleOnClick = button => {
        pushLocation(button.url);
        setShow(prev => !prev);
    }

    return (
        <SideDrawerStyled show={show}>
            <HeaderStyled>
                <CardUser/>
            </HeaderStyled>
            <ContentStyled>
                {
                    sidebarButton.map((button, index) => (
                        <ButtonSidebar
                            key={index}
                            icon={button.icon}
                            onClick={() => handleOnClick(button)}
                        >
                            {button.name}
                        </ButtonSidebar>
                    ))
                }
            </ContentStyled>
            <FooterStyled>
                <button>
                    Cerrar Sesión
                </button>
            </FooterStyled>
        </SideDrawerStyled>
    )
}

export default NavSideDrawer;