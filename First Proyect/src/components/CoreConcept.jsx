export default function CoreConcept(props){
    const {image, title, description} = props;
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}