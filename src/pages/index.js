import * as React from "react"
import Layout from '../component/layout/layout.js'
import heroImage from '../images/hero.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <section className="ace-hero">
        <div className="hero-image-bg">
          <img src={heroImage} alt="ShootAce hero"/>
        </div>
        <div className="container">
          <div className="row content">
            <div className="col">
              <div class="title">We help you capture <br/>your great memories </div>
              <div className="ace-line">
                <span/>
                <span/>
              </div>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and <br/>publishing industries for previewing layouts and visual mockups.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
