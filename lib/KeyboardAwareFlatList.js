/* @flow */

import { FlatList } from 'react-native-gesture-handler'
import listenToKeyboardEvents from './KeyboardAwareHOC'

export default listenToKeyboardEvents(FlatList)
