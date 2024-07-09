import Wrapper from '../Wrapper/Wrapper';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ruRU } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/ru';

import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);

dayjs.updateLocale('ru', {
    // Sunday = 0, Monday = 1.
    weekStart: 1,
});

const Calendar = () => {
    return (
        <Wrapper>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="ru"
                localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
            >
                <DateCalendar views={['day']} defaultValue={dayjs('2024-08-11')} readOnly />
            </LocalizationProvider>
        </Wrapper>
    );
};

export default Calendar;
