import { MedalistsTable } from "../components/MedalistsTable";
import IceUnityImage from '../assets/img/Marigold_IceUnity.jpg';

export const SyncSkating = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Синхронное фигурное катание</h2>
            <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <figure style={{
                    margin: 0,
                    padding: '1rem',
                    backgroundColor: '#f8faff',
                    borderRadius: '8px',
                    border: '1px solid #e0ecf5',
                    display: 'inline-block'
                }}>
                    <img
                        src={IceUnityImage}
                        alt="Команда из Финляндии «Marigold IceUnity». Элемент «Колесо»."
                        style={{
                            maxWidth: '100%',
                            width: '500px',
                            height: 'auto',
                            borderRadius: '4px',
                            display: 'block',
                            margin: '10px 15px',
                            verticalAlign: 'bottom'
                        }}
                    />
                    <figcaption style={{
                        marginTop: '0.8rem',
                        fontSize: '0.9rem',
                        color: '#555',
                        fontStyle: 'italic'
                    }}>
                        Команда из Финляндии «Marigold IceUnity». Элемент «Колесо». По информации с{' '}
                        <a
                            href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5_%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D0%B8%D0%B5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Википедия
                        </a>
                    </figcaption>
                </figure>
            </div>
            <MedalistsTable />
        </div>
    );
};