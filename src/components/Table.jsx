import settings from '../mock-server/settings';
import users from '../mock-server/users';
import Timer from './Timer';

export default function Table(props) {
    const {className} = props;
    
    return (
        <div className={className}>
            <table className="table-box__table">
                <tbody className='table-box__body'>
                    <tr className="table-box__timer timer">
                        <td  className="timer__title">
                            <h2>Ход</h2>
                        </td>
                        <Timer usersNumber={Object.keys(users).length} intervalDuration={120} />
                    </tr>
                    <tr className="table-box__row table-box__first-row">
                        <th className="table-box__cell table-box__title table-box__title-settings">
                            Параметры и требования
                        </th>
                        {Object.values(users).map((user, index) => {
                            return (
                                <th className="table-box__cell table-box__title" key={index}>
                                    <p>Участник №{index + 1}</p>
                                    <p>{user.name}</p>
                                </th>
                            );
                        })}
                    </tr>

                    {Object.keys(settings).map((param, index) => {
                        return (
                            <tr className="table-box__row" key={index}>
                                <td className="table-box__cell table-box__param" >{settings[param]}</td>
                                {Object.values(users).map((user, userIndex) => {
                                    return (
                                        <td className="table-box__cell" key={userIndex}>
                                            {param === 'standartImprovement' ? 
                                                (user[param] ? 'есть' : '-') : 
                                                param === 'paymentCondition' ? 
                                                `${user[param] + '%'}` : 
                                                param === 'productionPrice' ? 
                                                <div className='table-box__prices'>
                                                    <p>{user[param]} руб.</p>
                                                    <p>-25000 руб.</p>
                                                    <p>{+user[param] - 25000} руб.</p>
                                                </div> : user[param]
                                            }
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}