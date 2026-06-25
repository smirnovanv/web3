import React, { useState, useEffect } from 'react';

interface CountryData {
    name: string;
    capital: string;
    region: string;
    code: string;
}

export const CountryInfo = () => {
    const [countryData, setCountryData] = useState<CountryData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const API_key = 'f4f48c1c051da31aa6c891ade56590a4';
    const capitalName = 'London';

    const fetchCountryData = async () => {
        setLoading(true);
        setError(null);
        setCountryData(null);

        try {
            const url = `https://api.countrylayer.com/v2/capital/${encodeURIComponent(capitalName)}?access_key=${API_key}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP ошибка: ${response.status}`);
            }

            const data = await response.json();

            if (data && data.length > 0) {
                const country = data[0];
                setCountryData({
                    name: country.name,
                    capital: country.capital,
                    region: country.region,
                    code: country.alpha2Code
                });
                console.log('Данные о стране:', country);
            } else {
                throw new Error('Страна не найдена');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Произошла ошибка');
            console.error('Ошибка при получении данных:', err);
        } finally {
            setLoading(false);
        }
    };

    // Загружаем флаг с использованием createAttribute
    const loadFlag = (flagCode: string) => {
        const flagUrl = `https://flagcdn.com/48x36/${flagCode}.png`;
        const flagContainer = document.getElementById('flag-container');
        if (!flagContainer) return;

        // Очищаем контейнер
        flagContainer.innerHTML = '';

        // Создаем элемент img
        const img = document.createElement('img');

        // Создаем атрибут src с помощью createAttribute
        const srcAttr = document.createAttribute('src');
        srcAttr.value = flagUrl;
        img.setAttributeNode(srcAttr);

        // Создаем атрибут alt
        const altAttr = document.createAttribute('alt');
        altAttr.value = `Флаг ${countryData?.name || 'страны'}`;
        img.setAttributeNode(altAttr);

        // Добавляем стили для уменьшения изображения
        const styleAttr = document.createAttribute('style');
        styleAttr.value = 'max-width: 200px; height: auto; border: 1px solid #c5d5e8; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);';
        img.setAttributeNode(styleAttr);

        flagContainer.appendChild(img);
    };

    // Загружаем флаг, когда данные получены
    useEffect(() => {
        if (countryData && countryData.code) {
            loadFlag(countryData.code.toLowerCase());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryData]);

    return (
        <div style={{
            backgroundColor: '#f0f8fa',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid #c5d5e8',
            marginTop: '20px'
        }}>
            <div>
                <strong>Историческая справка:</strong> Фигурное катание впервые было включено
                в программу Олимпийских игр в <strong>1908 году</strong> в Лондоне
                (Великобритания). С тех пор этот вид спорта является неотъемлемой частью
                зимних Олимпийских игр.
            </div>
            <h3>Информация о стране (Великобритания)</h3>
            <button
                onClick={fetchCountryData}
                disabled={loading}
                style={{
                    padding: '10px 24px',
                    fontSize: '16px',
                    backgroundColor: loading ? '#ccc' : '#4a6fa5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    marginBottom: '20px',
                    transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => {
                    if (!loading) {
                        e.currentTarget.style.backgroundColor = '#3a5a8a';
                    }
                }}
                onMouseLeave={(e) => {
                    if (!loading) {
                        e.currentTarget.style.backgroundColor = '#4a6fa5';
                    }
                }}
            >
                {loading ? 'Загрузка...' : 'Получить данные о стране'}
            </button>

            {error && (
                <div style={{
                    color: '#721c24',
                    padding: '12px',
                    backgroundColor: '#f8d7da',
                    borderRadius: '6px',
                    border: '1px solid #f5c6cb',
                    marginBottom: '15px'
                }}>
                    Ошибка: {error}
                </div>
            )}

            {countryData && (
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    border: '1px solid #e0ecf5',
                    marginTop: '10px'
                }}>
                    <h4 style={{ marginTop: 0, color: '#1a5276' }}>📊 Данные о стране</h4>

                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                        <li>
                            <strong>a. Полное наименование:</strong> {countryData.name}
                        </li>
                        <li>
                            <strong>b. Столица:</strong> {countryData.capital || 'Не указана'}
                        </li>
                        <li>
                            <strong>c. Регион:</strong> {countryData.region || 'Не указан'}
                        </li>
                    </ul>
                </div>
            )}
            <div id="flag-container" style={{ marginTop: '15px', minHeight: '60px' }}></div>
        </div>
    );
};