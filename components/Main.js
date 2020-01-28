import React, { useState } from 'react';

const Main = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('/api/register', { 
            method: 'POST',
            body: {
                email: email,
                time: Date.now()
            } 
        });
    }

    return (
        <>
            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                    margin-top: 45%;
                }

                .flex-item {
                    margin: 0 10px;
                }
            `}</style>
            <div className="container">
                <form onSubmit={handleSubmit} className="flex-item">
                    <label htmlFor="email">
                        <input
                            id="email"
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                    <button type="submit" className="flex-item">Notify Me!</button>
                </form>
            </div>
        </>
    );
}

export default Main;