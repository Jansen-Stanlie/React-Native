/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Calls from '../components/WAcomp/CallsTab';
import Chats from '../components/WAcomp/ChatsTab';
import Contacts from '../components/WAcomp/ContactsTab';

// Main Component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Contacts: [
        {
          name: 'Brendan Eich',
          status: 'I made Javascript !',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/ brendan.jpg',
        },
        {
          name: 'Quincy Larson',
          status: 'Teacher,freecodecamper',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/quincy.jpg',
        },
        {
          name: 'Dan Abramov',
          status: 'I made Redux but You might not need Redux',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/dan.jpg',
        },
        {
          name: 'Douglas Crockford',
          status: 'JS the Good Parts',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/crockford.jpg',
        },
        {
          name: 'Kylie Simpson',
          status: 'I dont know JS & You dont know JS !',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/kyle.jpg',
        },
        {
          name: 'Andrew Clark',
          status: 'lorem ipsum',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/andrew.jpg',
        },
        {
          name: 'Tobias Van Schnieder',
          status: 'Spotify ! Designer !',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/tobias.jpg',
        },
        {
          name: 'Wes Bos',
          status: 'Spotify ! Designer !',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/wes.jpg',
        },
        {
          name: 'Eric Elliot',
          status: 'I m not JS chearleader',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/eric.jpg',
        },
      ],
      Chats: [
        {
          name: 'Quincy Larson',
          time: '8:54 AM',
          message: 'learn to code.',
          icon: 'done',
          isViewed: 'false',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/quincy.jpg',
        },
        {
          name: 'Preethi Kasireddy',
          time: '11:56 AM',
          message: 'viverra pede',
          icon: 'done',
          isViewed: true,
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/preeti.jpg',
        },
        {
          name: 'Douglas Crockford',
          time: '1:34 AM',
          message: 'vehicula consequat',
          icon: 'done-all',
          isViewed: 'false',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/crockford.jpg',
        },
        {
          name: 'Andrew Clark',
          time: '2:12 AM',
          message: 'vehicula',
          icon: 'done-all',
          isViewed: true,
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/andrew.jpg',
        },
        {
          name: 'Brendan Eich',
          time: '11:23 AM',
          message: 'amet',
          icon: 'done',
          isViewed: 'false',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/brendan.jpg',
        },
        {
          name: 'Max Stoiber',
          time: '3:15 PM',
          message: 'quis orci nullam',
          icon: 'done',
          isViewed: 'false',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/mxstbr.jpg',
        },
        {
          name: 'Tobias Van Schnieder',
          time: '5:06 AM',
          message: 'felis sed lacus',
          icon: 'done-all',
          isViewed: true,
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/tobias.jpg',
        },
        {
          name: 'Wes Bos',
          time: '11:28 PM',
          message: 'purus aliquet at',
          icon: 'done-all',
          isViewed: 'false',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/wes.jpg',
        },
        {
          name: 'Tom Occhino',
          time: '12:36 PM',
          message: 'aliquam lacus morbi',
          icon: 'done-all',
          isViewed: true,
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/tom.jpg',
        },
        {
          name: 'Dan Abramov',
          time: '3:05 PM',
          message: 'integer tincid',
          icon: 'done-all',
          isViewed: true,
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/dan.jpg',
        },
      ],
      Calls: [
        {
          name: 'Dan Abramov',
          call: 'call',
          date: '25-Feb',
          time: '5:46 PM',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/dan.jpg',
        },
        {
          name: 'Andrew Clark',
          call: 'videocam',
          date: '31-Jan',
          time: '12:38 PM',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/andrew.jpg',
        },
        {
          name: 'Douglas Crockford',
          call: 'call',
          date: '01-Jul',
          time: '1:33 PM',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/crockford.jpg',
        },
        {
          name: 'Eric Elliot',
          call: 'videocam',
          date: '19-Feb',
          time: '3:59 AM',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/eric.jpg',
        },
        {
          name: 'Kyle Simpson',
          call: 'call',
          date: '12-Apr',
          time: '9:57 AM',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/kyle.jpg',
        },
        {
          name: 'Quincy Larson',
          call: 'videocam',
          date: '13-Aug',
          time: '9:37 PM',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/quincy.jpg',
        },
        {
          name: 'Preethi Kasireddy',
          call: 'call',
          date: '17-Dec',
          time: '4:32 AM',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/preeti.jpg',
        },
        {
          name: 'Tobias Van Schnieder',
          call: 'videocam',
          date: '02-Dec',
          time: '12:56 AM',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/tobias.jpg',
        },
        {
          name: 'Wes Bos',
          call: 'videocam',
          date: '27-Oct',
          time: '9:02 PM',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/wes.jpg',
        },
        {
          name: 'Max Stoiber',
          call: 'call',
          date: '13-Sep',
          time: '6:20 PM',
          image: '/Users/chauhan/Desktop/Whatsapp/App/images/mxstbr.jpg',
        },
      ],
    };
  }
  // componentDidMount = () => {
  //   console.log('Get Data Fetch');
  //   fetch('http://localhost:3000')
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({
  //         Contacts: data.Contacts,
  //         Chats: data.Chats,
  //         Calls: data.Calls,
  //       }),
  //     );
  // };
  render() {
    const {navigation} = this.props;
    console.log('Nav Home', navigation);
    return (
      <View style={{flex: 1}}>
        {/* <Header /> */}
        <ScrollableTabView
          style={{borderColor: '#fff'}}
          // eslint-disable-next-line no-undef
          tabBarUnderlineStyle={(style = {backgroundColor: '#fff'})}
          tabBarBackgroundColor="#075e54"
          tabBarActiveTextColor="#fff"
          tabBarInactiveTextColor="#88b0ac"
          initialPage={1}>
          <Calls
            tabLabel="CALLS"
            CallsData={this.state.Calls}
            navigate={navigation}
            {...this.props}
          />
          <Chats
            tabLabel="CHATS"
            ChatsData={this.state.Chats}
            navigate={navigation}
            {...this.props}
          />
          <Contacts
            tabLabel="CONTACTS"
            ContactsData={this.state.Contacts}
            navigate={navigation}
            {...this.props}
          />
        </ScrollableTabView>
      </View>
    );
  }
}

export default Home;
