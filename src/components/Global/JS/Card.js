import '../CSS/Card.css'


function Card(props){
    //We need to do these in order to use all the css from the children props
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;