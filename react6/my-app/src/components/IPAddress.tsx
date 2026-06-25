import React, { useState, useEffect } from 'react';

export const IPAddress = () => {
  const [ip, setIp] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const uri = "https://api.ipify.org/?format=json";
        
        // Отправляем GET-запрос через fetch
        const response = await fetch(uri);
        
        // Проверяем статус ответа
        if (!response.ok) {
          throw new Error(`HTTP ошибка: ${response.status}`);
        }
        
        // Преобразуем ответ в JSON
        const data = await response.json();
        
        // Сохраняем IP в состояние
        setIp(data.ip);
        console.log('IP адрес:', data.ip);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Произошла ошибка');
        console.error('Ошибка при получении IP:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchIP();
  }, []); // Пустой массив — запрос выполняется один раз при монтировании

  return (
    <div style={{ 
      padding: '1.5rem', 
      backgroundColor: '#f0f8fa', 
      borderRadius: '8px',
      border: '1px solid #c5d5e8'
    }}>
      <h3>Ваш публичный IP-адрес</h3>
      {loading && <p>⏳ Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
      {ip && (
        <p style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          color: '#1a5276',
          margin: '10px 0'
        }}>
          {ip}
        </p>
      )}
    </div>
  );
};