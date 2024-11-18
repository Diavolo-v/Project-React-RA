import React from "react";
import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Formularz() {
    const [formData, setFormData] = useState({
        imie: '',
        nazwisko: '',
        haslo: '',
        cosTam: false,
        plec: ''
    });
    
        let globaldata = [];
        const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            globaldata.push(formData);
            axios.post('http://localhost:8000/json', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        };
        const formStyle = {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            paddingTop: '10px',
        };
        const SendMessage = () => {

        }
        return(
            <div>
                <form onSubmit={handleSubmit} style={formStyle}>
                <div>
                    <label>Imię:</label>
                    <input type="text" name="imie" value={formData.imie} onChange={handleChange} class="form-control" /><br/>
                    <label>Nazwisko:</label>
                    <input type="text" name="nazwisko" value={formData.nazwisko} onChange={handleChange} class="form-control" /><br/>
                    <label>Hasło:</label>
                    <input type="password" name="haslo" value={formData.haslo} onChange={handleChange} class="form-control"/><br/>
                </div>
                <div>
                    <input type="checkbox" name="cosTam" checked={formData.cosTam} onChange={handleChange} class="form-check-input"/>
                    <label class="form-check-label">Cos tam</label>
                </div>
                <div>
           
                    <input type="radio" name="plec" value="Kobieta" checked={formData.plec === 'Kobieta'} onChange={handleChange} class="form-check-label"/>
                    <label>Kobieta</label><br/>
                    
                    <input type="radio" name="plec" value="Mezczyzna" checked={formData.plec === 'Mezczyzna'} onChange={handleChange} class="form-check-label"/>
                    <label>Mezczyzna</label><br/>
                    
                    <input type="radio" name="plec" value="Inna" checked={formData.plec === 'Inna'} onChange={handleChange} class="form-check-label"/>
                    <label>Inna</label><br/>
                </div>
                <input type="submit" value="Wyślij" class="btn btn-primary"/>
                </form>
            </div>
        )
    }

export default Formularz;