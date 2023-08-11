/* @flow */

import { ScrollView } from 'react-native-gesture-handler'
import listenToKeyboardEvents from './KeyboardAwareHOC'

export default listenToKeyboardEvents(ScrollView)
