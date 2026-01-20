'use client';

import { useEffect } from 'react';
import { animate, scroll, cubicBezier } from 'motion';
import './ScrollGrid.css';

export default function ScrollGrid() {
    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            console.log('Reduced motion preference detected - skipping animations');
            return;
        }

        const container = document.getElementById('scroll-grid-container');
        if (!container) return;

        const image = container.querySelector('.scaler img');
        const firstSection = container.querySelector('main section:first-of-type');
        const layers = container.querySelectorAll('.grid > .layer');

        if (!image || !firstSection) return;

        // Measure the natural size before animating
        const naturalWidth = image.offsetWidth;
        const naturalHeight = image.offsetHeight;

        // Get viewport dimensions in pixels
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Animate image on scroll - shrink from full screen to natural size
        const stopImageScroll = scroll(
            animate(image, {
                width: [viewportWidth, naturalWidth],
                height: [viewportHeight, naturalHeight]
            }, {
                width: { easing: cubicBezier(0.65, 0, 0.35, 1) },   // GSAP power2.inOut
                height: { easing: cubicBezier(0.42, 0, 0.58, 1) }   // GSAP power1.inOut
            }),
            {
                target: firstSection,
                offset: ['start start', '80% end end']
            }
        );

        // Animate each layer with staggered timing
        const scaleEasings = [
            cubicBezier(0.42, 0, 0.58, 1),  // Layer 1: GSAP power1.inOut
            cubicBezier(0.76, 0, 0.24, 1),  // Layer 2: GSAP power3.inOut
            cubicBezier(0.87, 0, 0.13, 1)   // Layer 3: GSAP power4.inOut
        ];

        const layerControls = [];

        layers.forEach((layer, index) => {
            // Calculate different end points for each layer
            const endOffset = `${1 - (index * 0.05)} end`;

            // fade: opacity stays 0 until 55% of scroll progress, then fades to 1
            const fadeControl = scroll(
                animate(layer, {
                    opacity: [0, 0, 1]
                }, {
                    offset: [0, 0.55, 1],  // Hold at 0 until 55%, then animate to 1
                    easing: cubicBezier(0.61, 1, 0.88, 1)  // GSAP sine.out
                }),
                {
                    target: firstSection,
                    offset: ['start start', endOffset]
                }
            );
            layerControls.push(fadeControl);

            // reveal: scale stays 0 until 30% of scroll progress, then scales to 1
            const scaleControl = scroll(
                animate(layer, {
                    scale: [0, 0, 1]
                }, {
                    offset: [0, 0.3, 1],   // Hold at 0 until 30%, then animate to 1
                    easing: scaleEasings[index] || cubicBezier(0.42, 0, 0.58, 1)
                }),
                {
                    target: firstSection,
                    offset: ['start start', endOffset]
                }
            );
            layerControls.push(scaleControl);
        });

        // Cleanup function
        return () => {
            stopImageScroll();
            layerControls.forEach(control => control());
        };
    }, []);

    return (
        <div className="content-wrap" id="scroll-grid-container">
            <header>
                <h1 className="fluid">let's<br />scroll.</h1>
                <h2 className="fluid">
                    Origionally from{' '}
                    <a href="https://codepen.io/jh3y/pen/VYZwOwd" target="_blank" rel="noreferrer">
                        Jhey →
                    </a>
                    , converted to Motion
                </h2>
            </header>
            <main>
                <section>
                    <div className="content">
                        <div className="grid">
                            {/* Layer 1: Outer edges (6 images) */}
                            <div className="layer">
                                <div>
                                    <img src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1556304044-0699e31c6a34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxmYXNoaW9ufGVufDB8fDB8fHww" alt="" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxmYXNoaW9ufGVufDB8fDB8fHww" alt="" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1vZGVsJTIwZmFzaGlvbiUyMHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1565321590372-09331b9dd1eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpciUyMGpvcmRhbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>
                            </div>
                            {/* Layer 2: Inner columns (6 images) */}
                            <div className="layer">
                                <div>
                                    <img src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxwcm9kdWN0fGVufDB8fDB8fHww" alt="" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1637414165749-9b3cd88b8271?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlY2glMjBwcm9kdWN0fGVufDB8fDB8fHww" alt="" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1699911251220-8e0de3b5ce88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25ld2hlZWx8ZW58MHx8MHx8fDA%3D" alt="" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1667483629944-6414ad0648c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyeSUyMHdhdGNofGVufDB8fDB8fHww" alt="" />
                                </div>
                                <div>
                                    <img src="https://plus.unsplash.com/premium_photo-1706078438060-d76ced26d8d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhbWVyYSUyMHBvbGFyb2lkfGVufDB8fDB8fHww" alt="" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGl0ZW18ZW58MHx8MHx8fDA%3D" alt="" />
                                </div>
                            </div>
                            {/* Layer 3: Center column top and bottom (2 images) */}
                            <div className="layer">
                                <div>
                                    <img src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>
                            </div>
                            {/* Center scaler image */}
                            <div className="scaler">
                                <img src="https://assets.codepen.io/605876/model-shades.jpg?format=auto&quality=100" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="fluid">fin.</h2>
                </section>
            </main>
        </div>
    );
}