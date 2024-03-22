import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { SiteWrapper } from '../site-wrapper/site-wrapper';
import { HomePage } from '../home-page/home-page';
import { About } from '../about/about'

import {AnimatePresence} from 'framer-motion'

const Animatedroutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<SiteWrapper />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
      </AnimatePresence>
  )
}

export default Animatedroutes;