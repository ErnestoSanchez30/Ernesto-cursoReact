import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Welcome from '../pages/Welcome';


const WelcomeContainer = () =>{
    const location = useLocation();
    const history = useHistory();
    const [form, setForm] = useState({});
    const [item, setItem] = useState({id:'', name:''});
    const [data, setData] = useState([
        {id:"004", name: "Daniel Sanchez"},
        {id:"002", name: "Arturo Cortes"},
        {id:"001", name: "Alfredo Carreon"}
    ]);

    useEffect(
        ()=>{
            setForm( location.state.form );
        },[location]
 
    );
    
    const onChange = (e) => setItem({...item, [e.target.name]:e.target.value});
    const goBack = () => history.goBack();
    const add = (e) =>{ 
        e.preventDefault();
        setData([...data, item]);
        setItem({id:'', name:''});
    }
    const trash = (e) => setData(data.filter(item => item.id !== e.target.id));
    const deleteItem = (item) => setData(data.filter(itemOld => ! (itemOld.id === item.id && itemOld.name === item.name)));

    return(
        <Welcome deleteItem={deleteItem} trash={trash} add={add} onChange={onChange} item={item} data={data} form={form} goBack={goBack} />    
    )
    
};


export default WelcomeContainer;