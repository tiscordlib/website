import { MdContentCopy } from 'react-icons/md';
export const Command: React.FC<{ text: string }> = props => {
    function click() {
        navigator.clipboard.writeText(props.text);
    }
    return (
        <div className="command">
            <p>{props.text}</p> <MdContentCopy onClick={click} />
        </div>
    );
};
