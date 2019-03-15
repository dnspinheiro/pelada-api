const firebase_admin = require('firebase-admin');

// var serviceAccount = require('functions/pelada-firebase.json');
// firebase_admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://pelada-85ed8.firebaseio.com"
// });
firebase_admin.initializeApp();

// firebase_admin.initializeApp({
//     credential: firebase_admin.credential.cert({
//     projectId: 'pelada-85ed8',
//     clientEmail: 'foo@pelada-85ed8.iam.gserviceaccount.com',
//     privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCRqOI15bvzAZj2\ns3kDd9mef4TJ9D47p5X+Ho1ac0ibzBQVZsOod39U0qm7QvPCltmSQktE82lsUWtA\nbhkuTAZ+j+hBX+8Y8eSNF1H2YpTqw1R2ScLux0mgzytp4RpRw+gRoapfVE/NOzE2\nm9YF1HGbaoWLL+pn/mpEF8f+5fFhge11HTfYAM7cmEqyyYVJeneBkwAKJUIzqJJL\nHVt+nUM3sFt349LlY2cuDf+sMCiAMJLvYXh6cRQQbHZkm9BhIxdAZw3XDumWku6P\n63Gh7opPF2IeKxW0F58nIwWz0XNXsaJzUYIsRS7Hbc9C9KRyWCov/DUhlsMcTihi\ndwE45YBPAgMBAAECggEAKuV+LRpJpjC3wButzVgr9jIexK0R8NaTZUHRJiyiWwOY\nfI8FmyUKEkxyIQyAJjPvwlOUwCshRn2Z5OEnuEs6dGZkI3ChxQpj4StXf4Sbz6GT\ny7xAVLrLE7k/U1CwRBk6TIr8VlPJpqrCfQ8a0h+1D2ypBIspcNPrrr8ELqzAUBMW\nKEeXEMPT1j+nNuqFempbuKKqv5nLZKohF4aphh+g7T2QLn1N6DYrhZ2emVgJDBH9\nOoxtg5+0vjeGuzcdBrKSOX/5+F9kKFDH9O2L/GkLXYVEalzf6UW4Ss13QnPlN7a9\nPdqv16L+EBCONEUryXmISjp55eqIav04Dz2RxeQZNQKBgQDJhz+opIF7ZVMGmdoN\n8A28lAMQ5Aw0xHL7/veoHjM4hkQ0069xdApADg9Zul5nia/UbQaU7CqsWRBPMPS0\nzR4eLhLW1NaWN37ZcxLHXwJU7J9FajS2qw4Dio21O7kBuvkMYrxMZf77nCw033rQ\nz5j9IAOaF5vKEJNFKGLl7Z17NQKBgQC5B85vF1bqjCKD2yfYiOexAAHW6YBKyzUc\n4l0/z6FKue5vyomYkT2DrvAdYULKSuupGcspDtUesV4ktio+qDgUbW3vGbSidGan\nPrc288UaVrPM8FKUCTHozPdwm9Ao7mF++JiVRuczfkDqmrcPCvazrJ71uBcFhS3d\neIsOoKf58wKBgEAdSUFr5M3PNJTbCaZ5gsVGCZusEb4P6c0GFuBji0QmYzizSBO+\nKSyrzHJtem9SPKBGd1uVrxXZ1/h5yMBkqXpMii3S1NpBmZewpn7LWUCPbzR0T4T1\n8qVpxR+tenR0eZtZJjLgGDkQPHgtyTL5eOC++KZjcGrezxund59S81EpAoGAES6+\nZuad9a4JzoDdlGgyS+eaRCDu/wMb7ZC/5Bsd+ViG4e7HFFn4gnAOcEwF7c9DTzLM\nAQYVmIIUIgigp6zreEopOVkDw0pX9hQG452DokyG6fMvV/v6nIncOKLfk81/VFE1\nqjcpZUjGMoMnmMgF3O2c3Wi5CpQxjC2TjEozDy0CgYBwkYQFdC0rSdtV+Kur9Ok+\nvhYW2LLo2Hij1Ed2/sxOk3zk0bYn2GF45ALcPGPPFrQIVXBiPQpI8dIb/rCcxRuM\nc09SLe828XCnRgAqHHRKqL7VmAqckfvrSrWqKRX1F1UWeHk99c+8LrSGPNrd7qNZ\nMgNXZ5EHeOMjPxe3Smn5BQ==\n-----END PRIVATE KEY-----\n'
//   }),
//     databaseURL: "https://pelada-85ed8.firebaseio.com"
// });

module.exports = firebase_admin;