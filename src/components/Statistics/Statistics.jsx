import { Component } from "react";
import { StatisticsList } from "./Statistics.styled";
import propTypes from 'prop-types'

export class Statistics extends Component {
    render(){
        const {good,neutral,bad,all,percentage} = this.props;
        return(
            <StatisticsList>
                <li>
                    <span>Good:{good}</span>
                </li>
                <li>
                    <span>Neutral:{neutral}</span>
                </li>
                <li>
                    <span>Bad:{bad}</span>
                </li>
                <li>
                    <span>Total feedback:{all}</span>
                </li>
                <li>
                    <span>Positive percentage:{percentage}%</span>
                </li>
            </StatisticsList>
        )
    }
}

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    all: propTypes.number.isRequired,
    percentage: propTypes.number.isRequired,
}