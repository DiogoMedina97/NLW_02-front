import React from 'react'

import profilePicturePlaceholder from '../../assets/images/profile-picture-placeholder.jpg';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src={profilePicturePlaceholder} alt="Profile Picture Placeholder"/>
                <div>
                    <strong>Diogo Medina</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br /><br />
                Quidem, illum. Hic rem nemo alias repudiandae ipsam. Sed neque itaque non rem pariatur facilis reprehenderit, nemo at a quo ut eum?
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem