import { MdBolt, MdBuild, MdDone } from 'react-icons/md';
import { Feature } from './Feature';

export const Features: React.FC = () => (
    <div className="features">
        <Feature
            name="Maintained"
            icon={<MdBolt />}
            description="Tiscord is actively maintained, and new API features are added quickly."
        />
        <Feature
            name="Customizable"
            icon={<MdBuild />}
            description="Tiscord tries to be as customizable as it can, e.g. you can configure caching, debug logs, and much more."
        />
        <Feature
            name="Simple"
            icon={<MdDone />}
            description="If you don't want to customize your bot's config, you can keep your code simple and clean with Tiscord."
        />
    </div>
);
