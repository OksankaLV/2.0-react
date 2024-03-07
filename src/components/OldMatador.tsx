import React, { ReactEventHandler } from 'react';
import Man from './Man';


interface iMatador{
    applause?: number;
    matadorPosition?: number;
    setMatarodPosition?: Function;
}



const ApplausePlay = ({ music }: { music: string }) => <audio src={music} autoPlay></audio>

const music1 = './src/components/applause/mixkit-one-man-clapping-482.wav'
const music2 = './src/components/applause/mixkit-church-light-applause-501.wav'
const music3 = './src/components/applause/mixkit-small-group-moderate-applause-505.wav'

export class Matador extends React.Component<iMatador, { applause?: number }>{
    constructor(props: iMatador) { 
        super(props);
        this.state = {
            applause: props.applause
        }
    }
    
    goMatador = (event: any) => {
        const posBull = event.detail.position;
        const { matadorPosition, setMatarodPosition } = this.props;
            if (posBull === matadorPosition) {
            let  posMatador = (Math.floor(Math.random() * 8));
                console.log(`Matador is moving from ${matadorPosition} to ${posMatador}`)
                setMatarodPosition?.(posMatador);
        }
    }

    componentDidMount(): void {
        document.addEventListener("bullRun", this.goMatador);
    }

    componentWillUnmount(): void {
        document.removeEventListener("bullRun", this.goMatador)
    }

   componentDidUpdate(prevProps:iMatador) {
        const applausePrew = prevProps.applause;
       if (this.props.applause === 3 && applausePrew !== 3) {this.goMatador}
    
    }

    render(): React.ReactNode {
        return (
        <>
            <Man />
            {this.state.applause === 0 && <ApplausePlay music={music1} />}
            {this.state.applause === 1 && <ApplausePlay music={music1} />}
            {this.state.applause === 2 && <ApplausePlay music={music2} />}
            {this.state.applause === 3 && <ApplausePlay music={music3} />}
        </>
    )
    }

}