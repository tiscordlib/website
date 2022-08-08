import { Command } from './Command';
import '../css/Header.css';
import { Codeblock } from './Codeblock';
export const Header: React.FC<{ description: string }> = props => (
    <div>
        <header>
            <section>
                <div></div>
                <h1> Tiscord </h1>
                <p>{props.description}</p>
                <Command text="npm i tiscord"></Command>
            </section>
            <Codeblock></Codeblock>
            <div className="bg"></div>
        </header>
    </div>
);
