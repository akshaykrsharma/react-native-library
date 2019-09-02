/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';

import Header from './src/component/Header';
import Button from './src/component/Button';
import List from './src/component/List';
import TabBar from './src/component/Tab/TabBar';
import APIManager from './src/service/ApiManager';

const dummyData = [
  {class: 'Akshay', address: 'Jaipur', age: 20},
  {class: 'Rahul', address: 'Kota', age: 30},
  {class: 'Ashish', address: 'Delhi', age: 40},
  {class: 'AAshish', address: 'Mumbai'},
];

const App = () => {
  return (
    <View>
      <Header leftButton={'< Back'} rightButton={'Setting'} title={'Hello'} />
      <TabBar
        selectedContainerStyle={{backgroundColor: 'white'}}
        unSelectedContainerStyle={{backgroundColor: 'white'}}
        selectedTextStyle={{color: 'red'}}
        unSelectedTextStyle={{color: 'orange'}}
        data={['Tab1', 'Tab2', 'Tab3']}
        onTabSelection={index => {
          console.warn('index', index);
        }}
      />
      <List
        searchLogic={(item, text) =>
          item.class.toLowerCase().includes(text.toLowerCase())
        }
        sortKey={'age'}
        showSearch={true}
        // sortLogic={this.props.data.sort(function(a, b) {
        //   return a.class > b.class;
        // })}
        //textSearch={this.state.searchedText}
        data={dummyData}
        renderItem={({item}) => {
          return (
            <View style={{marginBottom: 10}}>
              <Text style={{fontSize: 20, color: 'red'}}>{item.class}</Text>
              <Text style={{fontSize: 16, color: 'black'}}>{item.address}</Text>
              <Text style={{fontSize: 16, color: 'black'}}>{item.age}</Text>
            </View>
          );
        }}
      />

      <Button
        onPress={() => {
          APIManager.getResponse('/Login', 'GET', {}, (status, response) => {
            console.log('response=', response);
          });
        }}
        title={'hello'}
      />
    </View>
  );
};

export default App;
