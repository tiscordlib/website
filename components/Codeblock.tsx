'use client';


import styles from '../app/page.module.css'
import hljs from "highlight.js";

export default function Codeblock() {
    let code: string = `import { Client, Interaction } from 'tiscord';\n    
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
client.login();`;


    code = hljs.highlight("javascript", code).value;


    return (

        <pre className={styles.hljs_bg}>
            <code className={`language-javascript`} dangerouslySetInnerHTML={{__html: code}}>
            </code>
        </pre>
    );
}
