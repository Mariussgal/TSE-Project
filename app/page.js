'use client'
import styles from './page.module.scss'
import ZoomParallax from '../components/Zoomparallax/index';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import Header from '../components/Header.jsx'
import About from '../components/About.jsx'
import SectionTransition from '../components/SectionTransition.jsx';

export default function Home() {

    useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

    return (
        
        <main className={styles.main}>
            <Header/>
            <ZoomParallax />
            <SectionTransition />
            <About/>
        </main>
    )
}
