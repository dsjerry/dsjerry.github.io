DarkReader.auto({
    brightness: 100,
    contrast: 90,
    sepia: 10
});


setTimeout(() => {
   const container = document.createElement('div');
   container.setAttribute('id', 'aplayer');
   document.body.appendChild(container);

   const ap = new APlayer({
    container: container,
    mini: true,
    fixed: true,
    audio: [
        {
            name: 'Wedding Bell',
            artist: 'Depapepe',
            url: 'https://6nbrs4hklgyntol2.public.blob.vercel-storage.com/Depapepe%20%28%E3%83%87%E3%83%91%E3%83%9A%E3%83%9A%29%20-%20Wedding%20Bell%20%28%E5%A9%9A%E7%A4%BC%E7%9A%84%E9%92%9F%E5%A3%B0%29%20%5Bmqms%5D-23xM5SUl6Iy3nMjNLcY3vHFkpxUYVJ.mp3',
            cover: 'https://www.poppianohk.org/pic/1JJ2eOkplMsAyrdO4OTYrU.jpg'
        },
        {
        name: 'Yesterday',
        artist: 'Aventure',
        url: 'https://6nbrs4hklgyntol2.public.blob.vercel-storage.com/yesterday-9w19QW4cwQc4R2h1WOzEkvbYmsydrv.mp3',
        cover: 'https://cdn.bensound.com/image/cover/aventure-longnight-X2.webp'
    },
    ]
});

}, 1000);