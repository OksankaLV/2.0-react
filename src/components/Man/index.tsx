import { memo } from 'react';
import './Man.css';

const Man = () => {
    return (
        <div className='matador'>
            <div>
                <div className="legMan left"></div>
                <div className="legMan right"></div>
            </div>
            <div className="cloak">
            </div>
            <div className="headMan">
                <div className="eye left"></div>
                <div className="eye right"></div>
                <div className="mouth"></div>
            </div>
            <div className="hat"></div>
        </div>
    )
}

export default memo(Man)