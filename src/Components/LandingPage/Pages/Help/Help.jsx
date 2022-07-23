import React from 'react'
import {Box} from "@chakra-ui/react"
import HelpNavbar from './HelpNavbar'
import SearchSection from './SearchSection'
import HelpQuestions from './HelpQuestions'
import PromotedArticles from './PromotedArticles'
import Footer from './Footer'

const Help = () => {
  return (
    <Box backgroundColor="#fffdf7">
      <HelpNavbar />
      <SearchSection />
      <HelpQuestions />
      <PromotedArticles />
      <Footer />
    </Box>
  )
}

export default Help