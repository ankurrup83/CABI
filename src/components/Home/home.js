import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { HomeSearch } from './HomeSearch'
import { HomeQuote } from './HomeQuote'
import { HomeFeature } from './HomeFeature'
import { HomeFleet } from './HomeFleet'
import { HomeCorevalue } from './HomeCorevalue'
import { HomeWork } from './HomeWork'
import { HomeApp } from './HomeApp'

export default function Home() {
  return (
    <>
    <Header/>
    <HomeSearch/>
    <HomeQuote/>
    <HomeFeature/>
    <HomeFleet/>
    <HomeCorevalue/>
    <HomeWork/>
    <HomeApp/>

    <Footer/>
    </>
  
  )
}

