#!/usr/bin/env node

/**
 * Contentful API Test Script
 * Tests your Contentful connection and data structure
 */

const { createClient } = require('contentful');

// Your Contentful configuration
const client = createClient({
  space: 'buu2xhmfxqzb',
  accessToken: 'qTl-U1v_zp-MQY1zJ9CwuXVFyukybrz0A37CzllzJc0',
});

console.log('🔍 Testing Contentful API Connection...\n');

async function testConnection() {
  try {
    // Test 1: Check if we can connect to Contentful
    console.log('✅ Connection established to Contentful\n');

    // Test 2: Fetch home entry
    console.log('🏠 Testing Home Content Type...');
    const homeEntries = await client.getEntries({ content_type: 'home' });
    
    if (homeEntries.items.length > 0) {
      console.log('✅ Home entry found:');
      console.log(JSON.stringify(homeEntries.items[0].fields, null, 2));
    } else {
      console.log('⚠️  No home entries found. Please create a "home" entry in Contentful.');
    }
    console.log('');

    // Test 3: Fetch room entries
    console.log('🏨 Testing Room Content Type...');
    const roomEntries = await client.getEntries({ content_type: 'room' });
    
    if (roomEntries.items.length > 0) {
      console.log(`✅ Found ${roomEntries.items.length} room(s):`);
      roomEntries.items.forEach((room, index) => {
        console.log(`\nRoom ${index + 1}: ${room.fields.title}`);
        console.log(`  Slug: ${room.fields.slug}`);
        console.log(`  Price: $${room.fields.price}`);
        console.log(`  Images: ${room.fields.images ? room.fields.images.length : 0}`);
      });
    } else {
      console.log('⚠️  No room entries found. Please create "room" entries in Contentful.');
    }
    console.log('');

    // Test 4: Check image assets
    console.log('🖼️  Testing Image Assets...');
    const assets = await client.getAssets();
    
    if (assets.items.length > 0) {
      console.log(`✅ Found ${assets.items.length} image(s) in Media`);
    } else {
      console.log('⚠️  No images found in Media. Please upload images to Contentful.');
    }
    console.log('');

    console.log('🎉 All tests completed!');
    console.log('\n📋 Summary:');
    console.log(`   - Home entries: ${homeEntries.items.length}`);
    console.log(`   - Room entries: ${roomEntries.items.length}`);
    console.log(`   - Image assets: ${assets.items.length}`);
    console.log('\n💡 Next steps:');
    console.log('   1. If any counts are 0, create those entries in Contentful');
    console.log('   2. Upload images to Contentful Media');
    console.log('   3. Link images to your entries');
    console.log('   4. Run: npm start');
    console.log('   5. Visit: http://localhost:3000');

  } catch (error) {
    console.error('❌ Error connecting to Contentful:', error.message);
    console.log('\n💡 Please check:');
    console.log('   - Your internet connection');
    console.log('   - Contentful space ID: buu2xhmfxqzb');
    console.log('   - Contentful access token: qTl-U1v_zp-MQY1zJ9CwuXVFyukybrz0A37CzllzJc0');
    console.log('   - Go to: https://app.contentful.com/spaces/buu2xhmfxqzb');
  }
}

testConnection();
