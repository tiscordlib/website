import { MdBolt, MdBuild, MdDone } from 'react-icons/md';
import Feature from "@/components/Feature";
import styles from '../app/page.module.css'
export default function Features() {
    return (
        <div className={styles.features}>
            <Feature
                name="Active Maintenance"
                icon={<MdBolt />}
                description="Tiscord is being actively updated and new API features are being added in rapid succession.

                "
            />
            <Feature
                name="Customization"
                icon={<MdBuild />}
                description="We want Tiscord to be flexible. Configure it according to your needs. You can configure caching, debug logs and much more."
            />
            <Feature
                name="Ease of use"
                icon={<MdDone />}
                description="In favour of Tiscord is simplicity. Enjoy the beauty of your code by leaving it clean and simple."
            />

        </div>
    )

}
