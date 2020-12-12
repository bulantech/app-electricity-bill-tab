import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { TextInput, Button, Alert } from 'react-native';

export default function TabOneScreen() {
  const [value, onChangeText] = React.useState<string>('')
  const [valueNew, onChangeTextNew] = React.useState<string>('')
  const [valuePrice, onChangeTextPrice] = React.useState<string>('')

  const [total, onCal] = React.useState<number>(0)

  const onPressLearnMore = () => {
    // console.log('Simple Button pressed')
    if (!value.trim()) {
      Alert.alert('เติมค่าที่อ่านเดือนก่อน');
      return;
    }
    if (!valueNew.trim()) {
      Alert.alert('เติมค่าที่อ่านเดือนนี้');
      return;
    }
    if (!valuePrice.trim()) {
      Alert.alert('เติมค่าราคาต่อหน่วย');
      return;
    }

    const v = parseInt(value)
    const vn = parseInt(valueNew)
    const vp = parseInt(valuePrice)

    if (v > vn) {
      Alert.alert('ค่าที่อ่านเดือนนี้ต้องมากกว่าเดือนก่อน')
      return;
    }

    const t = (vn-v)*vp
    onCal(t)

  }

  const onPressClear = () => {
    onChangeText('')
    onChangeTextNew('')
    onChangeTextPrice('')  
    onCal(0)
  }

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="/screens/TabOneScreen.js" />      
    // </View>
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, margin: 10, padding: 3}}
        onChangeText={text => onChangeText(text)}
        value={value}
        keyboardType={'number-pad'}
        placeholder='เติมค่าที่อ่านเดือนก่อน'
      />
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, margin: 10, padding: 3}}
        onChangeText={text => onChangeTextNew(text)}
        value={valueNew}
        keyboardType={'number-pad'}
        placeholder='เติมค่าที่อ่านเดือนนี้'
      />
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, margin: 10, padding: 3}}
        onChangeText={text => onChangeTextPrice(text)}
        value={valuePrice}
        keyboardType={'number-pad'}
        placeholder='เติมค่าราคาต่อหน่วย'
      />
      <View style={styles.containerButon}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onPressLearnMore}
          title="คำนวน"
          color="#2f95dc"
          accessibilityLabel="Learn more about this purple button"          
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
          onPress={onPressClear}
          title="ลบ"
          color="#B2BABB"
          accessibilityLabel="Learn more about this purple button"          
        />
        </View>
      </View>
      <Text style={{fontSize: 35, margin: 20}} >รวมค่าไฟ= {total} บาท</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  containerButon: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  buttonContainer: {
    flex: 1,
    margin: 10
  },
  input: {

  }
});
