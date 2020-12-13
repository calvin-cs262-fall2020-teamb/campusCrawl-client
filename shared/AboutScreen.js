/* title: about screen
 * description: gives the user information about how to use the app
 * details:
 * learnMore is a boolean that triggers the screen appearing and disappearing
 */

import React from "react";
import { Text, View, Modal, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// create an about screen that explains how to use the app
export default function AboutScreen({ learnMore, setLearnMore }) {

  // validate properties of learnMore and setLearnMore
  AboutScreen.propTypes = { learnMore: PropTypes.bool };
  AboutScreen.propTypes = { setLearnMore: PropTypes.func };

    return (
        <View>
            <Modal visible={learnMore} animationType={'slide'} transparent={true} style={globalStyles.learnModal}>
                <View style={globalStyles.insideLearn}>
                    { /* exit button */ }
                    <MaterialIcons
                        name="close"
                        size={28}
                        color="#808080"
                        onPress={() => setLearnMore(false)}
                        style={globalStyles.closeLearn}
                    />
                    { /* header */ }
                    <Text style={globalStyles.learnHeader}>
                        About Campus Crawl
                    </Text>
                    { /* body of information */ }
                    <View style={globalStyles.learnText}>
                        <Image style={globalStyles.calvinImage} source={require('../images/calvincampus.jpg' )} />
                        <Text style={globalStyles.infoText}>
                            Campus Crawl is designed to give you a meaningful experience of Calvin University&apos;s campus.
                            This self-guided tour takes you to all the important buildings and locations you will need for your college life.
                        </Text>
                        <Text style={globalStyles.secondHeader}>
                            How To Use:
                        </Text>
                        <Text style={globalStyles.secondText}>
                            1. Press Start Tour!{"\n"}
                            2. The app will guide you to the first tour stop{"\n"}
                            3. Upon arrival, you will see an information page pop up{"\n"}
                            4. You can swipe up to see more information (and other fun facts) about that stop{"\n"}
                            5. When you finish exploring that location, press Next to continue the tour{"\n"}
                                        {"\n"}
                            * You can end the tour at any time by pressing Quit on the bottom left{"\n"}
                            * To skip a particular stop, press Skip Stop and move on to the next stop.
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>

    );
}
