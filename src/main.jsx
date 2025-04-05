import { bootstrapCameraKit } from "@snap/camera-kit";

console.log('Iniciando filtro')

async function iniciarCameraKit() {

  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzI2MTY3ODgwLCJzdWIiOiJhZTUwMjhjYy0yODY5LTRkZGItODA5YS01YTk0OWFhN2UxZjh-U1RBR0lOR35mMTRhYjAwMy0wNzliLTRmOTEtYTFjZi1iYWQ1MjhhN2NjNWIifQ.ab6GbBUpKPnfWpqp9DRW0C4HUfwk4laumSTCu8NetEQ'
  });

  console.log('API CARREGADA');

  const liveRenderTarget = document.getElementById('canvas');
  const session = await cameraKit.createSession({ liveRenderTarget })


  const mediaStrem = await navigator.mediaDevices.getUserMedia({
      video: true
  })

  await session.setSource(mediaStrem);
  await session.play();


  const lensId = '8664fa86-abb0-4074-8ed7-47d4fda0c2c6';
  const groupId = '0cab842a-6538-4e76-b6d5-3b413c13ccec';
  const lens = await cameraKit.lensRepository.loadLens(lensId, groupId);
  session.applyLens(lens);


 

}

iniciarCameraKit(); 