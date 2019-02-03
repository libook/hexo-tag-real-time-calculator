'use strict';

/**
 * Syntax:
 *  {% calc '<JS code for returning result.>' %}
 */
hexo.extend.tag.register('calc', (args) => {
    if (!global._HEXO_TAG_REAL_TIME_CALCULATOR_UID) {
        global._HEXO_TAG_REAL_TIME_CALCULATOR_UID = 0;
    }

    const uid = ++global._HEXO_TAG_REAL_TIME_CALCULATOR_UID;
    const id = `tag-calc-${uid}`;

    /**
     * These "<!-- -->" are important!
     * For solving the white space issue.
     */
    return `<!--
        ---><span id="${id}" style=""></span><!--
        ---><script type="application/javascript">
                document.getElementById('${id}').innerHTML = eval(${args[0]});
            </script><!--
        --->`;
}, { "ends": false });
