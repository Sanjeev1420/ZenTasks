import React from 'react'
import Header from './Components/header';
import Main from './Components/mainCmp';
import FeatureHeader from './Components/featureHead';
import {exportDataFH} from './mockData/featureHeadData';
import FeatureDes from './Components/featureDes';
import {exportDataFD} from './mockData/featureDesData';
import UserReview from './Components/userexp';
import {exportusrrwData} from './mockData/UserReview'
import Footer from './Components/footer';
function App() {

  return (
    <>
      <Header/>
      <Main/>
      <FeatureHeader data={exportDataFH()}/>
      <FeatureDes data={exportDataFD()}/>
      <UserReview data={exportusrrwData()}/>
      <Footer/>
    </>
  )
}

export default App
