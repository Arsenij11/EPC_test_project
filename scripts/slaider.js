if (window.innerWidth <= 320) {
    document.body.style.paddingBottom = '6%';
    const header = document.querySelector('header');
    header.querySelector('#loren_ipsum').remove();
    header.querySelector('#loren_ipsum_end').remove();
    header.innerHTML +=  `<svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 0.99999C0.5 0.778976 0.587798 0.567015 0.744078 0.410734C0.900358 0.254454 1.11232 0.166656 1.33333 0.166656H24.6667C24.8877 0.166656 25.0996 0.254454 25.2559 0.410734C25.4122 0.567015 25.5 0.778976 25.5 0.99999C25.5 1.221 25.4122 1.43296 25.2559 1.58925C25.0996 1.74553 24.8877 1.83332 24.6667 1.83332H1.33333C1.11232 1.83332 0.900358 1.74553 0.744078 1.58925C0.587798 1.43296 0.5 1.221 0.5 0.99999ZM0.5 11C0.5 10.779 0.587798 10.567 0.744078 10.4107C0.900358 10.2545 1.11232 10.1667 1.33333 10.1667H24.6667C24.8877 10.1667 25.0996 10.2545 25.2559 10.4107C25.4122 10.567 25.5 10.779 25.5 11C25.5 11.221 25.4122 11.433 25.2559 11.5892C25.0996 11.7455 24.8877 11.8333 24.6667 11.8333H1.33333C1.11232 11.8333 0.900358 11.7455 0.744078 11.5892C0.587798 11.433 0.5 11.221 0.5 11ZM1.33333 20.1667C1.11232 20.1667 0.900358 20.2545 0.744078 20.4107C0.587798 20.567 0.5 20.779 0.5 21C0.5 21.221 0.587798 21.433 0.744078 21.5892C0.900358 21.7455 1.11232 21.8333 1.33333 21.8333H24.6667C24.8877 21.8333 25.0996 21.7455 25.2559 21.5892C25.4122 21.433 25.5 21.221 25.5 21C25.5 20.779 25.4122 20.567 25.2559 20.4107C25.0996 20.2545 24.8877 20.1667 24.6667 20.1667H1.33333Z" fill="white"/>
    </svg>`;
    header.setAttribute('class', 'smallheader');
    document.getElementById('container').querySelectorAll('svg').forEach((el) => el.remove());
    document.getElementById('container').setAttribute('id', 'container_mobile');
    const svg = header.querySelector('svg');
    
    svg.addEventListener('click', (event) => {
            whiteboard();     
        });
    
    const container = document.getElementById('container_mobile');
        for (let i = 1; i <= 6; i++) {
            const number = document.createElement('div');
            number.setAttribute('class', 'number_mobile');
            number.setAttribute('id', `el_${i}`);
            const span_1 = document.createElement('span');
            span_1.textContent = i;
            const span_2 = document.createElement('span');
            span_2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
          
            number.innerHTML += `<svg width="3em" height="3em" viewBox="0 0 32 67" fill="none" xmlns="http://www.w3.org/2000/svg" style = "position : absolute; top : -13%; left : 90.3%; z-index : 10000">
                                    <g filter="url(#filter0_d_9_430)">
                                    <path d="M23.0455 11C18.6021 11 15 14.6021 15 19.0455V47.566C15 47.9598 15.5212 48.0998 15.7185 47.759L30.0083 23.0766C33.1136 17.7129 29.2432 11 23.0455 11Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_9_430" x="0" y="0" width="46.103" height="66.9518" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="7.5"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_430"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_430" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>`  
            number.appendChild(span_1);
            number.appendChild(span_2);
            number.style = 'position: relative; bottom: 0; right: 0; top: 0; left: -8%; justify-self: center; align-self: center;'
            if (i !== 1) {
                number.style.display = 'none';
            }
            container.appendChild(number);
            

        }
    const buttons = document.createElement('div');
    buttons.setAttribute('id', 'buttons');
    
    const previous = document.createElement('span');
    previous.innerHTML = '&#8592;&#8195Предыдущий'
    previous.setAttribute('class', 'previous');
    previous.addEventListener('mouseover', (event) => {
        const numbers = document.querySelectorAll('.number_mobile');
        numbers.forEach((el) => {
            if (el.style.display !== 'none' && el.id === 'el_1') {
                event.target.style.cursor = 'not-allowed';
            }
            else if (el.style.display !== 'none' && el.id !== 'el_1') {
                event.target.style.cursor = 'pointer';
            }
        })
    });
    previous.addEventListener('mouseout', (event) => {
        event.target.style.cursor = 'none';
    });
    previous.addEventListener('click', (event) => {
        const numbers = document.querySelectorAll('.number_mobile');
        let num = 0;
        for (let el of numbers) {
           num++;
           if (el.style.display !== 'none' && el.id !== 'el_1') {
                const previous_number = document.getElementById(`el_${num - 1}`);
                previous_number.style.display = 'block';
                el.style.display = 'none';
                break;
            }
        }
    });
    buttons.appendChild(previous);
    
    const next = document.createElement('span');
    next.innerHTML = 'Следующий&#8195&#8594;'
    next.setAttribute('class', 'next');
    next.addEventListener('mouseover', (event) => {
        const numbers = document.querySelectorAll('.number_mobile');
        numbers.forEach((el) => {
            if (el.style.display !== 'none' && el.id === 'el_6') {
                event.target.style.cursor = 'not-allowed';
            }
            else if (el.style.display !== 'none' && el.id !== 'el_6') {
                event.target.style.cursor = 'pointer';
            }
        })
    })
    next.addEventListener('mouseout', (event) => {
        event.target.style.cursor = 'none';
    })
    next.addEventListener('click', (event) => {
        const numbers = document.querySelectorAll('.number_mobile');
        let num = 0;
        for (let el of numbers) {
           num++;
           if (el.style.display !== 'none' && el.id !== 'el_6') {
                const next_number = document.getElementById(`el_${num + 1}`);
                next_number.style.display = 'block';
                el.style.display = 'none';
                break;
            }
        }
    })

    buttons.appendChild(next);

    container.appendChild(buttons);
 
}   
function whiteboard () {
    const header = document.querySelector('header');
    header.setAttribute('class', 'whiteboard');
    header.innerHTML = `<div id = "title"><span class = "title" >EPC Hunters</span><span class = "close">Loren Ipsum&#8195
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class = "krest" 
            style = "position : relative; top: 4%; left: -6%" >
                            <path d="M17.125 0.875L0.875 17.125M0.875 0.875L17.125 17.125" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></span>
                            </div>
                    <span class = "lm">Loren Ipsum</span>
                    <span class = "lm">Loren Ipsum</span>
                    <span class = "lm">Loren Ipsum</span>
                
                <div id="loren_ipsum_end">
                    <span style = "border-bottom : 1px solid black">LOREN IPSUM&#8195;
                    
                        <svg width="0.6em" height="0.6em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.9912 0H12V6.0088H11.2489V1.28509L0.528117 12L0 11.4719L10.7149 0.7511H5.9912V0Z" fill="black"/>
                        </svg>
                    </span>
        </div>`

    const title = document.getElementById('title');
    title.style.width = '100%';
    const EPC = title.querySelector('.title');
    EPC.style.width = '10%';
    EPC.style.color = '#F2F3EF';
    const main = document.querySelector('main');
    main.querySelector('#loren_ipsum_title').style.display = 'none';
    main.style = `
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 30%;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./style/img/2d25763f1aff686e7b2721d0055ac950.jpg);
    background-repeat: no-repeat;
    background-clip: border-box;
    background-size: cover;
    background-origin: border-box;
    z-index: 50000;
    `
    const krest = document.querySelector('.krest');
            krest.addEventListener('click', (event) => {
            header.setAttribute('class', 'smallheader');
            header.innerHTML = `<div id="title"><span>EPC Hunters</span></div><svg width="26" height="22" viewBox="0 0 26 22" onclick = "whiteboard()" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 0.99999C0.5 0.778976 0.587798 0.567015 0.744078 0.410734C0.900358 0.254454 1.11232 0.166656 1.33333 0.166656H24.6667C24.8877 0.166656 25.0996 0.254454 25.2559 0.410734C25.4122 0.567015 25.5 0.778976 25.5 0.99999C25.5 1.221 25.4122 1.43296 25.2559 1.58925C25.0996 1.74553 24.8877 1.83332 24.6667 1.83332H1.33333C1.11232 1.83332 0.900358 1.74553 0.744078 1.58925C0.587798 1.43296 0.5 1.221 0.5 0.99999ZM0.5 11C0.5 10.779 0.587798 10.567 0.744078 10.4107C0.900358 10.2545 1.11232 10.1667 1.33333 10.1667H24.6667C24.8877 10.1667 25.0996 10.2545 25.2559 10.4107C25.4122 10.567 25.5 10.779 25.5 11C25.5 11.221 25.4122 11.433 25.2559 11.5892C25.0996 11.7455 24.8877 11.8333 24.6667 11.8333H1.33333C1.11232 11.8333 0.900358 11.7455 0.744078 11.5892C0.587798 11.433 0.5 11.221 0.5 11ZM1.33333 20.1667C1.11232 20.1667 0.900358 20.2545 0.744078 20.4107C0.587798 20.567 0.5 20.779 0.5 21C0.5 21.221 0.587798 21.433 0.744078 21.5892C0.900358 21.7455 1.11232 21.8333 1.33333 21.8333H24.6667C24.8877 21.8333 25.0996 21.7455 25.2559 21.5892C25.4122 21.433 25.5 21.221 25.5 21C25.5 20.779 25.4122 20.567 25.2559 20.4107C25.0996 20.2545 24.8877 20.1667 24.6667 20.1667H1.33333Z" fill="white"/>
            </svg>`;
            main.querySelector('#loren_ipsum_title').style.display = 'block';
            main.style = 'width: 100vw;';
     });
}

