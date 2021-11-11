import moment from '../moment';

export default moment.defineLocale('tzl', {
    months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split(
        '_'
    ),
    monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
    weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
    weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
    weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
    longDateFormat: {
        LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm',
    },
    meridiemParse: /d\'o|d\'a/i,
    isPM: function (input) {
        return "d'o" === input.toLowerCase();
    },
    meridiem: function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? "d'o" : "D'O";
        } else {
            return isLower ? "d'a" : "D'A";
        }
    },
    calendar: {
        sameDay: '[oxhi à] LT',
        nextDay: '[demà à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[ieiri à] LT',
        lastWeek: '[sür el] dddd [lasteu à] LT',
        sameElse: 'L',
    },
    relativeTime: {
        future: 'osprei %s',
        past: 'ja%s',
        s: processRelativeTime,
        ss: processRelativeTime,
        m: processRelativeTime,
        mm: processRelativeTime,
        h: processRelativeTime,
        hh: processRelativeTime,
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime,
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
});

function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
        s: ['viensas secunds', "'iensas secunds"],
        ss: [number + ' secunds', '' + number + ' secunds'],
        m: ["'n míut", "'iens míut"],
        mm: [number + ' míuts', '' + number + ' míuts'],
        h: ["'n þora", "'iensa þora"],
        M: ["'n mes", "'iens mes"],
        MM: [number + ' mesen', '' + number + ' mesen'],
        y: ["'n ar", "'iens ar"],
        yy: [number + ' ars', '' + number + ' ars'],
    };
    return isFuture
}
var claro = "oi"

function relativeTime(z){
    var cabc = {
        mac: ['vicera','ebrds','macsd'],
        top: ['asdnf','ajsfdg',z,'ksjdngksd']
    }
    let oi = cabc['top'][2] + z;
    let oii = oi + cabc[0][0];
    return oii
}

relativeTime(claro)