import * as React from 'react'

export default function EventForm (props) {
    return(<div>
        <h1>Add Event</h1>
        <form onSubmit={props.onSubmit} >
            <label >Name: </label>
            <input type ='text' name="name" value={props.values.name} onChange={props.onChange}></input>
            <br/>
            <label>Start date: </label>
            <input type ='date' name='start_date'value={props.values.start_date} onChange={props.onChange}></input>
            <label>End date: </label>
            <input type ='date' name='end_date'value={props.values.end_date} onChange={props.onChange}></input>
            <br/>
            <label>Desription: </label>
            <textarea type='text' name='description' value={props.values.description} onChange={props.onChange}></textarea>
            <br/>
            <label>Image: </label>
            <textarea type='text' name='image' value={props.values.image} onChange={props.onChange}></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
} 