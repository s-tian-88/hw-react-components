import classes from './calendar.module.css';

export const Calendar = ({ timestamp }) => {

    const date = new Date(timestamp);

    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ]

    const months = [
        'Январь', 'Февраль', 'Март', 'Апрель',
        'Май', 'Июнь', 'Июль', 'Август',
        'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ]

    const dayNum = date.getDate();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear()
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const getDeclMonth = (month) => {

        if ( month.toLowerCase() == 'май' ) return 'Мая'; // :)

        const declMonth = month.endsWith('ь') ? month.replace('ь', 'я') : month + 'а';

        return declMonth;
    }


    let table = [];
    let week = [];
    let weekNum = 1

    for ( let i = 1; i < firstDay; i++ ) {
        let el = <td className={classes["ui-datepicker-other-month"]}> - </td>;
        week.push(el);
    }

    for ( let i = 1; i < daysInMonth + 1; i++ ) {

        let el = i === dayNum ? <td className={classes["ui-datepicker-today"]}>{ i }</td> : <td>{ i }</td>;
        week.push(el);

        if ( week.length === 7 ) {
            table.push( <tr key={ weekNum }>{ week }</tr> )
            week = [];
            weekNum += 1;

        } else if ( i === daysInMonth ) {
            table.push( <tr key={ weekNum }>{ week }</tr> )
        }


    }

    return (
        <div className={ classes["calendar-container"] }>
        <div className={ classes["ui-datepicker"] }>
            <div className={ classes["ui-datepicker-material-header"] }>
                <div className={ classes["ui-datepicker-material-day"] }>{ days[day] }</div>
                <div className={ classes["ui-datepicker-material-date"] }>
                    <div className={ classes["ui-datepicker-material-day-num"] }>{ dayNum }</div>
                    <div className={ classes["ui-datepicker-material-month"] }>{ getDeclMonth(months[month]) }</div>
                    <div className={ classes["ui-datepicker-material-year"] }>{ year }</div>
                </div>
            </div>
            <div className={ classes["ui-datepicker-header"] }>
                <div className={ classes["ui-datepicker-title"] }>
                    <span className={ classes["ui-datepicker-month"] }>{ months[month] }</span>
                    &nbsp;
                    <span className={ classes["ui-datepicker-year"] }>{ year }</span>
                </div>
            </div>
            <table className={ classes["ui-datepicker-calendar"] }>
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className={ classes["ui-datepicker-week-end"] } />
                    <col className={ classes["ui-datepicker-week-end"] } />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">Пн</th>
                        <th scope="col" title="Вторник">Вт</th>
                        <th scope="col" title="Среда">Ср</th>
                        <th scope="col" title="Четверг">Чт</th>
                        <th scope="col" title="Пятница">Пт</th>
                        <th scope="col" title="Суббота">Сб</th>
                        <th scope="col" title="Воскресенье">Вс</th>
                    </tr>
                </thead>
                <tbody>
                    { table }
                </tbody>
            </table>
        </div>
        </div>
    )

};
