import { Fragment, useEffect, useState } from "react";

const getCurrentDateInSeconds = function() {
    const timezoneShift = new Date().getTimezoneOffset(); // в минутах
    return Math.floor( (Date.now() - (timezoneShift * 60 * 1000)) / 1000);
}


export default function Timer(props) {
    const {usersNumber, intervalDuration} = props; // interval in seconds
    const usersArray = new Array(usersNumber);
    usersArray.fill(1);
    
    const [seconds, setSeconds] = useState(getCurrentDateInSeconds());
    const [currentUserNumber, setCurrentUserNumber] = useState(1);

    const [secondsLeft, setSecondsLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setSeconds(getCurrentDateInSeconds()), 1000);
        const nextUserNumber = Math.ceil((seconds + 1) / intervalDuration) % usersNumber + 1;
        
        if (currentUserNumber !== nextUserNumber) {
            setCurrentUserNumber(nextUserNumber);
        }

        setSecondsLeft(Math.ceil(intervalDuration - (seconds % intervalDuration)) % 60);
        setMinutesLeft( Math.floor(Math.ceil(intervalDuration - (seconds % intervalDuration)) / 60) );

        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <Fragment>
            {usersArray.map((user, index) => {
                if (index + 1 === currentUserNumber) {
                    return (
                        <td key={index} className={'timer__user timer__user_active'}>
                            <p>Сейчас ваш ход</p>
                            <p>До конца хода осталось:</p>
                            <p>{minutesLeft === 0 ? '00' : 
                                minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:
                                {secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}</p>
                        </td>
                    );
                } else {
                    return (
                        <td key={index} className="timer__user">
                            
                        </td>
                    );
                }
            })}
        </Fragment>
    );
}