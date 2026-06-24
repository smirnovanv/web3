import './MedalistsTable.css';

export const MedalistsTable = () => {
    return (
        <div className="medalists-container">
            <div className="table-wrapper">
                <h2>Чемпионаты мира по синхронному фигурному катанию</h2>
                <table className="medalists-table">
                    <thead>
                        <tr>
                            <th colSpan={5} style={{
                                padding: '0.8rem 1rem',
                                backgroundColor: '#1a5276',
                                color: 'white',
                                fontSize: '1.3rem',
                                fontWeight: '700',
                                textAlign: 'center',
                                border: '1px solid #1a5276'
                            }}>
                                Медалисты чемпионатов мира по синхронному катанию
                            </th>
                        </tr>
                        <tr>
                            <th>Год</th>
                            <th>Место проведения</th>
                            <th>Золото</th>
                            <th>Серебро</th>
                            <th>Бронза</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2018</td>
                            <td>Стокгольм</td>
                            <td>Marygold IceUnity</td>
                            <td>Team Surprise</td>
                            <td>«Парадиз» (Санкт-Петербург)</td>
                        </tr>
                        <tr>
                            <td>2017</td>
                            <td>Колорадо-Спрингс</td>
                            <td>«Парадиз» (Санкт-Петербург)</td>
                            <td>Marygold IceUnity</td>
                            <td>NEXXICE</td>
                        </tr>
                        <tr>
                            <td>2016</td>
                            <td>Будапешт</td>
                            <td>«Парадиз» (Санкт-Петербург)</td>
                            <td>Rockettes</td>
                            <td>Haydenettes</td>
                        </tr>
                        <tr>
                            <td>2015</td>
                            <td>Гамильтон</td>
                            <td>NEXXICE</td>
                            <td>Marygold IceUnity</td>
                            <td>«Парадиз» (Санкт-Петербург)</td>
                        </tr>
                        <tr>
                            <td>2014</td>
                            <td>Курмайор</td>
                            <td>Marigold IceUnity</td>
                            <td>NEXXICE</td>
                            <td>Rockettes</td>
                        </tr>
                        <tr>
                            <td>2013</td>
                            <td>Бостон</td>
                            <td>Team Unique</td>
                            <td>NEXXICE</td>
                            <td>Haydenettes</td>
                        </tr>
                        <tr>
                            <td>2012</td>
                            <td>Гётеборг</td>
                            <td>Team Surprise</td>
                            <td>NEXXICE</td>
                            <td>Haydenettes</td>
                        </tr>
                        <tr>
                            <td>2011</td>
                            <td>Хельсинки</td>
                            <td>Rockettes</td>
                            <td>Marigold IceUnity</td>
                            <td>Haydenettes</td>
                        </tr>
                        <tr>
                            <td>2010</td>
                            <td>Колорадо-Спрингс</td>
                            <td>Rockettes</td>
                            <td>Marigold IceUnity</td>
                            <td>Haydenettes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};