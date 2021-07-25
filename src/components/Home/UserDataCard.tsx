import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ThemedText } from '../Common';
import { UserItem } from '../../types';
import { SCREEN_WIDTH } from '../../constants';

interface Props {
  userData: UserItem
}

const UserDataCard = ({ userData }: Props) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{ uri: userData.profile_image ?? '' }}
        resizeMode="cover"
        resizeMethod="resize"
      />

      <View style={styles.textWrapper}>
        <ThemedText style={styles.text}>{`Name: ${userData.display_name ?? ''}`}</ThemedText>
        <ThemedText style={styles.text}>{`Reputation: ${userData.reputation ?? ''}`}</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20
  },
  textWrapper: {
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold'
  }
});

export default UserDataCard;
