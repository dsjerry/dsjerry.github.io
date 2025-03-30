DarkReader.auto({
    brightness: 100,
    contrast: 90,
    sepia: 10
});

// 初始化播放器
(async function initAplayer() {
    try {
        // 等待一段时间确保组件已经挂载
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const maxRetries = 5;
        let retries = 0;
        
        while (retries < maxRetries) {
            const container = document.getElementById('aplayer-widget');
            if (container) {
                console.log('找到播放器容器，初始化中...');
                const ap = new APlayer({
                    container: container,
                    fixed: false,
                    mini: false,
                    listFolded: true,
                    listMaxHeight: 240,
                    theme: '#242525',
                    volume: 0.4,
                    audio: [
                        {
                            name: 'Sleep Away',
                            artist: 'Bob Acri',
                            url: 'https://6nbrs4hklgyntol2.public.blob.vercel-storage.com/Bob%20Acri%20-%20Sleep%20Away-UuK0BihmOO5kok71cds1D9cvkpbNtB.flac',
                            cover: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.8HUD0pY2ZYO0sQGSzgaZngHaHZ?rs=1&pid=ImgDetMain'
                        },
                        {
                            name: 'Yesterday',
                            artist: 'Aventure',
                            url: 'https://6nbrs4hklgyntol2.public.blob.vercel-storage.com/yesterday-9w19QW4cwQc4R2h1WOzEkvbYmsydrv.mp3',
                            cover: 'https://cdn.bensound.com/image/cover/aventure-longnight-X2.webp'
                        },
                        {
                            name: 'Wedding Bell',
                            artist: 'Depapepe',
                            url: 'https://6nbrs4hklgyntol2.public.blob.vercel-storage.com/Depapepe%20%28%E3%83%87%E3%83%91%E3%83%9A%E3%83%9A%29%20-%20Wedding%20Bell%20%28%E5%A9%9A%E7%A4%BC%E7%9A%84%E9%92%9F%E5%A3%B0%29%20%5Bmqms%5D-23xM5SUl6Iy3nMjNLcY3vHFkpxUYVJ.mp3',
                            cover: 'https://www.poppianohk.org/pic/1JJ2eOkplMsAyrdO4OTYrU.jpg'
                        },
                    ]
                });

                const colorThief = new ColorThief();
                const image = new Image();
                const xhr = new XMLHttpRequest();
                const setTheme = (index) => {
                    if (!ap.list.audios[index].theme) {
                        xhr.onload = function(){
                            let coverUrl = URL.createObjectURL(this.response);
                            image.onload = function(){
                                let color = colorThief.getColor(image);
                                ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
                                URL.revokeObjectURL(coverUrl)
                            };
                            image.src = coverUrl;
                        }
                        xhr.open('GET', ap.list.audios[index].cover, true);
                        xhr.responseType = 'blob';
                        xhr.send();
                    }
                };
                setTheme(ap.list.index);
                ap.on('listswitch', (index) => {
                    setTheme(index);
                });


                console.log('播放器初始化完成');
                return;
            }
            console.log(`等待播放器容器...（第 ${retries + 1} 次尝试）`);
            await new Promise(resolve => setTimeout(resolve, 1000));
            retries++;
        }
        console.error('播放器容器未找到，已达到最大重试次数');
    } catch (error) {
        console.error('播放器初始化失败:', error);
    }
})();