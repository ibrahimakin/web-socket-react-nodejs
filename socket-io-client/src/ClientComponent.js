import React from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://127.0.0.1:4001';

function ClientComponent () {
    const [response, setResponse] = React.useState('');
    React.useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on('FormAPI', (data) => {
            setResponse(data);
        });
        // Clean up the Effect
        return () => { socket.disconnect(); };
    }, []);
    return (
        <div>
            <time dateTime={response}>{response}</time>
        </div>
    );
}

export default ClientComponent;
