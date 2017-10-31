import react, { Componen t} from 'react'
import { View, Text } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'

export default class AddEntry extends Component {
  render() {
    return (
      <View>
        <Text>Add Entry</Text>
        {getMetaMetricInfo('bike').getIcon()}
      </View>
    )
  }
}
