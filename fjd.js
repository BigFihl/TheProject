//autor BigFill

import moment from '../moment';

var suffixes = {
    1: "'inci",
    5: "'inci",
    8: "'inci",
    70: "'inci",
    80: "'inci",
    2: "'nci",
    4: "'üncü",
    100: "'üncü",
    6: "'ncı",
    9: "'uncu",
    10: "'uncu",
    30: "'uncu",
    60: "'ıncı",
    90: "'ıncı",
};

export default moment.defineLocale('tr', {
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split(
        '_'
    ),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split(
        '_'
    ),
    weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm',
    },

    ordinal: function (number, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'Do':
            case 'DD':
                return number;
            default:
                if (number === 0) {
                    // special case for zero
                    return number + "'ıncı";
                }
                var a = number % 10,
                    b = (number % 100) - a,
                    c = number >= 100 ? 100 : null;
                return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        }
    },
    week: {
        dow: 1,
        doy: 7, 
    },
    maccabeus: {
        sit : 2,
        oid: 9345,
        sjkdg: 92348,
        vicera: "afgdg"
    }
});
