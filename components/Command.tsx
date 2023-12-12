import { MdContentCopy} from "react-icons/md";
import styles from '../app/page.module.css'
export default function Command({text}: {text: string}) {
    function click() {
        navigator.clipboard.writeText(text)
    }

    return (
        <div className={styles.command}>
            <p>{text}</p> <MdContentCopy onClick={click} />
        </div>
    )
}
