import './style.css';

export function Cards({name, time}) {
    return(
        <div className="card">
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}