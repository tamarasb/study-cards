import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { PropTypes } from 'prop-types'

export default function Card({text}){
    return(
        <View>
            <Text>{text}</Text>
        </View>
    )
}

Card.protoTypes = {
    text: PropTypes.string.isRequired,
}