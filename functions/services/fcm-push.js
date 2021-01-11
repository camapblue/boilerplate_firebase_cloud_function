const getAdminFirebase = require('../util/common');

const messaging = getAdminFirebase().messaging();

/**
* payload standard
* {
*   notification: {
*     title: 'Here is the title of notification',
*     body: 'Here is the content of notification'
*   }
* }
*/

const defaultOptions = {
  contentAvailable: true,
  priority: 'high'
}

const sendPushToAll = (payload, options = defaultOptions) => {
  const condition = '!(anytopicyoudontwanttouse in topics)';
  return messaging.sendToCondition(condition, payload, options);
};

const sendPushToDevices = (tokens, payload, options = defaultOptions) => {
  return messaging.sendToDevice(tokens, payload, options);
};

const sendPushToTopic = (topic, payload, options = defaultOptions) => {
  return messaging.sendToTopic(topic, payload, options);
}

const sendPushToCondition = (condition, payload, options = defaultOptions) => {
  return messaging.sendToCondition(condition, payload, options);
}

const buildPayload = (title, content, data = null) => {
  let payload = {
    notification: {
      title,
      body: content
    },
    data: Object.assign({
      click_action: 'FLUTTER_NOTIFICATION_CLICK'
    }, data)
  };
  return payload;
}

const buildCondition = (topics) => {
  let condition = '';
  for (let i = 0 ; i < topics.length ; i++) {
    condition += `'${topics[i]}' in topics`;
    if (i < topics.length - 1) {
      condition += ` && `;
    }
  }
  return condition;
}

module.exports = {
  sendPushToAll,
  sendPushToDevices,
  sendPushToTopic,
  sendPushToCondition,
  buildPayload,
  buildCondition
};
