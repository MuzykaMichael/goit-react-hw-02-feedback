import { Component } from "react";
import propTypes from 'prop-types'
import { ListOptionsButton } from "components/FeedbackOptions/FeedbackOptions.styled";

export class ListOptionItem extends Component{
    render(){
        const {option,clickHandler} = this.props;
        return(
            <li>
                <ListOptionsButton type='button' onClick={clickHandler} name={option}>
                    {option}
                </ListOptionsButton>
            </li>
        )
    }
}

ListOptionItem.propTypes = {
    option: propTypes.string.isRequired,
    clickHandler: propTypes.func.isRequired,
}