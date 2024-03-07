import Man from './Man';
import {useEffect, useState } from 'react';

interface iMatador{
    applause?: number;
    matadorPosition?: number;
    setMatarodPosition?: Function;
}



const ApplausePlay = ({ music }: { music: string }) => <audio src={music} autoPlay></audio>

const music1 = './src/components/applause/mixkit-one-man-clapping-482.wav'
const music2 = './src/components/applause/mixkit-church-light-applause-501.wav'
const music3 = './src/components/applause/mixkit-small-group-moderate-applause-505.wav'


export function Matador(matador: iMatador) {


    const [posMatador, setPosMatador] = useState(matador.matadorPosition)
    const [applause, setApplause] = useState(matador.applause);
    
    document.addEventListener("bullRun", goMatador)

    function goMatador(event: any) {
        const posBull = event.detail.position;
        if (posBull === matador.matadorPosition) {
            setPosMatador(Math.floor(Math.random() * 8));
        }
        
    }



    useEffect(() => {
        if (matador.setMatarodPosition) {
            console.log(`Matador is moving from ${matador.matadorPosition} to ${posMatador}`)
            if (applause === matador.applause && applause === 3) { setApplause(matador.applause) }
            matador.setMatarodPosition(posMatador)
        }
       return
    }, [posMatador])



    return (
        <>
            <Man />
            {applause === 0 && <ApplausePlay music={music1} />}
            {applause === 1 && <ApplausePlay music={music1} />}
            {applause === 2 && <ApplausePlay music={music2} />}
            {applause === 3 && <ApplausePlay music={music3} />}
    </>
    )
}


