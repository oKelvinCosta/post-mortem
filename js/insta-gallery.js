
jQuery(function ($) {

    const ACCESS_TOKEN = '1726588808.ee91bef.7fd14659c7b7470d9886da2c20d7a612';

    $.ajax({
        'method': 'GET',
        'url': `https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}`,
        'success': (api) => {

            if (api.meta.code === 200) {
                let json = api.data;

                // console.log(json);

                for (var i = 0; i < 6; i++) {

                    let post = json[i];

                    let text = post.caption.text;
                    let img = post.images.low_resolution.url;
                    let img_w = post.images.low_resolution.width;
                    let img_h = post.images.low_resolution.height;
                    let link = post.link;
                    let likes = post.likes;

                    let resume = {
                        text,
                        img,
                        img_w,
                        img_h,
                        link,
                        likes
                    };

                    $('#insta-gallery').append(`
                        <li class="insta-box">
                            <a href="${resume.link}">
                                <img src="${resume.img}" alt="${resume.text}">
                            </a>
                        </li>
                    `);
                }


            }

        },
        'error': () => {

            $('#insta-wrap').hide('fast');

        }
    });

});