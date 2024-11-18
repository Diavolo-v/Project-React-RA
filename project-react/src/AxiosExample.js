import React,{useState} from 'react';
import axios from 'axios';


function AxiosExample() {

    const kliknij = () =>{
        axios.get('https://raw.githubusercontent.com/jdorfman/awesome-json-datasets/master/tests/relaxed.json')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            console.log('done');
        })
    }
    const [data, setData] = useState(null);
    axios.get('https://raw.githubusercontent.com/jdorfman/awesome-json-datasets/master/tests/relaxed.json')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            console.log('done');
        });

    return(
        <div>
            <h1>Axios</h1>
            <button onClick={kliknij}>Click me</button>
            {data && data.map((key, index) => {
                return(
                    <input type='checkbox' key={index} value={key.key1} />
                )
            })}
        </div>
    )
}

export default AxiosExample;