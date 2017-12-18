import React, { Component } from 'react'
import { Button, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'

import FortuneActions from '../Redux/FortuneRedux'
import { isNotNull } from '../Lib/null'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.section} >

            <Button
              title='I am feeling lucky!'
              onPress={() => this.props.dispatch(FortuneActions.fortuneRequest())}
            />

            { isNotNull(this.props.fortune.fetching) && this.props.fortune.fetching &&
              <Text style={styles.sectionText}>
                loading ...
              </Text>
            }

            { isNotNull(this.props.fortune.fortune) &&
              <Text style={styles.titleText}>
                {this.props.fortune.fortune}
              </Text>
            }

            { isNotNull(this.props.fortune.error) &&
              <Text style={styles.sectionText}>
                Ops, I had an issue to request your fortune.
              </Text>
            }

          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fortune: state.fortune
  }
}

export default connect(mapStateToProps, null)(LaunchScreen)
