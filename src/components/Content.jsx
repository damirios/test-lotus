import Table from "./Table";
import users from "../mock-server/users";
import Timer from "./Timer";

export default function Content() {
    
    return (
        <main className="content">
            <div className="container">
                <div className="content__flex">
                    <h1 className="content__title">
                        Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:
                    </h1>
                    <div className="content__auction auction">
                        <div className="auction__queue queue">
                            
                            {/* <Timer usersNumber={Object.keys(users).length} intervalDuration={120} /> */}
                            {/* <div className="queue__users">
                                {Object.values(users).map((user, index) => {
                                    const newIndex = index + 1;
                                    return (
                                        <div className="queue__user">
                                            {'user ' + '№' + newIndex}
                                        </div>
                                    );
                                })}
                            </div> */}
                        </div>
                        <Table className='auction__table-box table-box' />
                    </div>
                </div>
            </div>
        </main>
    );
}