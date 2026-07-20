# 🏖️ Beach Resort Contentful Setup Guide

## 🎯 Overview

Your React app is now properly configured to fetch data from Contentful. This guide will help you set up your Contentful space correctly.

## 🔑 Your Contentful Credentials

```javascript
// src/contentful.js
space: 'YOURCONTENTFULSPACEID'
accessToken: 'YOURACCESSTOKEN'
```


## 📋 Step 1: Create Content Types

### Content Type 1: `home`

**Fields:**
- `title` (Text, short text)
- `description` (Text, long text)
- `heroImage` (Media, single)

**Example Entry:**
```json
{
  "title": "Welcome to Beach Resort",
  "description": "Luxury beachfront accommodations with stunning ocean views. Experience paradise at our exclusive resort.",
  "heroImage": {
    "fields": {
      "file": {
        "url": "//images.ctfassets.net/buu2xhmfxqzb/123abc/hero-image.jpg"
      }
    }
  }
}
```

### Content Type 2: `room`

**Fields:**
- `title` (Text, short text) - e.g., "Deluxe Ocean View"
- `slug` (Text, short text) - e.g., "deluxe-ocean-view"
- `price` (Number, integer)
- `description` (Text, long text)
- `images` (Media, multiple) - Room photos
- `type` (Text, short text) - Optional: "single", "double", "family", "presidential"
- `capacity` (Number, integer) - Optional: number of guests
- `size` (Number, integer) - Optional: room size in sq ft
- `pets` (Boolean) - Optional: pet-friendly
- `breakfast` (Boolean) - Optional: includes breakfast
- `featured` (Boolean) - Optional: featured room

**Example Entry:**
```json
{
  "title": "Deluxe Ocean View",
  "slug": "deluxe-ocean-view",
  "price": 299,
  "description": "Spacious room with breathtaking ocean views, king-size bed, and private balcony.",
  "images": [
    {
      "fields": {
        "file": {
          "url": "//images.ctfassets.net/buu2xhmfxqzb/456def/room1.jpg"
        }
      }
    },
    {
      "fields": {
        "file": {
          "url": "//images.ctfassets.net/buu2xhmfxqzb/789ghi/room1-bath.jpg"
        }
      }
    }
  ],
  "type": "double",
  "capacity": 2,
  "size": 450,
  "pets": false,
  "breakfast": true,
  "featured": true
}
```

## 🖼️ Step 2: Upload Images

1. Go to **Media** section in Contentful
2. Click **Add asset**
3. Upload all your room images:
   - room-1.jpeg through room-12.jpeg
   - details-1.jpeg through details-4.jpeg
   - defaultBcg.jpeg (for hero)
4. For each image, add a **Title** and **Description** (optional but recommended)

## 🔗 Step 3: Link Images to Entries

1. Create a `home` entry
2. In the `heroImage` field, click **Add an existing asset** and select your hero image
3. Create multiple `room` entries (at least 3-5 to test)
4. For each room, in the `images` field, add multiple images

## 🚀 Step 4: Test Your App

```bash
cd /home/catwoman/beach-resort
npm start
```

<!-- Your dev environment will be accessible through the following localhost [http://localhost:3000](http://localhost:3000) -->

### What to Check:

1. **Home Page** (`/`)
   - Should show hero image with title/description
   - If no hero image, shows fallback text

2. **Rooms Page** (`/rooms`)
   - Should show grid of room cards
   - Each card has thumbnail, title, and price
   - Clicking a card goes to single room page

3. **Single Room Page** (`/rooms/:slug`)
   - Should show all room details
   - Should show image gallery
   - Should show price and description

## 🐞 Debugging

Open browser console (F12 → Console) to see debug logs:

```javascript
// Home.js
console.log('Home data:', homeData);

// Rooms.js  
console.log('Rooms data:', response.items);

// SingleRoom.js
console.log('Room data:', roomData);
```

### Common Issues:

1. **Blank page?**
   - Check if CSS is loaded (should see styled elements)
   - Check console for errors

2. **No data showing?**
   - Verify Contentful space ID and access token
   - Check if entries exist in Contentful
   - Verify content type names match exactly ('home', 'room')

3. **Images not showing?**
   - Check if images are uploaded to Contentful Media
   - Verify images are linked to entries
   - Check browser console for 404 errors on image URLs

4. **CORS errors?**
   - Go to Contentful Settings → API keys
   - Ensure your domain is allowed (for production)

## 📝 Contentful Best Practices

1. **Use consistent naming:**
   - Content type names: lowercase, singular (e.g., 'room', 'home')
   - Field names: camelCase (e.g., 'heroImage', 'roomType')
   - Entry titles: Title Case (e.g., "Deluxe Ocean View")

2. **Organize with tags:**
   - Add tags to entries for filtering

3. **Use draft/published:**
   - Create entries as drafts
   - Publish when ready

4. **Set up webhooks:**
   - For automatic rebuilds when content changes

## 🎨 Optional Enhancements

### Add More Fields to Room:
```javascript
// In SingleRoom.js, add these to display:
{room.type && <p>Type: {room.type}</p>}
{room.capacity && <p>Capacity: {room.capacity} guests</p>}
{room.size && <p>Size: {room.size} sq ft</p>}

// Add extras list:
{room.extras && room.extras.length > 0 && (
  <div className="room-extras">
    <h3>Extras</h3>
    <ul>
      {room.extras.map((extra, index) => (
        <li key={index}>{extra}</li>
      ))}
    </ul>
  </div>
)}
```

### Add Filtering to Rooms Page:
```javascript
// In Rooms.js, add filter by type:
const [filter, setFilter] = useState('all');

const filteredRooms = filter === 'all' 
  ? rooms 
  : rooms.filter(room => room.fields.type === filter);

// Add filter buttons:
<div className="room-filters">
  <button onClick={() => setFilter('all')}>All</button>
  <button onClick={() => setFilter('single')}>Single</button>
  <button onClick={() => setFilter('double')}>Double</button>
  <button onClick={() => setFilter('family')}>Family</button>
</div>
```

## 📚 Resources

- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Contentful React Tutorial](https://www.contentful.com/developers/docs/tutorials/general/get-started-with-contentful-and-react/)
- [Contentful Images API](https://www.contentful.com/developers/docs/reference/content-delivery-api/#/reference/links)

---

**Need help?** Check the debug logs in your browser console and verify your Contentful entries match the expected structure above.
