import '../css/Features.css';
export const Feature: React.FC<{ icon: React.ReactNode; name: string; description: string }> = props => (
    <div className="feature">
        {props.icon}
        <h2>{props.name}</h2>
        <p>{props.description}</p>
    </div>
);
