import React from 'react';

const Effect = () => {
    const getUsuarios = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(({data}) => {
            console.log(data);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    getUsuarios();

    return (
        <>
            <h1>UseEffect</h1>
            <hr />

            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <label for="exampleInputEmail1">Search</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter search"/>
                </div>

                <br/>

                <button type="submit" className="btn btn-secondary btn-lg">Submit</button>
            </form>
        </>
    )
};

export default Effect;
