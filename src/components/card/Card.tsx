export const Card = (props: any) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const CardHeader = (props: any) => {
    return (
        <div>{props.children}</div>
    )
}

const CardFooter = (props: any) => {
    return (
        <div>{props.children}</div>
    )
}

const CardBody = (props: any) => {
    return (
        <div>{props.children}</div>
    )
}

Card.CardHeader = CardHeader;
Card.CardFooter = CardFooter;
Card.CardBody= CardBody;
