/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import '../css/Codeblock.css';

export const Codeblock: React.FC<Record<string, any>> = () => {
    useEffect(() => {
        // @ts-ignore
        hljs.highlightAll();
    }, []);
    return (
        <pre>
            <code className="language-javascript hljs">
                {`import { Client, Interaction } from 'tiscord';\n    
const client = new Client({
    token: 'TOKEN',
    intents: []
});

// listen for interactions
client.on('interactionCreate', interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.name !== "ping") return;
    
    interaction.reply({content: "pong"});
});

// connect to discord
client.login();`}
            </code>
        </pre>
    );
};
