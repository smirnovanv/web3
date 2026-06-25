import React, { useEffect, useState } from 'react';

interface DateData {
  quarter: number;
  day: string;
  month: string;
  db: string;
  long: string;
  unix: number;
}

export const RandomDate = () => {
  const [firstDate, setFirstDate] = useState<DateData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [dateKey, setDateKey] = useState<string | null>(null);

  const fetchFirstDate = async () => {
    setLoading(true);
    setError(null);
    setFirstDate(null);
    setDateKey(null);

    try {
      const url = 'https://api.lrs.org/random-date-generator';
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ошибка: ${response.status}`);
      }

      const data = await response.json();

      if (data && data.data) {
        // Получаем все ключи дат из объекта data
        const dateKeys = Object.keys(data.data);
        
        if (dateKeys.length === 0) {
          throw new Error('Нет доступных дат');
        }

        // Берем ПЕРВУЮ дату из списка
        const firstKey = dateKeys[0];
        const selectedDate = data.data[firstKey];
        
        setFirstDate(selectedDate);
        setDateKey(firstKey);
      } else {
        throw new Error('Неверный формат ответа от сервера');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
      console.error('Ошибка при получении даты:', err);
    } finally {
      setLoading(false);
    }
  };

      useEffect(() => {
          fetchFirstDate();
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

  return (
    <div style={{
      backgroundColor: '#f0f8fa',
      padding: '20px',
      borderRadius: '12px',
      border: '1px solid #c5d5e8',
      marginTop: '20px',
    }}>
      <h3>Первая дата из списка</h3>

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

      {firstDate && dateKey && (
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #e0ecf5'
        }}>
          <h4 style={{ marginTop: 0, color: '#1a5276' }}>Первая дата из списка</h4>
          
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li>
              <strong>Дата (полная):</strong> {firstDate.long}
            </li>
            <li>
              <strong>Дата (краткая):</strong> {firstDate.db}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};