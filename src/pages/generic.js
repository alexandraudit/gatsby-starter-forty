import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Цены на бухгалтерские услуги</h1>
                    </header>
                    
                    <div className="table-wrapper">
                        <table className="alt">
                            <thead>
                                <tr>
                                    <th>Вид деятельности / Юрлицо</th>
                                    <th>Упрощенная система налогообложения<br/> с НДС / без НДС</th>
                                    <th>Общая система налогообложения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Вновь созданные предприятия на время организационного периода</td>
                                    <td>50 / 50</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>Индивидуальные предприниматели	</td>
                                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                    <td>от 100</td>
                                </tr>
                                <tr>
                                    <td>Юридические лица</td>
                                    <td> Morbi faucibus arcu accumsan lorem.</td>
                                    <td>от 250</td>
                                </tr>
                                <tr>
                                    <td>Восстановление бухгалтерского учета (за месяц)</td>
                                    <td>Vitae integer tempus condimentum.</td>
                                    <td>от 150</td>
                                </tr>
                            </tbody>
         
                        </table>

                        <h4>В стоимость услуг входит:</h4>
                        <ul>
                            <li>Ведение бухгалтерского учета в программе 1С на основании предоставленных Заказчиком первичных учетных документов;</li>
                            <li>Расчет заработной платы (в т.ч. отпускных, больничных) и ведение персонифицированного учета    </li>
                            <li>Составление и сдача отчетности в ИМНС, ФСЗН, Белгосстрах и органы статистики</li>
                            <li>Базовый кадровый учет</li>
                            <li>Составление годовой отчетности</li>
                            <li>Консультации по текущей деятельности</li>

                        </ul>

                        <blockquote>Цены приведены в USD<br/><br/>Мы с пониманием относимся к каждому клиенту и имеем лояльную систему ценообразования.<br/>  Стоимость бухгалтерских услуг в каждом случае определяется индивидуально</blockquote>
                        <span className="image main"><img src={pic11} alt="" /></span>

                    </div>
                </div>
                
            </section>
    
        </div>

    </Layout>
)

export default Generic