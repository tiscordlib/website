'use client';


import styles from '../app/page.module.css'
import hljs from "highlight.js";
import { Roboto_Mono} from 'next/font/google';
import {MdContentCopy} from "react-icons/md";

const roboto = Roboto_Mono({
    weight: ["100", "300", "400", "500", "700"],
    subsets: ["latin"]
})

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
            <code className={`language-javascript ${roboto.className}`} dangerouslySetInnerHTML={{__html: code}} style={{position: "relative"}}>
            </code>
            <div className={styles.copy}>
                <MdContentCopy onClick={() => {
                    navigator.clipboard.writeText(code)
                }}/>
            </div>
        </pre>
    );
}
