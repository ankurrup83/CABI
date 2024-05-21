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
import { HomeNews } from './HomeNews'
import { HomeFAQ } from './HomeFAQ'
import { HomeBusiness } from './HomeBusiness'
import { HomeVideo } from './HomeVideo'
import { HomeTestimonial } from './HomeTestimonial'
import { HomeDestination } from './HomeDestination'

export default function Home() {
  return (
    <>
    <Header/>
    <HomeSearch/>
    <HomeQuote/>
    <HomeFeature/>
    <HomeFleet />
    <HomeDestination/>
    <HomeCorevalue/>
    <HomeWork />
    <HomeBusiness />
    <HomeVideo />
    <HomeTestimonial/>
    <HomeApp/>
    <HomeNews/>
    <HomeFAQ/>
    <Footer/>
    </>
  
  )
}

