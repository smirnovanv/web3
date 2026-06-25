import { useEffect, useState } from 'react';

export const YandexGeocoder = () => {
  const [address, setAddress] = useState('Иваново Рабфаковская 34');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // ВСТАВЬТЕ СЮДА НОВЫЙ КЛЮЧ
  const API_KEY = '4b75dea2-79ec-41bb-ae01-5d46185f02df';

  useEffect(() => {
    // Если уже загружено — ничего не делаем
    if (isLoaded || (window as any).ymaps) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${API_KEY}&lang=ru_RU`;
    script.async = true;
    script.defer = true;

    script.onload = () => setIsLoaded(true);
    script.onerror = () => setError('Не удалось загрузить JS API Яндекса');

    document.head.appendChild(script);

    return () => {
      // При размонтировании можно удалить скрипт (опционально)
      document.head.removeChild(script);
    };
  }, [API_KEY]);

  const handleSearch = async () => {
    if (!address.trim()) return;
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const ymaps = (window as any).ymaps;
      if (!ymaps) throw new Error('JS API ещё не загружен');

      const response = await ymaps.geocode(address, { results: 5 });
      console.log('Геокодер ответил:', response);
      const collection = response.geoObjects;
      console.log('Количество найденных объектов:', collection.getLength());
      const parsed: any[] = [];

      collection.each((obj: any) => {
        const coords = obj.geometry.getCoordinates(); // [широта, долгота]
        parsed.push({
          name: obj.properties.get('name'),
          coords: coords,
          country: obj.properties.get('metaDataProperty')?.GeocoderMetaData?.AddressDetails?.Country?.CountryName,
          locality: obj.properties.get('metaDataProperty')?.GeocoderMetaData?.AddressDetails?.Locality?.LocalityName,
        });
      });

      setResults(parsed);
    } catch (err: any) {
      setError(err?.message || 'Ошибка геокодирования');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h3>Простой геокодер (JS API)</h3>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Введите адрес"
          style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          disabled={!isLoaded}
        />
        <button
          onClick={handleSearch}
          disabled={loading || !isLoaded}
          style={{ padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {loading ? 'Поиск...' : 'Найти'}
        </button>
      </div>

      {!isLoaded && <p style={{ color: '#666' }}>Загрузка JS API Яндекса…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {results.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {results.map((r, i) => (
            <li
              key={i}
              style={{ border: '1px solid #eee', padding: '10px', marginBottom: '8px', borderRadius: '4px' }}
            >
              <strong>{r.name}</strong><br />
              Координаты: {r.coords[0].toFixed(6)}, {r.coords[1].toFixed(6)}<br />
              {r.locality && `Город: ${r.locality}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
