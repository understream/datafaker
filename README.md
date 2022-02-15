# datafaker
a standalone javascript lib that generates fake data for debugging or testing.

<pre>
var fmt = {
    'id': ['inc', 'id', 100],
    'static': ['hardcode', 'static'],
    'age':  ['integer', 0, 120], // [start, end]
    'full_name': ['name'],
    'first_name':['word',5, true],
    'description': ['sentence', 10, 20],
    'website': ['domain', 2],
    };
var f = FakeDataMaker( fmt );
var res = f.make( 10 );
</pre>
