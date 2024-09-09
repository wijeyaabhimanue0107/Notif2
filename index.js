import admin from 'firebase-admin';
import { readFile } from 'fs/promises';
import path from 'path';

process.env.GOOGLE_APPLICATION_CREDENTIALS;

const deviceToken = 'e1fM-m7lStmYBjPRwaZwcK:APA91bH3cLRHwwjwOokm-1nxQv4h8q5rSFiCV9211U9h3rghIcuCZ2gpjkmTnRKsQgDbbB-iOYKz3T4ezRda1lpsEUD3CvFSbfbFUwKx4JfsxwohLKHu7h1fTsRktclnsuYeWzKpww-y';

const serviceAccountPath = path.resolve('D:/Node/Notif2/Notif2/fcm-compose-3a20d-firebase-adminsdk-mpeil-ab3a22d215.json');

const serviceAccount = JSON.parse(
  await readFile(serviceAccountPath, 'utf-8')
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const message = {
  notification: {
    title: 'Notification!',
    body: 'This is another Smartzi Alart',
  },
  token: deviceToken,
};


admin.messaging().send(message)
  .then((response) => {
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.error('Error sending message:', error);
  });