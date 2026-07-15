import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../contentful';

export default function SingleRoom() {
  const { slug } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    client.getEntries({
      content_type: 'room',
      'fields.slug': slug,
    })
      .then((response) => setRoom(response.items[0]?.fields))
      .catch(console.error);
  }, [slug]);

  if (!room) return <div>Loading...</div>;

  return (
    <div className="single-room">
      <h1 className="room-title">{room.title}</h1>
      <p className="room-price">Price: ${room.price} per night</p>
      <p className="room-description">{room.description}</p>

      {/* Image Gallery */}
      {room.images && room.images.length > 0 && (
        <div className="room-images">
          {room.images.map((image, index) => (
            <img
              key={index}
              src={image.fields.file.url}
              alt={room.title}
              className="room-image"
            />
          ))}
        </div>
      )}
    </div>
  );
}