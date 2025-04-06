if (window.innerWidth > 320) {
    document.body.style.paddingBottom = '30%';
    const container = document.getElementById('container');
    for (let i = 1; i <= 6; i++) {
        const number = document.createElement('div');
        number.setAttribute('class', 'number');
        number.setAttribute('id', `el_${i}`);
        const span_1 = document.createElement('span');
        span_1.textContent = i;
        const span_2 = document.createElement('span');
        span_2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
        number.appendChild(span_1);
        number.appendChild(span_2);
        number.innerHTML += `<svg width="5em" height="5em" viewBox="0 0 44 61" fill="none" xmlns="http://www.w3.org/2000/svg" style = "position : absolute;bottom : 60%;left : 92.3%;">
                                <g filter="url(#filter0_d_9_368)">
                                <path d="M21.5766 11C17.9444 11 15 13.9444 15 17.5766V40.8302C15 41.1521 15.4258 41.2667 15.5874 40.9884L27.2639 20.8789C29.8096 16.4945 26.6464 11 21.5766 11Z" fill="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_9_368" x="0" y="0" width="43.1631" height="60.1457" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="7.5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_368"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_368" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            `
        container.appendChild(number);
    }
    const pos_spans = [2, 11, 12];
    for (let num = 0; num < 3; num++) {
        const span = document.createElement('span');
        span.style.order = pos_spans[0];
        pos_spans.shift()
        container.appendChild(span);
    }
    for (let c of container.children) {
        if (c?.id?.length > 0) {
            c.style.order = getpos(c.id);
        }
    }

}               

function getpos (id) {
    let pos = 255;
    switch(id) {
        case 'el_1':
            pos = 1;
            break;
        case 'to_1_2':
            pos = 5;
            break;
        case 'el_2':
            pos = 9;
            break;
        case 'to_2_3':
            pos = 13;
            break;
        case 'el_3':
            pos = 14;
            break;
        case 'to_3_4':
            pos = 10;
            break;
        case 'el_4':
            pos = 6;
            break;
        case 'to_4_5':
            pos = 3;
            break;
        case 'el_5':
            pos = 4;
            break;
        case 'to_5_6':
            pos = 8;
            break;
        case 'el_6':
            pos = 7;
            break;
    }
    return pos;
}