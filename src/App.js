import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';

import LocalAPi from './pages/LocalAPI';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 10000);
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <LocalAPi />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
