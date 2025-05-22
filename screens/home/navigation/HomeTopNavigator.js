import React, { useState } from 'react';
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import TopTab from './TopTab';
import GamesList from '../GamesList';
import BadgesSubscreen from '../BadgesSubscreen';

const HomeTopNavigator = ({ navigation }) => {
    const [activeNumber, setActiveNumber] = useState(1);

    return (
        <View style={[t.flex, t.wFull, t.flexCol]}>
                <View
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={[t.wFull, t.flex, t.flexRow,t.mT8, t.justifyCenter]}
                    >
                    <TopTab
                        text="Games"
                        onPress={() => setActiveNumber(1)}
                        active={activeNumber == 1}
                        
                        />
                    <TopTab
                        text="Badges"
                        onPress={() => setActiveNumber(2)}
                        active={activeNumber == 2}
                        />
                </View>
                {
                    activeNumber == 1 ?
                    <GamesList navigation={navigation} />
                    :
                    <View></View>
                }
                {
                    activeNumber == 2 ?
                    <BadgesSubscreen navigation={navigation} />
                    :
                    <View></View>
                }
        </View>
    )
}


export default HomeTopNavigator;