import React from "react";
import { useState} from "react-native";
import './Perfil.css'
export default function Perfil(nome,apelido,eventos) {
    const[nome,setNome] = useState('Seu nome');
    const[apelido,setApelido] = useState('Seu apelido');
    const[eventos,setEventos] = useState();

    return (
        <div className='Card'>
            <div className='conteiner-superior'>
                <div className='image-conteiner'>
                    <img src="" alt='' height='100px' width='100px'/>
                </div>
            </div>
            <div className='conteiner-inferior'>
                <h3>{nome}</h3>
                <h4>{apelido}</h4>
                <p>{eventos}</p>
                <button>Editar perfil</button>
            </div>

        </div>
    )

}