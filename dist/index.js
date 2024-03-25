(function () {
    'use strict';

    const baseUrl = '/japanese-player' ;
    const subtitles = [
        {
            src: `${baseUrl}/src/mock/video_subs_ru.vtt`,
            srclang: 'ru',
            label: 'Русский',
        },
        {
            src: `${baseUrl}/src/mock/video_subs_jp.vtt`,
            srclang: 'jpn',
            label: '日本語',
        }
    ];

    const handleSubtitlesTokenClick = (token) => {
        alert(token);
    };
    const japaneseVideoPlayer = document.createElement('japanese-video-player');
    japaneseVideoPlayer.src = `${baseUrl}/src/mock/Boku dake ga Inai Machi 01.webm`;
    japaneseVideoPlayer.subtitles = subtitles;
    japaneseVideoPlayer.handleTokenClick = handleSubtitlesTokenClick;
    document.body.appendChild(japaneseVideoPlayer);

})();
//# sourceMappingURL=index.js.map
