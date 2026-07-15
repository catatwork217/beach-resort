import React, { useEffect, useState } from 'react';
import client from '../contentful';
import { Link } from 'react-router-dom';

export default function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'room' })
      .then((response) => setRooms(response.items))
      .catch(console.error);
  }, []);

  return (
    <div className="rooms-page">
      <h1 className="rooms-title">Our Rooms</h1>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.sys.id} className="room-card">
            <Link to={`/rooms/${room.fields.slug}`} className="room-link">
              {room.fields.images && room.fields.images[0] && (
                <img
                  src={room.fields.images[0].fields.file.url}
                  alt={room.fields.title}
                  className="room-thumbnail"
                />
              )}
              <div className="room-info">
                <h3 className="room-card-title">{room.fields.title}</h3>
                <p className="room-card-price">${room.fields.price} per night</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}