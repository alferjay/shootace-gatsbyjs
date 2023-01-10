import * as React from 'react'
import Header from './header/header.js'
import * as styles from './layout.module.css'
import Footer from './footer/footer'

const Layout = ({children})=> {
  return(
    <div className={styles.mainContainer}>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout