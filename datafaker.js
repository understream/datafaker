function FakeDataMaker( fmt )
{
    var ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    var NUMBERS = "0123456789";
    var DOMAIN_SUFFIXES = [".com",".net",".co"];

    function select_one( arr )
    {
        return arr[make_inteter( 0, arr.length - 1 )];
    }

    function make_inteter( s, e )
    {
        return Math.floor( Math.random() * (e-s+1)) + s;
    }

    function make_nonsense_word( length, upper_first )
    {
        var arr = [];
        for( var i = 0 ; i < length ; i++ )
        {
            arr.push( select_one( ALPHABET ) );
        }
        if( upper_first ) arr[0] = arr[0].toUpperCase();
        return arr.join("");
    }

    function make_name( )
    {
        return [
            make_nonsense_word( make_inteter( 5,11 ), true ),
            make_nonsense_word( 1, true ) + ".",
            make_nonsense_word( make_inteter( 5,11 ), true )
        ].join(" ");
    }

    function make_domain( levels )
    {
        var arr = [];
        for( var i = 0 ; i < levels ; i++ )
        {
            arr.push( make_nonsense_word( make_inteter( 5, 10 ) ) );
        }
        return arr.join(".") + select_one( DOMAIN_SUFFIXES );
    }

    function make_nonsense_sentence( min_word_count, max_word_count )
    {
        var length = make_inteter( min_word_count, max_word_count );
        var words = [];
        for( var i = 0 ; i < length ; i++ )
        {
            words.push( make_nonsense_word( make_inteter(3, 7), i == 0 ) );
        }
        return words.join( " " );
    }

    function make_email()
    {
        return "NOT SUPPORTED YET"
    }

    function make_location()
    {
        return [0,0]
    }

    var NAME2FUNC = {
        'integer': make_inteter,
        'name': make_name,
        'word': make_nonsense_word,
        'domain': make_domain,
        'sentence': make_nonsense_sentence,
    }

    var maker = {
        make: function( count )
        {
            var ret = [];
            for( var i = 0 ; i < count ; i++ )
            {
                var row = {};
                for( var k in fmt )
                {
                    var func_name = fmt[k][0];
                    var func = NAME2FUNC[func_name];
                    if( !func ) continue;
                    row[ k ] = func.call( func, ...fmt[k].slice(1) );
                }
                ret.push(row);
            }
            return ret;
        }
    }

    return maker;

}
