import React, {Component}from 'React'

export default class Forecast extends React.Component {
    render() {
        return(
            <view>
                <Text>{This.props.main}</Text>
                <Text>{This.props.description}</Text>
                <Text>{This.props.temp}</Text>
                <Text>*C</Text>
            </view>
        )
    }
}