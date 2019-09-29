import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic07 from '../assets/images/pic07.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/pic11.jpg'
import pic12 from '../assets/images/pic12.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title='ЗАО "Александраудит" - бухгалтерская поддержка бизнеса'
                    meta={[
                        { name: 'description', content: ' Мы осуществляеи бухгалтерскую и налоговую поддержку белорусских и зарубежных предприятий' },
                        { name: 'keywords', content: 'Аудиит, бухгалтерские услуги' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>NТекст с вступлением</h2>
                            </header>
                            <p>Предоставьте ведение бухгалтерского учета Вашей компании опытным профессионалам. </p>
                      
                        </div>
                    </section>
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic07})`}}>
                            <header className="major">
                                <h3>Aliquam</h3>
                                <p>Предоставьте ведение бухгалтерского учета Вашей компании опытным профессионалам.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic08})`}}>
                            <header className="major">
                                <h3>Tempus</h3>
                                <p>feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic09})`}}>
                            <header className="major">
                                <h3>Magna</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic10})`}}>
                            <header className="major">
                                <h3>Ipsum</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic11})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic12})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                        </article>
                    </section>
                    
                </div>

            </Layout>
        )
    }
}

export default HomeIndex