import axios from 'axios';
import React,{useEffect,useState} from 'react';


export default function Home(){
    const [tasks,setTasks]=useState([]);
    const [categories,setCategories]=useState([]);
	const fetchTasks = async  ()=>{
        try{
            const response = await axios.get('http://localhost:8000/tasks');
            setTasks(response.data);
	console.log(tasks)
        }catch (error){
             console.log(error);
        
    }
    useEffect(()=>{
       fetchTasks();
    },[]);
    
    return (
        
        <div className='row my-5'>
            <div className="col-md-9 card">
                <div className='card-body'>
                 <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Done</th>
                            <th>Category</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         tasks.data?.map(task=>(
                            <tr key={task.id}>
                               <td>{task.id}</td>
                               <td>{task.title}</td>
                               <td>{task.body}</td>
                               <td></td>
                               <td></td>
                               <td>{task.created_at}</td>
                            </tr>
                        ))
                       } 
                    </tbody>
                    </table>
                </div>
              
             </div>
        </div>
    )
}}