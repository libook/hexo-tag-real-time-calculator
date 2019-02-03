'use strict';

/**
 * Syntax:
 *  {% calc <JS code for returning result.> %}
 */
hexo.extend.tag.register('calc', (args) => {
    const uid = Date.now();
    const id = `tag-calc-${uid}`;
    return `
        <span id="${id}"></span>
        <script type="application/javascript">
            document.getElementById('${id}').innerHTML = eval(${args[0]});
        </script>
    `;
}, { "ends": false });
